/**
 * @typedef {Object} RawData
 * @property {Product[]} products - The products.
 */

/**
 * @typedef {Object} Product
 * @property {number} id - The id of the product.
 * @property {string} title - The title of the product.
 * @property {string} description - The description of the product.
 * @property {number} price - The price of the product.
 * @property {number} discountPercentage - The discount percentage of the product.
 * @property {string} image - The image of the product.
 * @property {string} category - The category of the product.
 * @property {string} brand - The brand of the product.
 * @property {number} rating - The rating of the product.
 * @property {number} stock - The stock of the product.
 * @property {string[]} images - The images of the product.
 * @property {string} thumbnail - The thumbnail of the product.
 */

/**
 * @typedef {Object} CartItem
 * @property {number} quantity - The quantity of the product in the cart.
 * @property {Product} product - The product in the cart.
 */

/**
 * The cart object. An object full of CartItems as values, keyed by their product id.
 * @typedef {Object} Cart
 * @type {Object.<number, CartItem>}
 */

/**
 * @typedef {Object} FourOhFour
 * @property {string} message - The message of the 404 error.
 */

/**
 * @typedef {HTMLButtonElement} Button
 * @property {boolean} alreadyAdded - Whether or not the button has already been added.
 * @property {number} id - The id of the product.
 * @property {Product} product - The product.
 */

export {}
