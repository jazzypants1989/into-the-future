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
  document.title = "Products"
  const productsHTML = Object.values(products)
    .map((product) => ProductComponent(product))
    .join("")
  render(`
    <h1>Products</h1>
    <div class="products">${productsHTML}</div>
  `)
  buttonFinderAdd()
}
