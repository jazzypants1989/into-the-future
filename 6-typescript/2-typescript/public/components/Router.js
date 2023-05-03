import { Route } from "./Routes.js";
import { searchHandler, search } from "../features/search.js";
import { createSpinner } from "./store.js";
import Nope from "../pages/Nope.js";
export const main = document.querySelector(".main");
export default function Router(navigateEvent) {
    if (shouldNotIntercept(navigateEvent)) {
        console.log("shouldNotIntercept");
        return;
    }
    // Get URL
    const url = navigateEvent ? navigateEvent.destination.url : location.href;
    const newURL = new URL(url);
    const path = newURL.pathname;
    const nav = document.querySelector("nav");
    const navOpen = nav?.style.display === "flex";
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    navOpen && mediaQuery.matches && (nav.style.display = "none");
    if (navigateEvent && path === location.pathname) {
        navigateEvent.intercept({
            async handler() {
                alert("We're already here! Silly Billy! *honk honk* 🤡 (that's you)");
                navigateEvent.preventDefault();
            },
        });
        return;
    }
    const searchParams = new URLSearchParams(newURL.search);
    const searchValue = searchParams.get("search");
    // Start Spinner
    const spinner = createSpinner();
    const mainHTML = main?.innerHTML || "";
    checkAndReplaceHTML(navigateEvent, mainHTML, spinner, 300);
    // Check for search
    if (searchValue && search instanceof HTMLInputElement) {
        search.value = searchValue;
        return searchHandler();
    }
    // Route
    navigateEvent
        ? navigateEvent.intercept({
            async handler() {
                navigateEvent.signal.onabort = () => {
                    console.log("aborted");
                    if (main && mainHTML) {
                        main.innerHTML = mainHTML;
                    }
                };
                try {
                    addOldActiveClass();
                    transitionHelper({
                        updateDOM: async () => {
                            await Route(path);
                            addNewActiveClass();
                        },
                    });
                    // document.startViewTransition(async () => {
                    //   await Route(path)
                    // })
                }
                catch (error) {
                    console.error("error", error);
                    Nope("error", error.message);
                }
            },
        })
        : transitionHelper({
            updateDOM: async () => {
                await Route(path);
            },
        });
    // : document.startViewTransition(async () => Route(path))
}
window.navigation.addEventListener("navigate", Router);
function checkAndReplaceHTML(event, mainHTML, spinner, time) {
    if (event && event.destination.url === location.href)
        return;
    if (event && event.formData)
        return;
    setTimeout(() => {
        if (main && mainHTML === main.innerHTML) {
            main.innerHTML = spinner.outerHTML;
        }
    }, time);
}
function shouldNotIntercept(navigateEvent) {
    if (!navigateEvent)
        return;
    return (!navigateEvent.canIntercept ||
        navigateEvent.hashChange ||
        navigateEvent.downloadRequest ||
        navigateEvent.formData);
}
function transitionHelper({ skipTransition = false, classNames = [], updateDOM = () => { }, }) {
    if (skipTransition || !document.startViewTransition) {
        const updateCallbackDone = Promise.resolve(updateDOM());
        return {
            ready: Promise.reject(Error("View transitions unsupported")),
            updateCallbackDone,
            finished: updateCallbackDone,
        };
    }
    const transition = document.startViewTransition(updateDOM);
    // transition.finished.finally(() => {
    //   removeActiveClass()
    // })
    return transition;
}
let clickedImage = false;
let oldImage = null;
document.addEventListener("click", (e) => {
    const element = e.target;
    if (element.tagName === "IMG" ||
        element.parentNode instanceof HTMLAnchorElement) {
        clickedImage = true;
        if (element.tagName === "IMG") {
            oldImage = element;
        }
        else {
            const image = element.parentNode?.querySelector("img");
            if (image)
                oldImage = image;
        }
    }
    else {
        clickedImage = false;
    }
});
function addOldActiveClass() {
    if (!clickedImage || !oldImage)
        return;
    oldImage.style.viewTransitionName = "activeImage";
}
function addNewActiveClass() {
    if (!clickedImage)
        return;
    const newImage = document.querySelector("img");
    if (newImage) {
        newImage.classList.add("activeImage");
        newImage.style.viewTransitionName = "activeImage";
    }
}
