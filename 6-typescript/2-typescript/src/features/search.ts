import render, { buttonFinderAdd } from "../components/render.js"
import { getProducts } from "../components/store.js"
import ProductComponent from "../components/Product.js"

export const search = document.querySelector("#search") as HTMLInputElement

export function searchListener() {
  if (!search) throw new Error("No search element found")
  search.addEventListener("input", searchHandler)
}

export async function searchHandler() {
  const products = await getProducts()
  const searchValue = search.value
  document.title = "Search Page for " + searchValue
  const filteredProducts = products.filter((product) => {
    return product.title.toLowerCase().includes(searchValue.toLowerCase())
  })
  if (filteredProducts.length === 0) {
    render({ component: `<h1>Products</h1><p>No Products Found</p>` })
  } else {
    const productsHTML = filteredProducts.map(ProductComponent).join("")
    render({
      component: `<h1>Products</h1>${productsHTML}`,
      callback: buttonFinderAdd,
    })
  }
}
