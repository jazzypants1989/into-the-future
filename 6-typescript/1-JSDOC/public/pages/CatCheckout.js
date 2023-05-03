import render from "../components/render.js"
import updateCart, { cart } from "../features/cart.js"

/**
 * @typedef {import("../types.js").Cart} Cart
 */

/**
 * @typedef {Object} Form
 * @property {string} name
 * @property {string} email
 * @property {string} street
 * @property {File} cat
 */

/**
 * @typedef {Object} MergedData
 * @property {string} name
 * @property {string} email
 * @property {string} street
 * @property {File} cat
 * @property {Cart} cart
 */

/**
 * @type {Form}
 */
let savedForm

export default async function Checkout() {
  document.title = "Checkout"

  const cartItems = Object.keys(cart).map((id) => {
    const idNum = Number(id)
    return `
            <div class="cart-item">
                <h2>${cart[idNum].product.title}</h2>
                <p>$${cart[idNum].product.price}</p>
                <p>Quantity: ${cart[idNum].quantity}</p>
            </div>
            `
  })

  if (cartItems.length === 0) {
    render(`<h1>Checkout</h1><p>You have no items in your cart!</p>`)
    return
  }

  const form = `
        <form method="POST" action="/checkout">
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
            <label> Picture of your favorite cat
            <input type="file" id="cat" name="cat" accept="image/*" required>
            </label>
            <p class="error"></p>
            <button type="button" style="background-color: red; color: white;">Cancel</button>
            <button type="submit">Submit</button>
        </form>
    `
  await render(`
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

  // Comment this out if you want to try Router2.js
  formEl?.addEventListener("submit", (e) => {
    e.preventDefault()
    // Get form data as object
    if (Object.keys(cart).length === 0) {
      alert("You have no items in your cart!")
      return
    }

    if (!(formEl instanceof HTMLFormElement)) return

    const formData = new FormData(formEl)

    const data = Object.fromEntries(formData)

    /**
     * @type {MergedData}
     */
    // @ts-ignore
    const mergedData = {
      ...data,
      cart: cart,
    }

    alert(
      `Thank you for your order, ${data.name}! Your ${
        Object.keys(cart).length
      } items will be shipped to ${data.street}! Tell ${
        mergedData.cat.name.split(".")[0]
      } that we said hi!`
    )
    localStorage.removeItem("cart")
    updateCart()
    Checkout()
  })

  const cancelBtn = document.querySelector("button[type=button]")

  cancelBtn?.addEventListener("click", () => {
    window.navigation.back()
  })

  const error = document.querySelector(".error")

  formEl?.addEventListener("input", (e) => {
    const element = e.target
    if (!(element instanceof HTMLInputElement)) return
    if (!(error instanceof HTMLElement)) return
    if (element?.validity.valid) {
      error ? (error.textContent = "") : null
      error ? (error.style.display = "none") : null
    } else {
      showError()
    }
  })

  function showError() {
    if (!(error instanceof HTMLElement)) return
    if (!(formEl instanceof HTMLFormElement)) return
    error.style.display = "block"
    if (formEl.name.valueOf().length < 1) {
      error.textContent = "Please enter your name"
    } else if (formEl.email.validity.valueMissing) {
      error.textContent = "Please enter your email"
    } else if (formEl.email.validity.typeMismatch) {
      error.textContent = "Please enter a valid email"
    } else if (formEl.email.validity.patternMismatch) {
      error.textContent = "Please enter a valid email BRO"
    } else if (formEl.street.validity.valueMissing) {
      error.textContent = "Please enter your street address"
    } else if (formEl.cat.validity.valueMissing) {
      error.textContent = "Please enter a picture of your favorite cat"
    } else {
      error.textContent = "Something went wrong"
    }
  }

  window.navigation.addEventListener("navigate", (e) => {
    const inputs = formEl?.querySelectorAll("input")
    if (!inputs) return
    const formValues = Array.from(inputs).some((input) => input.value)
    if (formValues) {
      // savedForm = Object.fromEntries(new FormData(formEl))
      if (!(formEl instanceof HTMLFormElement)) return
      const formData = new FormData(formEl)
      // @ts-ignore
      savedForm = Object.fromEntries(formData)
      console.log("savedForm", savedForm)
    }
  })

  function fillForm() {
    const inputs = formEl?.querySelectorAll("input")
    inputs?.forEach((input) => {
      if (input.type === "file") return
      if (!(input instanceof HTMLInputElement)) return
      const inputName = input.name
      if (inputName in savedForm) {
        // @ts-ignore
        input.value = savedForm[inputName]
      }
    })
  }

  function addFile() {
    if (!formEl) return
    const fileInput = formEl.querySelector('input[type="file"]')
    if (!(fileInput instanceof HTMLInputElement)) return
    const file = new File([savedForm.cat], savedForm.cat.name, {
      type: savedForm.cat.type,
    })
    const fileList = new DataTransfer()
    fileList.items.add(file)
    fileInput.files = fileList.files
  }

  if (savedForm) {
    fillForm()
    addFile()
  }
}
