import render from "render"
import { cart } from "cart"

function createLineItems() {
  console.log("createLineItems", cart)
  return Object.keys(cart).map((id) => {
    const idNum = Number(id)
    return {
      price_data: {
        currency: "usd",
        product_data: {
          name: cart[idNum].product.title,
          images: [cart[idNum].product.images[0]],
        },
        unit_amount: cart[idNum].product.price * 100,
      },
      quantity: cart[idNum].quantity,
    }
  })
}

async function stripeLoader() {
  const { loadStripe } = await import("stripe-js")
  const pk =
    "pk_test_51Ls3YjJiFO7cOn9i5GWxoJdBk5iN6FnUgdaHgD2wBxN7bqVFfcMKXQI4v86fwqhxe4b8CjYOKZNjg2VrcU2yply200OxYQlFCt"
  const stripe = await loadStripe(pk)
  return stripe
}

async function createSession() {
  const button = document.querySelector("#checkout")
  if (!button || !(button instanceof HTMLButtonElement)) {
    console.error("No checkout button found")
    return
  }
  button.disabled = true
  button.innerText = "Redirecting to Stripe... Hold your horses!"
  const response = await fetch("/create-checkout-session", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      line_items: createLineItems(),
    }),
  })
  const data = await response.json()

  console.log(data)

  const stripe = await stripeLoader()

  if (!stripe) {
    console.error("Stripe failed to load")
    return
  }

  const result = await stripe.redirectToCheckout({
    sessionId: data.session.id,
  })

  console.log(result)

  // location.href = data.session.url
}

function attachListener() {
  const checkoutButton = document.querySelector("#checkout")
  if (checkoutButton) {
    checkoutButton.addEventListener("click", createSession)
  }
}

const renderCartItems = () => {
  const cartItems = Object.keys(cart).map((id) => {
    const idNum = Number(id)
    return `
      <div>
      <a href="/product/${cart[idNum].product.id}">
        <img src="${cart[idNum].product.images[0]}" />
        <h2>${cart[idNum].product.title}</h3>
      </a>
        <p>${cart[idNum].product.description}</p>
        <span>$${cart[idNum].product.price}</span>
        <span>Quantity: ${cart[idNum].quantity}</span>
      </div>
    `
  })
  return cartItems.join("")
}

export default function Checkout() {
  render({
    component: `
    <div>
      <h1>Checkout</h1>
      ${renderCartItems()}
      <p>Total: $${Object.keys(cart).reduce(
        (acc, id) =>
          acc + cart[Number(id)].product.price * cart[Number(id)].quantity,
        0
      )}</p>
      <button id="checkout">Checkout (Redirect to Stripe)</button>
    </div>
`,
    callback: attachListener,
  })
}
