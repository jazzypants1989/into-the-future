// @ts-check

import render from "../components/render.js"
import { cart } from "../features/cart.js"

export default async function Checkout() {
  document.title = "Checkout"

  console.log("Cart before checkout: ", cart)

  const cartItems = Object.keys(cart).map((id) => {
    return `
            <div class="cart-item">
                <h2>${cart[id].product.title}</h2>
                <p>$${cart[id].product.price}</p>
                <p>Quantity: ${cart[id].quantity}</p>
            </div>
            `
  })

  const form = `
        <form>
            <label> Name
            <input type="text" id="name" name="name" autocomplete="name" required>
            </label>
            <label> Email
            <input 
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
            type="email" id="email" name="email" autocomplete="email" required>
            </label>
            <label> Street
            <input type="text" id="street" name="street" autocomplete="street-address" required>
            </label>
            <label> City
            <input type="text" id="city" name="city" autocomplete="address-level2" required>
            </label>
            <label> State
            <input type="text" id="state" name="state" autocomplete="address-level1" required>
            </label>
            <label> Zip
            <input type="text" id="zip" name="zip" autocomplete="postal-code" required>
            </label>
            <label> Picture of your favorite cat
            <input type="file" id="cat" name="cat" accept="image/*" required>
            </label>
            <p class="error"></p>
            <button type="button">Cancel</button>
            <button type="submit">Submit</button>
        </form>
    `
  render(`
        <h1>Checkout</h1>
        ${cartItems.join("")}
        <h2>Total</h2>
        <p>Total: $${Object.values(cart).reduce(
          (acc, item) => acc + item.product.price * item.quantity,
          0
        )}</p>
        ${form}
    `)

  const formEl = document.querySelector("form")
  const cancelBtn = document.querySelector("button[type=button]")

  if (!formEl || !cancelBtn) {
    return
  }

  formEl.addEventListener("submit", (e) => {
    e.preventDefault()

    // Get form data as object
    const formData = new FormData(formEl)
    const data = Object.fromEntries(formData)

    // Merge form data and cart data
    const mergedData = { ...data, cart: cart }

    console.log(mergedData)
  })

  cancelBtn.addEventListener("click", () => {
    history.back()
  })

  const error = document.querySelector(".error")

  formEl.addEventListener("input", (e) => {
    if (!(e.target instanceof HTMLInputElement) || !error) {
      return
    }
    if (e.target?.validity.valid) {
      error.textContent = ""
    } else {
      showError()
    }
  })

  function showError() {
    if (!error || !formEl) {
      return
    }
    if (formEl.name === null) {
      error.textContent = "Please enter your name"
    } else if (formEl.email.validity.valueMissing) {
      error.textContent = "Please enter your email"
    } else if (formEl.email.validity.typeMismatch) {
      error.textContent = "Please enter a valid email"
    } else if (formEl.email.validity.patternMismatch) {
      error.textContent = "Please enter a valid email BRO"
    } else if (formEl.street.validity.valueMissing) {
      error.textContent = "Please enter your street address"
    } else if (formEl.city.validity.valueMissing) {
      error.textContent = "Please enter your city"
    } else if (formEl.state.validity.valueMissing) {
      error.textContent = "Please enter your state"
    } else if (formEl.zip.validity.valueMissing) {
      error.textContent = "Please enter your zip code"
    } else if (formEl.cat.validity.valueMissing) {
      error.textContent = "Please enter a picture of your favorite cat"
    } else {
      error.textContent = "Something went wrong"
    }
  }
}
