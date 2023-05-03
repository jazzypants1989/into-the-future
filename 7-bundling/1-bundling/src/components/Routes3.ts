import Nope from "../pages/Nope"
import Home from "../pages/Home"
import About from "../pages/About"
import Products from "../pages/Products"
import ProductPage from "../pages/ProductPage"
import Cart from "../pages/Cart"
import Checkout from "../pages/Checkout"
import Success from "../pages/Success"
import Events from "../pages/Events"

const Routes = [
  { path: "/", component: Home },
  { path: "/about", component: About },
  { path: "/products", component: Products },
  { path: "/product", component: ProductPage, dynamic: true },
  { path: "/cart", component: Cart },
  { path: "/checkout", component: Checkout },
  { path: "/success", component: Success },
  { path: "/events", component: Events },
]
export async function Route(path: string) {
  const route = Routes.find(
    (route) => route.path.split("/")[1] === path.split("/")[1]
  )
  if (!route) {
    Nope("404", path)
    return
  }

  if (route.dynamic) {
    const id = path.split("/")[2]
    route.component(id)
    return
  }

  route.component()
}
