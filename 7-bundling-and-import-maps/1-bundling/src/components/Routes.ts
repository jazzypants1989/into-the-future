import Nope from "../pages/Nope"

const imports = {
  home: () => import("../pages/Home"),
  about: () => import("../pages/About"),
  products: () => import("../pages/Products"),
  productpage: () => import("../pages/ProductPage"),
  cart: () => import("../pages/Cart"),
  checkout: () => import("../pages/Checkout"),
  success: () => import("../pages/Success"),
  events: () => import("../pages/Events"),
}

interface Route {
  path: string
  component: string
  dynamic?: boolean
}

const Routes = [
  { path: "/", component: "home" },
  { path: "/about", component: "about" },
  { path: "/products", component: "products" },
  { path: "/product", component: "productpage", dynamic: true },
  { path: "/cart", component: "cart" },
  { path: "/checkout", component: "checkout" },
  { path: "/success", component: "success" },
  { path: "/events", component: "events" },
] as Route[]

export async function Route(path: string) {
  const route = Routes.find(
    (route) => route.path.split("/")[1] === path.split("/")[1]
  )
  if (!route) {
    Nope("404", path)
    return
  }

  const component = await imports[route.component as keyof typeof imports]()

  if (route.dynamic) {
    const id = path.split("/")[path.split("/").length - 1]
    return component.default(id)
  }
  return component.default()
}
