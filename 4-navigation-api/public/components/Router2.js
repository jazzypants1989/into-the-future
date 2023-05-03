// import { Route } from "./Routes.js"
// import { searchHandler, search } from "../features/search.js"
// import { createSpinner } from "./store.js"
// import updateCart, { cart } from "../features/cart.js"

// export const main = document.querySelector(".main")

// export default function Router(navigateEvent) {
//   if (shouldNotIntercept(navigateEvent)) {
//     console.log("shouldNotIntercept")
//     return
//   }

//   // Get URL
//   const url = navigateEvent ? navigateEvent.destination.url : location.href
//   const newURL = new URL(url)
//   const path = newURL.pathname
//   const searchParams = new URLSearchParams(newURL.search)
//   const searchValue = searchParams.get("search")

//   // Start Spinner
//   const spinner = createSpinner()
//   const mainHTML = main.innerHTML
//   checkAndReplaceHTML(navigateEvent, mainHTML, spinner, 300)

//   // Check for search
//   if (searchValue) {
//     Route(path)
//     search.value = searchValue
//     return searchHandler()
//   }

//   // Route
//   navigateEvent
//     ? navigateEvent.intercept({
//         async handler() {
//           const formData = navigateEvent.formData
//           if (formData) {
//             navigateEvent.preventDefault()
//             if (Object.keys(cart).length === 0) {
//               alert("You have no items in your cart!")
//               return
//             }
//             const formDataEntries = Object.fromEntries(formData.entries())
//             const formWithCart = { ...formDataEntries, cart }
//             console.log("formWithCart", formWithCart)
//             alert(
//               `Thank you for your order!, ${formWithCart.name}. Your ${
//                 Object.keys(cart).length
//               } items will be shipped to ${formWithCart.street}! Tell ${
//                 formWithCart.cat.name.split(".")[0]
//               } we said hi!`
//             )

//             localStorage.removeItem("cart")
//             updateCart()
//           }

//           navigateEvent.signal.onabort = () => {
//             console.log("aborted")
//             main.innerHTML = mainHTML
//           }

//           try {
//             await Route(path)
//           } catch (error) {
//             console.log("error", error)
//             main.innerHTML = Nope("error", error)
//           }
//         },
//       })
//     : Route(path)
// }

// navigation.addEventListener("navigate", Router)

// function checkAndReplaceHTML(event, mainHTML, spinner, time) {
//   console.log("checkAndReplaceHTML")
//   if (event && event.destination.url === location.href) return
//   if (event && event.formData) return
//   setTimeout(() => {
//     if (mainHTML === main.innerHTML) {
//       main.innerHTML = spinner.outerHTML
//     }
//   }, time)
// }

// function shouldNotIntercept(navigateEvent) {
//   if (!navigateEvent) return
//   return (
//     !navigateEvent.canIntercept ||
//     navigateEvent.hashChange ||
//     navigateEvent.downloadRequest
//   )
// }
