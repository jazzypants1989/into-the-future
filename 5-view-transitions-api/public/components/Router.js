import { Route } from "./Routes.js"
import { searchHandler, search } from "../features/search.js"
import { createSpinner } from "./store.js"
import render from "./render.js"

export const main = document.querySelector(".main")

export default async function Router(navigateEvent) {
  if (shouldNotIntercept(navigateEvent)) {
    console.log("shouldNotIntercept")
    return
  }

  // Get URL
  const url = navigateEvent ? navigateEvent.destination.url : location.href
  const newURL = new URL(url)
  const path = newURL.pathname
  const nav = document.querySelector("nav")
  const navOpen = nav.style.display === "flex"
  const mediaQuery = window.matchMedia("(max-width: 768px)")
  navOpen && mediaQuery.matches && (nav.style.display = "none")
  if (navigateEvent && path === location.pathname) {
    navigateEvent.intercept({
      handler() {
        alert("We're already here! Silly Billy! *honk honk* 🤡 (that's you)")
        navigateEvent.preventDefault()
      },
    })
    return
  }
  const searchParams = new URLSearchParams(newURL.search)
  const searchValue = searchParams.get("search")

  // Start Spinner
  const spinner = createSpinner()
  const mainHTML = main.innerHTML
  checkAndReplaceHTML(mainHTML, spinner, 200)

  // Check for search
  if (searchValue) {
    search.value = searchValue
    return searchHandler()
  }

  // Route
  navigateEvent
    ? navigateEvent.intercept({
        async handler() {
          navigateEvent.signal.onabort = () => {
            console.log("aborted")
            main.innerHTML = mainHTML
          }

          try {
            await Route(path)
          } catch (error) {
            console.error("error", error)
            Nope("error", error)
          }
        },
      })
    : await Route(path)
}

navigation.addEventListener("navigate", Router)

function checkAndReplaceHTML(mainHTML, spinner, time) {
  setTimeout(() => {
    if (mainHTML === main.innerHTML) {
      const heading = document.createElement("h1")
      heading.textContent = "Loading..."
      render({ component: heading.outerHTML + spinner.outerHTML })
    }
  }, time)
}

function shouldNotIntercept(navigateEvent) {
  if (!navigateEvent) return
  return (
    !navigateEvent.canIntercept ||
    navigateEvent.hashChange ||
    navigateEvent.downloadRequest ||
    navigateEvent.formData
  )
}
