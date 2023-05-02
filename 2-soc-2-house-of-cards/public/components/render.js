function render(component) {
  const main = document.querySelector(".main")
  main.innerHTML = component
  Link()
  window.addEventListener("load", () => {
    window.addEventListener("popstate", () => {
      Router(location.pathname)
    })
  })
}

async function buttonFinderAdd() {
  const products = await getProducts()
  document.querySelectorAll(".add-to-cart").forEach((button) => {
    if (button.alreadyAdded) return
    button.alreadyAdded = true
    button.addEventListener("click", (e) => {
      const id = e.target.id
      const product = products.find((product) => product.id === Number(id))
      addToCart(product)
    })
  })
}

async function buttonFinderRemove() {
  const products = await getProducts()

  document.querySelectorAll(".remove-from-cart").forEach((button) => {
    if (button.alreadyAdded) return
    button.alreadyAdded = true
    button.addEventListener("click", (e) => {
      const id = e.target.id
      const product = products.find((product) => product.id === Number(id))
      removeFromCart(product)
    })
  })
}
