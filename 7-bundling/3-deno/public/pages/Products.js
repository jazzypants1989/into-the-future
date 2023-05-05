import ProductComponent from "Product"
import render, { buttonFinderAdd } from "render"
import { getProducts } from "store"

/**
 * Products page view template
 * @returns {Promise<void>}
 * @async
 */
export default async function ProductsPage() {
  const products = await getProducts()
  if (!products) {
    render({
      component: `<h1>Products</h1>
      <p>There was an error loading the products. Please try again later.</p>`,
    })
    return
  }
  document.title = "Products"
  const productsHTML = Object.values(products)
    .map((product) => ProductComponent(product))
    .join("")
  render({
    component: `<h1>Products</h1>
    <div class="products">${productsHTML}</div>
  `,
    callback: buttonFinderAdd,
  })
}
