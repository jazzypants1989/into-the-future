const main = document.querySelector(".main")
const links = document.querySelectorAll(".Link")
const themeCheck = localStorage.getItem("theme")
const toggleTheme = document.querySelector("#toggleTheme")
const cartCount = document.querySelector("#cart-count")
const cartAmount = document.querySelector("#cart-total")

let products = {}

const cart = JSON.parse(localStorage.getItem("cart")) || {}
cartCount.innerText = Object.keys(cart).length
cartAmount.innerText =
  "$" +
  Object.values(cart)
    .map((item) => item.product.price * item.quantity)
    .reduce((a, b) => a + b, 0)
    .toFixed(2)

const search = document.querySelector("#search")
search.addEventListener("input", searchHandler)

themeCheck
  ? (document.body.className = themeCheck)
  : (document.body.className = "dark")

toggleTheme.addEventListener("click", () => {
  const currentTheme = localStorage.getItem("theme") || "dark"
  const newTheme =
    currentTheme === "dark"
      ? "purple"
      : currentTheme === "purple"
      ? "green"
      : "dark"
  localStorage.setItem("theme", newTheme)
  document.body.className = newTheme
})

const db = async () => {
  const response = await fetch("/db.json")
  const data = await response.json()
  return data
}

const getProducts = async () => {
  if (products.length > 0) {
    return products
  }
  const data = await db()
  products = data.products
  return products
}

const Home = () => {
  document.title = "Home" // Set the page title
  render(`
      <p>This is a totally real shop! See! That's a picture! Of a shop! Totally
    open.</p>
    <img src="/diana.avif" alt="Check us out" />
      `)
}

const About = () => {
  document.title = "About"
  render(`
      <h1>About</h1>
    <p>
      This is a totally real shop that sells totally real products. It's not a
      demonstration of how client-side routing works. Noo! It's just a
      shop.
    </p>
      `)
}

const ProductComponent = (product) => {
  return `
      <div class="product">
        <a href=/product/${product.id} class="Link">
          <img src="${product.image}" alt="${product.name}" />
        <h2>${product.name}</h2>
        </a>
        <p>${product.description}</p>
        <p>$${product.price}</p>
        <button class="add-to-cart" id="${product.id}">Add to cart</button>
      </div>
      `
}

const ProductsPage = async () => {
  document.title = "Products"
  const products = await getProducts()
  const productsHTML = Object.values(products)
    .map((product) => ProductComponent(product))
    .join("")
  render(productsHTML)
  buttonFinderAdd()
}

const ProductPage = async (id) => {
  await getProducts()
  const product = products.find((product) => product.id === Number(id))
  if (!product) {
    return Nope(id)
  }
  document.title = product.name
  search.value = product.name
  product ? render(ProductComponent(product)) : Nope(id)
  buttonFinderAdd()
}

const Cart = async () => {
  const products = await getProducts()
  if (Object.keys(cart).length === 0) {
    render(`
    <h1>Cart</h1>
    <p>Your cart is empty. Go buy one of our two amazing items!</p>
    `)
  } else {
    const cartItems = Object.keys(cart).map((id) => {
      const product = products.find((product) => product.id === Number(id))
      return `
      <div class="cart-item">
        <img src="${product.image}" alt="${product.name}" />
        <h2>${product.name}</h2>
        <p>$${product.price}</p>
        <p>Quantity: ${cart[id].quantity}</p>
        <button class="remove-from-cart" id="${product.id}">Remove from cart</button>
      </div>
      `
    })
    render(`
    <h1>Cart</h1>
    ${cartItems.join("")}
    `)
    buttonFinderRemove()
  }
}

const Nope = (id) => {
  if (id) {
    render(
      `<h1>404</h1><h2>Sorry buddy, but I don't think we have a product with id #${id}!</h2>`
    )
  } else {
    render(`<div>
        <h1>404</h1>
        <h2>Huh, you're at ${location.pathname}, but you really shouldn't be... 🤔 </h2>
      </div>`)
  }
}

const Routes = [
  { path: "/", component: Home },
  { path: "/about", component: About },
  { path: "/products", component: ProductsPage },
  { path: "/product", component: ProductPage },
  { path: "/cart", component: Cart },
]

const Router = (potentialRoute) => {
  const dynamicRoute = "product"
  const searchRoute = "products"
  const searchParams = new URLSearchParams(location.search)
  if (
    potentialRoute.split("/")[1] === dynamicRoute &&
    potentialRoute.split("/")[2]
  ) {
    const id = potentialRoute.split("/")[2]
    return ProductPage(id)
  } else if (
    potentialRoute.split("/")[1] === searchRoute &&
    searchParams.has("name")
  ) {
    const searchValue = searchParams.get("name")
    search.value = searchValue
    return searchHandler()
  } else {
    const route = Routes.find((route) => route.path === potentialRoute)
    route ? route.component() : Nope()
  }
}

function render(component) {
  main.innerHTML = component
  linkFinder()
}

function addToCart(product) {
  if (cart[product.id]) {
    cart[product.id].quantity++
  } else {
    cart[product.id] = {
      quantity: 1,
      product,
    }
  }
  localStorage.setItem("cart", JSON.stringify(cart))
  alert(`${product.name} added to cart!`)
  cartCount.innerText = Object.keys(cart).length
  cartAmount.innerText =
    "$" +
    Object.values(cart).reduce((acc, item) => {
      return acc + item.product.price * item.quantity
    }, 0)
}

function removeFromCart(product) {
  cart[product.id].quantity--
  if (cart[product.id].quantity === 0) {
    delete cart[product.id]
  }
  localStorage.setItem("cart", JSON.stringify(cart))
  alert(`${product.name} removed from cart!`)
  Cart()
  cartCount.innerText = Object.keys(cart).length
  cartAmount.innerText =
    "$" +
    Object.values(cart)
      .map((item) => item.product.price * item.quantity)
      .reduce((a, b) => a + b, 0)
      .toFixed(2)
}

function buttonFinderAdd() {
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

function buttonFinderRemove() {
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

function linkFinder() {
  const links = document.querySelectorAll(".Link")
  links.forEach((link) => {
    if (link.alreadyAdded) return
    link.alreadyAdded = true
    link.addEventListener("click", (e) => {
      e.preventDefault()
      const linkPath = link.getAttribute("href")
      history.pushState(null, null, linkPath)
      Router(linkPath)
    })
  })
}

async function searchHandler() {
  const searchValue = search.value
  history.pushState(null, null, `/products?name=${searchValue}`)
  products = await getProducts()
  const filteredProducts = products.filter((product) => {
    return product.name.toLowerCase().includes(searchValue.toLowerCase())
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
  products = await getProducts()
  const filteredProducts = products.filter((product) => {
    return product.name.toLowerCase().includes(searchValue.toLowerCase())
  })
  if (filteredProducts.length === 0) {
    render(`<h1>Products</h1><p>No Products Found</p>`)
  } else {
    const productsHTML = filteredProducts.map(ProductComponent).join("")
    render(`<h1>Products</h1>${productsHTML}`)
    buttonFinderAdd()
  }
}

let urlParams = new URLSearchParams(location.search)
if (urlParams.has("search")) {
  urlSearchHandler()
} else {
  Router(location.pathname)
}

window.addEventListener("load", () => {
  window.addEventListener("popstate", () => {
    Router(location.pathname)
  })
})
