export default function ProductComponent(product) {
  return `
            <div class="product" id="${product.id}">
              <a href=/product/${product.id}>
                <img src="${product.thumbnail}" alt="${product.title}" loading="lazy"/>
              <h2>${product.title}</h2>
              </a>
              <p>${product.description}</p>
              <p>$${product.price}</p>
              <button class="add-to-cart" id="${product.id}">Add to cart</button>
              <a href="/">Back to home</a>
            </div>
            `
}
