import { Route } from "./Routes.js"
import { searchHandler, search } from "../features/search.js"
import { createSpinner } from "./store.js"
import updateCart, { cart } from "../features/cart.js"

export const main = document.querySelector(".main")

export default function Router(navigateEvent) {
  if (shouldNotIntercept(navigateEvent)) {
    console.log("shouldNotIntercept")
    return
  }

  // Get URL
  const url = navigateEvent ? navigateEvent.destination.url : location.href
  const newURL = new URL(url)
  const path = newURL.pathname
  if (navigateEvent && path === location.pathname) {
    navigateEvent.preventDefault()
    main.scrollTo({
      top: 0,
      behavior: "smooth",
    })
    return
  }
  const searchParams = new URLSearchParams(newURL.search)
  const searchValue = searchParams.get("search")

  // Start Spinner
  const spinner = createSpinner()
  const mainHTML = main.innerHTML
  checkAndReplaceHTML(mainHTML, spinner, 300)

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
            console.log("error", error)
            main.innerHTML = Nope("error", error)
          }
        },
      })
    : Route(path)
}

navigation.addEventListener("navigate", Router)

function checkAndReplaceHTML(mainHTML, spinner, time) {
  setTimeout(() => {
    if (mainHTML === main.innerHTML) {
      main.innerHTML = spinner.outerHTML
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
