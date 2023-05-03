import { Route } from "Routes"
import { searchHandler, search } from "search"
import { createSpinner } from "store"
import Nope from "Nope"

/**
 * The main area of the page
 * @type {HTMLElement | null}
 */
export const main = document.querySelector(".main")

/**
 * The Central Router of the app
 * @param {NavigateEvent} [navigateEvent]
 * @returns {void}
 */
export default function Router(navigateEvent) {
  if (shouldNotIntercept(navigateEvent)) {
    console.log("shouldNotIntercept")
    return
  }

  // Get URL
  const url = navigateEvent ? navigateEvent.destination.url : location.href
  const newURL = new URL(url)
  const path = newURL.pathname
  const searchParams = new URLSearchParams(newURL.search)
  const searchValue = searchParams.get("search")
  const nav = document.querySelector("nav")
  const navOpen = nav?.style.display === "flex"
  const mediaQuery = window.matchMedia("(max-width: 768px)")
  navOpen && mediaQuery.matches ? (nav.style.display = "none") : null

  if (navigateEvent && path === location.pathname) {
    navigateEvent.preventDefault()
    main?.scrollTo({ top: 0, behavior: "smooth" })
    return
  }

  // Start Spinner
  const spinner = createSpinner()
  const mainHTML = main?.innerHTML
  checkAndReplaceHTML(navigateEvent, mainHTML, spinner, 300)

  // Check for search
  if (searchValue && search) {
    search.value = searchValue
    searchHandler()
    return
  }

  // Route
  navigateEvent
    ? navigateEvent.intercept({
        async handler() {
          navigateEvent.signal.onabort = () => {
            if (!main) return
            main.innerHTML = mainHTML || ""
          }

          try {
            addOldActiveClass()
            transitionHelper({
              updateDOM: async () => {
                await Route(path)
                addNewActiveClass()
              },
            })
          } catch (error) {
            console.error("error", error)
            if (!main) return
            Nope("error", "Something went wrong.")
          }
        },
      })
    : transitionHelper({
        updateDOM: async () => {
          await Route(path)
        },
      })
}

window.navigation.addEventListener("navigate", Router)

/**
 * Check if the main HTML is the same as the old main HTML and replace it with a spinner if it is.
 * @param {NavigateEvent | undefined} event
 * @param {string | undefined} mainHTML
 * @param {HTMLElement} spinner
 * @param {number} time
 * @returns {void}
 */
function checkAndReplaceHTML(event, mainHTML, spinner, time) {
  if (event && event.destination.url === location.href) return
  if (event && event.formData) return
  setTimeout(() => {
    if (mainHTML === main?.innerHTML && main) {
      main.innerHTML = spinner.outerHTML
    }
  }, time)
}

/**
 * Check if the navigation event should be intercepted.
 * @param {NavigateEvent | undefined} navigateEvent
 * @returns {string | true | FormData | null | undefined}
 */
function shouldNotIntercept(navigateEvent) {
  if (!navigateEvent) return
  return (
    !navigateEvent.canIntercept ||
    navigateEvent.hashChange ||
    navigateEvent.downloadRequest ||
    navigateEvent.formData
  )
}

/**
 * Helper function to handle view transitions
 * @param {object} options
 * @param {boolean} [options.skipTransition]
 * @param {string[]} [options.classNames]
 * @param {() => void} options.updateDOM
 * @returns {ViewTransition}
 */
function transitionHelper({
  skipTransition = false,
  classNames = [],
  updateDOM,
}) {
  if (skipTransition || !document.startViewTransition) {
    const updateCallbackDone = Promise.resolve(updateDOM())

    return {
      ready: Promise.reject(Error("View transitions unsupported")),
      updateCallbackDone,
      finished: updateCallbackDone,
      skipTransition: () => {},
    }
  }
  const transition = document.startViewTransition(updateDOM)

  return transition
}

/**
 * @type {boolean}
 */
let clickedImage = false
/**
 * @type {HTMLImageElement | null}
 */
let oldImage = null

document.addEventListener("click", (e) => {
  let element = e.target
  if (
    element instanceof HTMLImageElement ||
    element instanceof HTMLHeadingElement
  ) {
    if (element instanceof HTMLHeadingElement && element.parentNode) {
      element = element.parentNode.querySelector("img")
    }
    if (element instanceof HTMLImageElement) {
      oldImage = element
      clickedImage = true
    }
  } else {
    clickedImage = false
  }
})

function addOldActiveClass() {
  if (!clickedImage || !oldImage) return
  oldImage.style.viewTransitionName = "activeImage"
}

function addNewActiveClass() {
  if (!clickedImage) return
  const newImage = document.querySelector("img")
  if (!newImage) return
  newImage.classList.add("activeImage")
  newImage.style.viewTransitionName = "activeImage"
}
