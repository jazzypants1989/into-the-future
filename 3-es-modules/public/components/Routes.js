export const Routes = [
  { path: "/", component: "Home" },
  { path: "/about", component: "About" },
  { path: "/products", component: "Products" },
  { path: "/product", component: "ProductPage" },
  { path: "/cart", component: "Cart" },
  { path: "/checkout", component: "checkout" },
]

export async function Route(path) {
  const route = Routes.find((route) => route.path === path)
  const component = await import(`../pages/${route.component}.js`)
  console.log(component)
  return component.default()
}
