import Nope from "Nope"

const Routes = [
  { path: "/", component: "home" },
  { path: "/about", component: "about" },
  { path: "/products", component: "Products" },
  { path: "/product", component: "ProductPage", dynamic: true },
  { path: "/cart", component: "cart" },
  { path: "/checkout", component: "Checkout" },
  { path: "/success", component: "Success" },
  { path: "/events", component: "Events" },
]

/**
 * @param {string} path - The path to the component.
 * @returns {Promise<string>} - The component.
 * @async
 */

export async function Route(path) {
  const route = Routes.find(
    (route) => route.path.split("/")[1] === path.split("/")[1]
  )
  if (!route) {
    Nope("404")
    return ""
  }

  try {
    const component = await import(`../pages/${route.component}.js`)

    if (route.dynamic) {
      const id = path.split("/")[path.split("/").length - 1]
      return component.default(id)
    }
    return component.default()
  } catch (error) {
    console.error(error)
    Nope("404")
    return ""
  }
}
