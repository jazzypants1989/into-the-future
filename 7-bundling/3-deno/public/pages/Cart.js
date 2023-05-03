import { getProducts } from "store"
import render, { buttonFinderRemove } from "render"
import * as _Types from "Types"

/**
 * Cart page view template
 * @returns {Promise<_Types.Product[]>}
 */
export default async function Cart() {
  /**
   * @type {_Types.Cart}
   */
  const cart = JSON.parse(localStorage.getItem("cart") || "{}")
  document.title = "Cart"
  const products = await getProducts()
  if (Object.keys(cart).length === 0) {
    render(`
          <h1>Cart</h1>
          <p>Your cart is empty. Go buy some weird stuff!</p>
          `)
  } else {
    const cartItems = Object.keys(cart).map((id) => {
      const product = products?.find((product) => product.id === Number(id))
      return `
            <div class="cart-item">
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
    render(`
          <h1>Cart</h1>
          ${cartItems.join("")}
          `)
    buttonFinderRemove()
  }
  if (!products) {
    render(`
          <h1>Cart</h1>
          <p>There was an error loading your cart. Please try again later.</p>
          `)
    return []
  }
  return products
}
