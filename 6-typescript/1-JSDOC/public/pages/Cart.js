import { getProducts } from "../components/store.js"
import render, { buttonFinderRemove } from "../components/render.js"

import * as Types from "../types.js"

/**
 * Cart page view template
 * @returns {Promise<void>}
 */
export default async function Cart() {
  /**
   * @type {Types.Cart}
   */
  const cart = JSON.parse(localStorage.getItem("cart") || "{}")
  document.title = "Cart"
  const products = await getProducts()
  if (Object.keys(cart).length === 0) {
    render({
      component: `
          <h1>Cart</h1>
          <p>Your cart is empty. Go buy some weird stuff!</p>
          `,
    })
  } else {
    const cartItems = Object.keys(cart).map((id) => {
      const product = products.find((product) => product.id === Number(id))
      return `
            <div class="product">
              <img src="${product?.thumbnail}" alt="${product?.title}" />
              <h2>${product?.title}</h2>
              <p>$${product?.price}</p>
              <p>Quantity: ${cart[Number(id)].quantity}</p>
              <button class="remove-from-cart" id="${
                product?.id
              }">Remove from cart</button>
            </div>
            `
    })
    render({
      component: `
          <h1>Cart</h1>
          ${cartItems.join("")}
          `,
      callback: buttonFinderRemove,
    })
  }
  return
}
