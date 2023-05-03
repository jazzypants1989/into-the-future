import ProductComponent from "../components/Product"
import render, { buttonFinderAdd } from "../components/render"
import { getProducts } from "../components/store"

export default async function ProductsPage() {
  document.title = "Products"
  const products = await getProducts()
  const productsHTML = Object.values(products)
    .map((product) => ProductComponent(product))
    .join("")
  render(`
    <h1>Products</h1>
    <div class="products">${productsHTML}</div>
  `)
  buttonFinderAdd()
}
