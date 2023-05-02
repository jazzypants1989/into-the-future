async function ProductsPage() {
  document.title = "Products"
  const products = await getProducts()
  const productsHTML = Object.values(products)
    .map((product) => ProductComponent(product))
    .join("")
  render(productsHTML)
  buttonFinderAdd()
}
