import Cart from "Cart"
import * as Types from "../WHATDAFUG"

/**
 * The cart object. This is stored in localStorage.
 * An object full of CartItems as values, keyed by their product id.
 * @type {Types.Cart}
 */
export let cart = JSON.parse(localStorage.getItem("cart") || "{}")

/**
 * Initializes the cart. Checks localStorage, then adds the cart count and cart amount to the header.
 * @returns {void}
 * @example
 * updateCart()
 * // => <span id="cart-count">1</span>
 * // => <span id="cart-total">$10.00</span>
 * @example
 * cart = {}
 * updateCart()
 * // => <span id="cart-count">0</span>
 * // => <span id="cart-total">$0.00</span>
 */
export default function updateCart() {
  cart = JSON.parse(localStorage.getItem("cart") || "{}")
  /**
   * The cart count element in the header.
   * @type {HTMLSpanElement | null}
   */
  const cartCount = document.querySelector("#cart-count")
  /**
   * The cart amount element in the header.
   * @type {HTMLSpanElement | null}
   */
  const cartAmount = document.querySelector("#cart-total")
  cartCount ? (cartCount.innerText = Object.keys(cart).length.toString()) : null
  cartAmount
    ? (cartAmount.innerText =
        "$" +
        Object.values(cart)
          .map((item) => item.product.price * item.quantity)
          .reduce((a, b) => a + b, 0)
          .toFixed(2)
          .toString())
    : null
}

/**
 * Adds a product to the cart. If the product is already there, it will increase the quantity by 1. If the product is not in the cart, it will be added with a quantity of 1.
 * @param {Types.Product} product - The product to add to the cart.
 * @returns {void}
 */
export function addToCart(product) {
  if (cart[product.id]) {
    cart[product.id].quantity++
  } else {
    cart[product.id] = {
      quantity: 1,
      product,
    }
  }
  localStorage.setItem("cart", JSON.stringify(cart))
  alert(`${product.title} added to cart!`)
  updateCart()
}

/**
 * Removes a product from the cart.
 * If the product is in the cart, it will decrease the quantity by 1
 * If there is only 1 of the product in the cart, it will remove the product from the cart.
 * If the product is not in the cart, it will do nothing.
 * @param {Types.Product} product - The product to remove from the cart.
 * @returns {void}
 */
export function removeFromCart(product) {
  cart[product.id].quantity--
  if (cart[product.id].quantity === 0) {
    delete cart[product.id]
  }
  localStorage.setItem("cart", JSON.stringify(cart))
  alert(`${product.title} removed from cart!`)
  updateCart()
  Cart()
}
