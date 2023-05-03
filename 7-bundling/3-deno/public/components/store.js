import Nope from "Nope"
// import * as _Types from "Types"

// /**
//  * The products array.
//  * @type {_Types.Product[]}
//  */
// let products = []

// /**
//  * Fetches an object which contains the products array from the database.
//  * @returns {Promise<_Types.RawData>} The object which contains the products array.
//  */

/**
 * The products array.
 * @type {Product[] | undefined}
 */
let products = []

/**
 * Fetches an object which contains the products array from the database.
 * @returns {Promise<RawData | Undefined>} The object which contains the products array.
 */

const db = async () => {
  try {
    const response = await fetch("https://dummyjson.com/products")

    if (!response.ok) {
      alert("HTTP-Error: " + response.status)
      console.error(response)
      Nope("badFetch", response.status.toString())
    }

    const data = await response.json()

    return data
  } catch (error) {
    console.error(error)
    Nope("badFetch", error)
  }
}

/**
 * Fetches the products from the database.
 * @returns {Promise<Product[] | Undefined>} The products.
 */

export async function getProducts() {
  try {
    const cacheTimer = 1000 * 60 * 1 // 1 minute
    const now = Date.now()
    const cacheTimeStamp = localStorage.getItem("Cache Timestamp")
    if (cacheTimeStamp && now - Number(cacheTimeStamp) < cacheTimer) {
      products = JSON.parse(localStorage.getItem("products") || "[]")
      console.trace("cache is still good, loading from cache")
      return products
    }
    console.trace("cache is empty or expired, loading from server")
    const data = await db()
    if (data) {
      products = data.products
      localStorage.setItem("products", JSON.stringify(products))
      localStorage.setItem("Cache Timestamp", now.toString())
      return products
    }
    Nope("badFetch", "no data")
  } catch (error) {
    console.error(error)
    Nope("badFetch", error)
  }
}

/**
 * Fetches a product from the database.
 * @param {number} id - The id of the product to fetch.
 * @returns {Promise<Product | Undefined>} The product.
 */
export async function getProduct(id) {
  products = await getProducts()
  if (!products) {
    Nope("badFetch", "no data")
    return
  }
  return products.find((product) => product.id === Number(id)) || products[0]
}

export function createSpinner() {
  const spinner = document.createElement("div")
  spinner.classList.add("spinner")
  return spinner
}
