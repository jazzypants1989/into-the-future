import render from "../components/render.js"
import { cart } from "../features/cart.js"

export default async function Checkout() {
  const url = new URL(window.location.href)
  const searchParams = new URLSearchParams(url.search)
  let error = searchParams.get("error")

  document.title = "Checkout"

  const cartItems = Object.keys(cart).map((id) => {
    return `
            <div class="cart-item">
                <h2>${cart[Number(id)].product.title}</h2>
                <span>$${cart[Number(id)].product.price}</span>
                <span>Quantity: ${cart[Number(id)].quantity}</span>
            </div>
            `
  })

  if (cartItems.length === 0) {
    render(`<h1>Checkout</h1><p>You have no items in your cart!</p>`)
    return
  }

  const stringifiedCart = JSON.stringify(cart)

  const form = `
  ${error ? `<p class="error">${error}</p>` : ""}
        <form class="form-container" method="POST" action="/checkout">
        <span class="progress-number">0%</span>
        <div class="progress-bar" id="progress-bar"></div>
        
        <div id="step1" class="form-step active">
          <input type="text" id="name" placeholder="Name" name="name" />
          <input type="email" id="email" placeholder="Email" name="email" />
        </div>
        <div id="step2" class="form-step">
          <input type="text" id="address" placeholder="Address" name="address" />
          <input type="text" id="city" placeholder="City" name="city" />
        </div>
        <div id="step3" class="form-step">
          <input type="text" id="credit-card" placeholder="Credit Card Number" name="creditCard" />
          <input type="text" id="cvv" placeholder="CVV" name="cvv" />
        </div>  
        <div id="step4" class="form-step">
          <h2>Everything's good to go!</h2>
          <p>Press the submit button to complete your purchase.</p>
        </div>
  
        <p class="error-message" id="error-message"></p>
        <div id="buttons">
          <button id="prev" type="button">Previous</button>
          <button id="next" type="button">Next</button>
          <button id="submit">Submit</button>
        </div>
        <input type="hidden" name="cart" value="${encodeURIComponent(
          stringifiedCart
        )}" />
        </form>
    `
  render(`
        <h1>Checkout</h1>
        <div style="view-transition-name: cartItems">
        ${cartItems.join("")}
        <h2>Total</h2>
        <p>Total: $${Object.values(cart).reduce(
          (acc, item) => acc + item.product.price * item.quantity,
          0
        )}</p>
        ${form}
    `)

  const storedForm = JSON.parse(localStorage.getItem("formValues") || "{}")
  const storedStep = localStorage.getItem("step") || 0

  if (storedForm) {
    const inputs = document.querySelectorAll("input")
    inputs.forEach((input) => {
      if (input.name === "cart") return
      if (input.name === "cvv") return
      if (storedForm[input.name] === undefined) return

      input.value = storedForm[input.name]
    })
  }

  /**
   * The form steps
   * @type {NodeListOf<HTMLDivElement>} steps
   */
  const steps = document.querySelectorAll(".form-step")
  const prevButton = document.getElementById("prev")
  const nextButton = document.getElementById("next")
  const submitButton = document.getElementById("submit")
  const progressBar = document.getElementById("progress-bar")
  /**
   * The progress number
   * @type {HTMLSpanElement | null} progressNumber
   */
  const progressNumber = document.querySelector(".progress-number")
  const errorMessage = document.getElementById("error-message")
  const main = document.querySelector("main")
  // const formElement = document.querySelector("form")
  // const hiddenCart = document.createElement("input")
  // hiddenCart.type = "hidden"
  // hiddenCart.name = "cart"
  // hiddenCart.value = JSON.stringify(cart)
  // formElement.appendChild(hiddenCart)
  // This way you don't have to encode/decode the cart
  // But, that's a good practice to know

  let currentStep = 0

  if (storedStep && !error) {
    updateDOM(Number(storedStep))
  }

  prevButton?.addEventListener("click", prevHandler)
  nextButton?.addEventListener("click", nextHandler)
  submitButton?.addEventListener("click", submitHandler)

  function prevHandler() {
    steps.forEach((step) => {
      step.style.setProperty("view-transition-name", "slide-right")
    })
    if (currentStep === steps.length - 1) {
      alert("DON'T YOU DARE GO BACK!")
      return
    }

    transitionHelper({
      classNames: ["back-transition"],
      updateDOM: () => updateDOM(currentStep - 1),
    })
  }

  function nextHandler() {
    steps.forEach((step) => {
      step.style.setProperty("view-transition-name", "slide-left")
    })

    if (validateStep(currentStep)) {
      error = null
      transitionHelper({
        classNames: ["success-transition"],
        updateDOM: () => updateDOM(currentStep + 1),
      })
    } else {
      showError("Please fill out all fields")
    }
  }

  /**
   * Checks if the current step is valid
   * @param {Event} e
   * @returns {void}
   */
  function submitHandler(e) {
    if (validateStep(currentStep)) {
      submitForm()
    } else {
      e.preventDefault()
      showError("Please fill out all fields")
    }
  }

  function submitForm() {
    alert("Form submitted!")
    if (!main) return
    main.style.backgroundColor = "blue"
    transitionHelper({
      classNames: ["success-transition"],
      updateDOM: () => updateDOM(currentStep + 1),
    })
  }

  /**
   * Number Tween Function Paramater Object
   * @typedef {Object} NumberTweenParams
   * @property {number} from
   * @property {number} to
   * @property {number} duration
   * @property {(value: number) => void} onUpdate
   */
  /**
   * Animates the number as it counts up
   * @param {NumberTweenParams} params
   * @returns {void}
   */
  function animateNumberTween({ from, to, duration, onUpdate }) {
    const startTime = Date.now()
    const endTime = startTime + duration
    const change = to - from

    function update() {
      const now = Date.now()
      const timeLeft = endTime - now
      const progress = 1 - timeLeft / duration
      const value = from + change * progress
      onUpdate(value)
      if (now < endTime) {
        requestAnimationFrame(update)
      }
    }

    requestAnimationFrame(update)
  }

  /**
   * Shows the error message
   * @param {string} message
   * @returns {void}
   */
  function showError(message) {
    if (!errorMessage) return
    const transition = transitionHelper({
      classNames: ["error-transition"],
      updateDOM: () => {
        errorMessage.textContent = message
        errorMessage.classList.add("active")
      },
    })

    transition.ready.finally(() => {
      errorMessage.style.scale = "1"
    })

    transition.finished.finally(() => {
      setTimeout(() => {
        errorMessage.style.scale = "0"
        const inputs = steps[currentStep].querySelectorAll("input")
        inputs.forEach((input) => {
          input.classList.remove("error")
        })
      }, 2400)
      setTimeout(() => {
        errorMessage.classList.remove("active")
      }, 3000)
    })
  }

  /**
   * Validates the current step
   * @param {number} step
   * @returns {boolean}
   */
  function validateStep(step) {
    let isValid = true
    const inputs = steps[step].querySelectorAll("input")
    inputs.forEach((input) => {
      if (!input.value) {
        input.classList.add("error")
        isValid = false
      } else {
        input.classList.remove("error")
      }
    })
    return isValid
  }

  /**
   * @typedef {Object} TransitionHelperParams
   * @property {string[]} classNames
   * @property {() => void} updateDOM
   * @property {boolean} [skipTransition]
   */

  /**
   * @param {TransitionHelperParams} params
   * @returns {ViewTransition}
   */
  function transitionHelper({
    skipTransition = false,
    classNames = [],
    updateDOM,
  }) {
    if (skipTransition || !document.startViewTransition) {
      const updateCallbackDone = Promise.resolve(updateDOM()).then(() => {})

      return {
        ready: Promise.reject(Error("View transitions unsupported")),
        updateCallbackDone,
        finished: updateCallbackDone,
        skipTransition: () => {},
      }
    }

    if (!main) throw Error("No main element found")
    main.classList.add(...classNames)
    const transition = document.startViewTransition(updateDOM)
    transition.finished.finally(() => main.classList.remove(...classNames))
    return transition
  }

  /**
   * Updates the DOM to the new step
   * @param {number} newStep
   * @returns {void}
   */
  function updateDOM(newStep) {
    if (newStep < 0 || newStep >= steps.length) return
    if (newStep === currentStep) return
    steps[currentStep].classList.remove("active")
    steps[newStep].classList.add("active")
    currentStep = newStep

    if (
      !progressBar ||
      !progressNumber ||
      !prevButton ||
      !nextButton ||
      !submitButton
    )
      return

    prevButton.style.display = currentStep === 0 ? "none" : "inline-block"
    nextButton.style.display =
      currentStep === steps.length - 1 ? "none" : "inline-block"
    submitButton.style.display =
      currentStep === steps.length - 1 ? "inline-block" : "none"

    progressBar.style.width = `${(currentStep / (steps.length - 1)) * 100}%`
    progressBar.style.backgroundColor =
      currentStep === steps.length - 1 ? "green" : "#333"

    animateNumberTween({
      from: Number(progressNumber.textContent?.replace("%", "")),
      to: (currentStep / (steps.length - 1)) * 100,
      duration: 500,
      onUpdate: (value) => {
        value = Math.max(0, Math.min(100, value))
        progressNumber.textContent = `${Math.round(value)}%`
        progressNumber.style.left = `${value}%`
      },
    })
  }

  updateDOM(currentStep)

  window.navigation.addEventListener("navigate", (e) => {
    const form = document.querySelector("form")
    if (!form) return
    const inputs = document.querySelectorAll("input")
    /**
     * @type {Record<string, string>}
     */
    const values = {}
    inputs.forEach((input) => {
      if (input.name === "cart") return
      values[input.name] = input.value
    })
    localStorage.setItem("formValues", JSON.stringify(values))
    localStorage.setItem("step", currentStep.toString())
  })

  /**
   * Checks the form to see if pressing enter is a cool thing to do
   * @param {KeyboardEvent} e
   * @returns {void}
   */
  function checkEnter(e) {
    if (e.key === "Enter") {
      if (currentStep === steps.length - 1 && validateStep(currentStep)) {
        submitForm()
      } else {
        nextHandler()
      }
    }
  }

  document.addEventListener("keydown", checkEnter)
}
