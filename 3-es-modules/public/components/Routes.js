export const Routes = [
  { path: "/", component: "home" },
  { path: "/about", component: "about" },
  { path: "/products", component: "Products" },
  { path: "/product", component: "ProductPage" },
  { path: "/cart", component: "cart" },
  { path: "/checkout", component: "checkout" },
]

export async function Route(path) {
  const route = Routes.find((route) => route.path === path)
  const component = await import(`../pages/${route.component}.js`)
  return component.default()
}
