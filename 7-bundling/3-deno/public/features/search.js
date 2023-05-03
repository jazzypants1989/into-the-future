import render, { buttonFinderAdd } from "render"
import { getProducts } from "store"
import ProductComponent from "Product"
import * as _Types from "Types"

/**
 * The search input element. This is used to get the search value.
 * @type {HTMLInputElement | null}
 */
export const search = document.querySelector("#search")

/**
 * Adds an event listener to the search input element. Runs the {@link searchHandler} function when the input event is fired.
 * @returns {void}
 */
export function searchListener() {
  search?.addEventListener("input", searchHandler)
}

/**
 * Filters the products based on the search value. If there are no products found, it will render a message saying so. If there are products found, it will render the products.
 * @returns {Promise<void>}
 * @example
 * searchHandler()
 *  // => <h1>Products</h1><p>No Products Found</p>
 * @example
 * search.value = "Cool Thing"
 * searchHandler()
 * // => <h1>Products</h1><div class="product"><h2>Cool Thing</h2><p>It's a cool thing</p><p>$10.00</p><button class="add-to-cart" id="1">Add to Cart</button></div>
 */
export async function searchHandler() {
  /**
   * The products array.
   * @type {_Types.Product[]}
   */
  const products = await getProducts()
  /**
   * The search value.
   * @type {string | undefined}
   */
  const searchValue = search?.value
  document.title = "Search Page for " + searchValue
  /**
   * The filtered products array.
   * @type {_Types.Product[]}
   */
  const filteredProducts = products.filter((product) => {
    if (!searchValue) return false
    return product.title.toLowerCase().includes(searchValue?.toLowerCase())
  })
  if (filteredProducts.length === 0) {
    render(`<h1>Products</h1><p>No Products Found</p>`)
  } else {
    const productsHTML = filteredProducts.map(ProductComponent).join("")
    render(`<h1>Products</h1>${productsHTML}`)
    buttonFinderAdd()
  }
}
