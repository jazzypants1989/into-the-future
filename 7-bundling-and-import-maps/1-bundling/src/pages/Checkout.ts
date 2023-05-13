import render from "../components/render"
import { cart } from "../features/cart"

const STRIPE_PUBLIC_KEY =
  "pk_test_51Ls3YjJiFO7cOn9i5GWxoJdBk5iN6FnUgdaHgD2wBxN7bqVFfcMKXQI4v86fwqhxe4b8CjYOKZNjg2VrcU2yply200OxYQlFCt"

async function dynamicStripeLoader() {
  const stripe = await import("@stripe/stripe-js")
  return stripe.loadStripe(STRIPE_PUBLIC_KEY)
}

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
  const checkoutButton = document.getElementById("checkout")
  if (!checkoutButton || !(checkoutButton instanceof HTMLButtonElement)) return
  checkoutButton.disabled = true
  checkoutButton.style.cursor = "not-allowed"
  checkoutButton.style.opacity = "0.5"
  checkoutButton.textContent = "Redirecting to Stripe... HOLD YOUR HORSES!"

  try {
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

    // This is the official way to do it.
    const stripe = await dynamicStripeLoader()

    await stripe?.redirectToCheckout({
      sessionId: data.session.id,
    })
  } catch (error) {
    console.error("error", error)
    checkoutButton.disabled = false
    checkoutButton.style.cursor = "pointer"
    checkoutButton.style.opacity = "1"
    checkoutButton.textContent = "Hmmm... Something went wrong. Try again?"
  }
  // Or, you can just do this, lol.
  // location.href = data.session.url
}

const renderCartItems = () => {
  const cartItems = Object.keys(cart).map((id) => {
    const idNum = Number(id)
    return `
      <div style="margin-bottom: 1rem;">
      <a href="/product/${cart[idNum].product.id}">
        <img src="${cart[idNum].product.images[0]}" />
        <h2>${cart[idNum].product.title}</h2>
      </a>
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
      <p>Total: ${Object.keys(cart).reduce(
        (acc, id) =>
          acc + cart[Number(id)].product.price * cart[Number(id)].quantity,
        0
      )}</p>
      <button id="checkout">Checkout (Redirect to Stripe)</button>
    </div>
`,
    callback: () =>
      document
        ?.getElementById("checkout")
        ?.addEventListener("click", createSession),
  })
}
