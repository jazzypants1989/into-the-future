import Nope from "../pages/Nope.js"

const Routes = [
  { path: "/", component: "home" },
  { path: "/about", component: "about" },
  { path: "/products", component: "Products" },
  { path: "/product", component: "ProductPage", dynamic: true },
  { path: "/cart", component: "cart" },
  { path: "/checkout", component: "checkout" },
  { path: "/success", component: "success" },
]

export async function Route(path) {
  const route = Routes.find(
    (route) => route.path.split("/")[1] === path.split("/")[1]
  )
  if (!route) return Nope()

  const component = await import(`../pages/${route.component}.js`.toLowerCase())
  if (route.dynamic) {
    const id = path.split("/")[path.split("/").length - 1]
    return component.default(id)
  }
  return component.default()
}
