import Nope from "../pages/Nope.js"

let products = {}

const db = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000))
  const response = await fetch("https://dummyjson.com/products")

  if (!response.ok) {
    alert("HTTP-Error: " + response.status)
    console.error(response)
    return Nope("badFetch")
  }

  const data = await response.json()

  return data
}

export async function getProducts() {
  if (products.length > 0) {
    console.trace("products already loaded")
    return products
  }
  const data = await db()
  products = data.products
  return products
}

export async function getProduct(id) {
  products = await getProducts()
  return products.find((product) => product.id === Number(id))
}

export function createSpinner() {
  const spinner = document.createElement("div")
  spinner.classList.add("spinner")
  return spinner
}
