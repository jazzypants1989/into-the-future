import render from "render"
import updateCart, { cart } from "cart"
import { loadStripe } from "stripe-js"

console.log("cart", cart)

const STRIPE_PUBLIC_KEY =
  "pk_test_51Ls3YjJiFO7cOn9i5GWxoJdBk5iN6FnUgdaHgD2wBxN7bqVFfcMKXQI4v86fwqhxe4b8CjYOKZNjg2VrcU2yply200OxYQlFCt"

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

async function createSession() {
  const response = await fetch("/create-checkout-session", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      line_items: createLineItems(),
      mode: "payment",
      success_url: "http://localhost:3001/success",
      cancel_url: "http://localhost:3001/cancel",
    }),
  })
  const data = await response.json()

  console.log(data)

  const stripe = await loadStripe(STRIPE_PUBLIC_KEY)

  const result = await stripe?.redirectToCheckout({
    sessionId: data.session.id,
  })
  // location.href = data.session.url
}

const renderCartItems = () => {
  const cartItems = Object.keys(cart).map((id) => {
    const idNum = Number(id)
    return `
      <div>
        <h3>${cart[idNum].product.title}</h3>
        <p>${cart[idNum].product.description}</p>
        <p>${cart[idNum].product.price}</p>
        <p>${cart[idNum].quantity}</p>
      </div>
    `
  })
  return cartItems.join("")
}

export default function Checkout() {
  render(`
    <div>
      <h1>Checkout</h1>
      ${renderCartItems()}
      <p>Total: ${Object.keys(cart).reduce(
        (acc, id) =>
          acc + cart[Number(id)].product.price * cart[Number(id)].quantity,
        0
      )}</p>
      <button id="checkout">Checkout (Redirect to Stripe)</button>
    </div>
`)
  document?.getElementById("checkout")?.addEventListener("click", createSession)
}
