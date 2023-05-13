import render from "../components/render.js"
import updateCart, { cart } from "../features/cart.js"

let savedForm

export default async function Checkout() {
  document.title = "Checkout"

  const cartItems = Object.keys(cart).map((id) => {
    return `
            <div class="cart-item">
                <h2>${cart[id].product.title}</h2>
                <p>$${cart[id].product.price}</p>
                <p>Quantity: ${cart[id].quantity}</p>
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
  const error = document.querySelector(".error")

  if (!formEl || !cancelBtn || !error) {
    return
  }

  // Comment this out if you want to try Router2.js
  formEl.addEventListener("submit", (e) => {
    e.preventDefault()
    // Get form data as object
    if (Object.keys(cart).length === 0) {
      alert("You have no items in your cart!")
      return
    }

    const formData = new FormData(formEl)
    const data = Object.fromEntries(formData)

    const mergedData = { ...data, cart: cart }

    console.log("mergedData", mergedData)

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

  cancelBtn.addEventListener("click", () => {
    navigation.back()
  })

  formEl.addEventListener("input", (e) => {
    if (
      !(e.target instanceof HTMLInputElement) ||
      !(error instanceof HTMLElement)
    )
      return
    if (e.target?.validity.valid) {
      error.textContent = ""
      error.style.display = "none"
    } else {
      showError()
    }
  })

  function showError() {
    if (!formEl || !error) return
    if (!(error instanceof HTMLElement)) return
    error.style.display = "block"
    if (formEl.name === "") {
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

  navigation.addEventListener("navigate", (e) => {
    const inputs = formEl.querySelectorAll("input")
    const formValues = Array.from(inputs).some((input) => input.value)
    if (formValues) {
      savedForm = Object.fromEntries(new FormData(formEl))
    }
  })

  function fillForm() {
    const inputs = formEl?.querySelectorAll("input")
    if (!inputs) return
    inputs.forEach((input) => {
      if (input.type === "file") return
      input.value = savedForm[input.name]
    })
  }

  function addFile() {
    const fileInput = formEl?.querySelector('input[type="file"]')
    if (!fileInput || !(fileInput instanceof HTMLInputElement)) {
      return
    }
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
