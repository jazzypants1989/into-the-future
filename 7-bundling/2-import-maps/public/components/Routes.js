import Nope from "Nope"

const Routes = [
  { path: "/", component: "home" },
  { path: "/about", component: "about" },
  { path: "/products", component: "Products" },
  { path: "/product", component: "ProductPage", dynamic: true },
  { path: "/cart", component: "cart" },
  { path: "/checkout", component: "checkout" },
  { path: "/success", component: "success" },
  { path: "/events", component: "events" },
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

  const component = await import(`../pages/${route.component}.js`.toLowerCase())
  if (route.dynamic) {
    const id = path.split("/")[path.split("/").length - 1]
    return component.default(id)
  }
  return component.default()
}
