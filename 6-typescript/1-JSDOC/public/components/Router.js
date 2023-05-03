import { Route } from "./Routes.js"
import { searchHandler, search } from "../features/search.js"
import { createSpinner } from "./store.js"
import Nope from "../pages/Nope.js"
import * as Types from "../types.js"

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
  const originURLPath = new URL(location.href).pathname

  if (navigateEvent && path === originURLPath) {
    navigateEvent.preventDefault()
    main?.scrollTo({ top: 0, behavior: "smooth" })
    return
  }

  const searchParams = new URLSearchParams(newURL.search)
  const searchValue = searchParams.get("search")

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
            // document.startViewTransition(async () => {
            //   await Route(path)
            // })
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
  // : document.startViewTransition(async () => Route(path))
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

  // transition.finished.finally(() => {
  //   removeActiveClass()
  // })

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
  newImage.style.viewTransitionName = "activeImage"
}

// function removeActiveClass() {
//   if (!clickedImage) return
//   const newImage = document.querySelector("img")
//   oldImage ?? (oldImage.style.viewTransitionName = "")
//   newImage ?? (newImage.style.viewTransitionName = "")
// }
