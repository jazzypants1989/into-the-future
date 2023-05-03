let products = {}

const db = async () => {
  const response = await fetch("https://dummyjson.com/products")

  if (!response.ok) {
    alert("HTTP-Error: " + response.status)
    console.error(response)
    return Nope("Servers", "Down")
  }

  const data = await response.json()

  return data
}

async function getProducts() {
  if (products.length > 0) {
    console.trace("products already loaded")
    return products
  }
  const data = await db()
  products = data.products
  console.trace("initial load of products")
  return products
}

async function getProduct(id) {
  return products.find((product) => product.id === Number(id))
}
