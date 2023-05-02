const search = document.querySelector("#search")

function searchListener() {
  search.addEventListener("input", searchHandler)
}

async function searchHandler() {
  const products = await getProducts()
  const searchValue = search.value
  document.title = "Search Page for " + searchValue
  history.pushState(null, null, `/products?name=${searchValue}`)
  const filteredProducts = products.filter((product) => {
    return product.title.toLowerCase().includes(searchValue.toLowerCase())
  })
  if (filteredProducts.length === 0) {
    render(`<h1>Products</h1><p>No Products Found</p>`)
  } else {
    const productsHTML = filteredProducts.map(ProductComponent).join("")
    render(`<h1>Products</h1>${productsHTML}`)
    buttonFinderAdd()
  }
}

async function urlSearchHandler() {
  const searchParams = new URLSearchParams(location.search)
  const searchValue = searchParams.get("search")
  search.value = searchValue
  document.title = "Search Page for " + searchValue
  const filteredProducts = products.filter((product) => {
    return product.title.toLowerCase().includes(searchValue.toLowerCase())
  })
  if (filteredProducts.length === 0) {
    render(`<h1>Products</h1><p>No Products Found</p>`)
  } else {
    const productsHTML = filteredProducts.map(ProductComponent).join("")
    render(`<h1>Products</h1>${productsHTML}`)
    buttonFinderAdd()
  }
}
