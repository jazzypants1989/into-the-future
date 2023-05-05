import Nope from "./Nope.js"
import ProductComponent from "../components/Product.js"
import { getProduct } from "../components/store.js"
import render, { buttonFinderAdd } from "../components/render.js"
import * as Types from "../types.js"

/**
 * The Product Page for a specific product.
 * @param {string} id - The id of the product.
 * @returns {Promise<string>} - The HTML template for the product page.
 * @async
 */
export default async function ProductPage(id) {
  const product = await getProduct(Number(id))
  const search = document.querySelector("#search")
  if (!product) {
    Nope("badID", id)
    return ""
  }
  if (!search || !(search instanceof HTMLInputElement)) {
    throw new Error("Search bar not found")
  }
  document.title = product.title
  search.value = product.title
  product
    ? render({
        component: `
    <h1>${product.title}</h1>
    ${ProductComponent(product)}
    `,
        callback: buttonFinderAdd,
      })
    : Nope("badID", id)
  return "This is a dumb requirement to make this work."
}
