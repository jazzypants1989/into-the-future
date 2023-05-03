import Nope from "../pages/Nope.js"

const Routes = [
  { path: "/", component: "Home" },
  { path: "/about", component: "About" },
  { path: "/products", component: "Products" },
  { path: "/product", component: "ProductPage", dynamic: true },
  { path: "/cart", component: "Cart" },
  { path: "/checkout", component: "Checkout" },
]

export async function Route(path) {
  const route = Routes.find(
    (route) => route.path.split("/")[1] === path.split("/")[1]
  )
  if (!route) return Nope()

  const component = await import(`../pages/${route.component}.js`)
  if (route.dynamic) {
    const id = path.split("/")[path.split("/").length - 1]
    return component.default(id)
  }
  return component.default()
}
