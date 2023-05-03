async function ProductPage(id) {
  const product = await getProduct(id)
  if (!product) {
    return Nope(id)
  }
  document.title = product.title
  search.value = product.title
  product ? render(ProductComponent(product)) : Nope(id)
  buttonFinderAdd()
}
