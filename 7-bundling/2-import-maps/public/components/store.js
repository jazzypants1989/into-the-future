import Nope from "Nope"
import * as Types from "../Types"

/**
 * The products array.
 * @type {Types.Product[]}
 */
let products = []

/**
 * Fetches an object which contains the products array from the database.
 * @returns {Promise<Types.RawData>} The object which contains the products array.
 */

const db = async () => {
  const response = await fetch("https://dummyjson.com/products")

  if (!response.ok) {
    alert("HTTP-Error: " + response.status)
    console.error(response)
    // @ts-ignore
    Nope("badFetch")
  }

  const data = await response.json()

  return data
}

/**
 * Fetches the products from the database.
 * @returns {Promise<Types.Product[]>} The products array.
 */

export async function getProducts() {
  if (products.length > 0) {
    console.trace("products already loaded")
    return products
  }
  const data = await db()

  if (data.products) {
    products = data.products
    return products
  } else {
    return []
  }
}

/**
 * Fetches a product from the database.
 * @param {number} id - The id of the product to fetch.
 * @returns {Promise<Types.Product>} The product.
 */
export async function getProduct(id) {
  products = await getProducts()
  return products.find((product) => product.id === Number(id)) || products[0]
}

export function createSpinner() {
  const spinner = document.createElement("div")
  spinner.classList.add("spinner")
  return spinner
}
