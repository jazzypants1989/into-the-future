import { c as createAstro, a as createComponent, r as renderTemplate, b as renderComponent, m as maybeRenderHead, u as unescapeHTML, d as addAttribute, e as renderHead, f as renderSlot, F as Fragment } from '../astro.c59b0e99.mjs';
/* empty css                         */import Stripe from 'stripe';
import { add, differenceInDays } from 'date-fns';
/* empty css                            *//* empty css                         */
const diana = "/_astro/diana.8cc7a430.avif";

const $$Astro$h = createAstro();
const $$Nope = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$h, $$props, $$slots);
  Astro2.self = $$Nope;
  let { id, prop } = Astro2.props;
  const searchParams = Astro2.url.searchParams;
  if (searchParams.has("id")) {
    id = searchParams.get("id");
  }
  if (searchParams.has("prop")) {
    prop = searchParams.get("prop");
  }
  function Nope(id2, prop2) {
    switch (id2) {
      case "badID":
        return `<h1>404</h1><h2>Sorry buddy, but I don't think we have a product with id #${prop2}.</h2>`;
      case "badFetch":
        return `<h1>404</h1><h2>Dang, either the server is down or someone misspelled a URL. Whatever it is, it's probably Jesse's fault.</h2>`;
      case "error":
        return `<h1>That's Weird!</h1><h4>${prop2}</h4>`;
      default:
        return `<h1>404</h1><h2>Huh, you're at ${Astro2.url.pathname}, but you really shouldn't be... \u{1F914} </h2>`;
    }
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout$1, { "title": "404", "description": "404" }, { "default": ($$result2) => renderTemplate`
  ${maybeRenderHead($$result2)}<div>${unescapeHTML(Nope(id, prop))}</div>
` })}`;
}, "C:/Documents/vidyas/Into the Future/8-deno-and-astro/2-astro/src/components/Nope.astro");

let products = [];
const db = async () => {
  const response = await fetch("https://dummyjson.com/products");
  if (!response.ok) {
    alert("HTTP-Error: " + response.status);
    console.error(response);
    return $$Nope({
      id: "badFetch"
    });
  }
  const data = await response.json();
  return data;
};
async function getProducts() {
  if (products.length > 0) {
    return products;
  }
  const data = await db();
  products = data.products;
  return products;
}
async function getProduct(id) {
  products = await getProducts();
  return products.find((product) => product.id === Number(id));
}

const $$Astro$g = createAstro();
const $$Search = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$g, $$props, $$slots);
  Astro2.self = $$Search;
  const products = await getProducts();
  return renderTemplate`${maybeRenderHead($$result)}<div hidden id="secret-products" class="astro-OTPDT6JM">
  ${products.map((product) => product.title + ", ID: " + product.id + " | ")}
</div>

<input id="search" type="text" placeholder="Search" class="astro-OTPDT6JM">
<div id="results" class="astro-OTPDT6JM">
  <ul id="results-list" class="astro-OTPDT6JM"></ul>
</div>`;
}, "C:/Documents/vidyas/Into the Future/8-deno-and-astro/2-astro/src/components/Search.astro");

const $$Astro$f = createAstro();
const $$Hamburger = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$f, $$props, $$slots);
  Astro2.self = $$Hamburger;
  return renderTemplate`${maybeRenderHead($$result)}<button id="hamburger" aria-label="Menu">☰</button>`;
}, "C:/Documents/vidyas/Into the Future/8-deno-and-astro/2-astro/src/components/Hamburger.astro");

const $$Astro$e = createAstro();
const $$ThemeToggle = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$e, $$props, $$slots);
  Astro2.self = $$ThemeToggle;
  return renderTemplate`${maybeRenderHead($$result)}<button id="toggleTheme">Toggle Theme</button>`;
}, "C:/Documents/vidyas/Into the Future/8-deno-and-astro/2-astro/src/components/ThemeToggle.astro");

const $$Astro$d = createAstro();
const $$CartCount = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$d, $$props, $$slots);
  Astro2.self = $$CartCount;
  const cartCookie = Astro2.cookies.get("cart").value;
  const cart = cartCookie ? JSON.parse(cartCookie) : [];
  const cartCount = cart.reduce(
    (acc, item) => acc + item.quantity,
    0
  );
  const cartTotal = cart.reduce((acc, item) => acc + item.quantity * item.price, 0).toFixed(2);
  return renderTemplate`${maybeRenderHead($$result)}<span id="cart-count">
  ${cartCount}
</span>
<span id="cart-total">
  $${cartTotal}
</span>`;
}, "C:/Documents/vidyas/Into the Future/8-deno-and-astro/2-astro/src/components/CartCount.astro");

const $$Astro$c = createAstro();
const $$Layout$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$Layout$1;
  const { title, description } = Astro2.props;
  return renderTemplate`<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description"${addAttribute(description, "content")}>
    <meta name="view-transition" content="same-origin">
    <title>${title}</title>
  ${renderHead($$result)}</head>
  <body class="dark">
    ${renderComponent($$result, "Hamburger", $$Hamburger, {})}
    <nav>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/events">Events</a>
        </li>
        <li>
          <a href="/products">Products</a>
        </li>
        <li>
          <a href="/cart">Cart</a>
          ${renderComponent($$result, "CartCount", $$CartCount, {})}
        </li>
        <li>
          <a href="/checkout">Checkout</a>
        </li>
        <li>
          ${renderComponent($$result, "Search", $$Search, {})}
        </li>
        <li>
          ${renderComponent($$result, "ThemeToggle", $$ThemeToggle, {})}
        </li>
      </ul>
    </nav>
    <main>
      ${renderSlot($$result, $$slots["default"])}
    </main>
    <footer>
      <a href="http://jazzypants.dev"> © 2023 Jovial Penguin, LLC.</a>
    </footer>
    <div id="toast-container"></div>
  </body></html>`;
}, "C:/Documents/vidyas/Into the Future/8-deno-and-astro/2-astro/src/components/Layout.astro");

const $$Astro$b = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout$1, { "title": "Home", "description": "Welcome to the real shop!" }, { "default": ($$result2) => renderTemplate`
  ${maybeRenderHead($$result2)}<h1>REAL SHOP</h1>
  <p>
    This is a totally real shop! See! That's a picture! Of a shop! Totally open.
  </p>
  <img${addAttribute(diana, "src")} alt="Check us out">
` })}`;
}, "C:/Documents/vidyas/Into the Future/8-deno-and-astro/2-astro/src/pages/index.astro");

const $$file$8 = "C:/Documents/vidyas/Into the Future/8-deno-and-astro/2-astro/src/pages/index.astro";
const $$url$8 = "";

const _page0 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file$8,
  url: $$url$8
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$a = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title, description } = Astro2.props;
  return renderTemplate`<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description"${addAttribute(description, "content")}>
    <meta name="view-transition" content="same-origin">
    <title>${title}</title>
  ${renderHead($$result)}</head>
  <body class="dark">
    ${renderComponent($$result, "Hamburger", $$Hamburger, {})}
    <nav>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/events">Events</a>
        </li>
        <li>
          <a href="/products">Products</a>
        </li>
        <li>
          <a href="/cart">Cart</a>
          ${renderComponent($$result, "CartCount", $$CartCount, {})}
        </li>
        <li>
          <a href="/checkout">Checkout</a>
        </li>
        <li>
          ${renderComponent($$result, "Search", $$Search, {})}
        </li>
        <li>
          ${renderComponent($$result, "ThemeToggle", $$ThemeToggle, {})}
        </li>
      </ul>
    </nav>
    <main>
      ${renderSlot($$result, $$slots["default"])}
    </main>
    <footer>
      <a href="http://jazzypants.dev"> © 2023 Jovial Penguin, LLC.</a>
    </footer>
    <div id="toast-container"></div>
  </body></html>`;
}, "C:/Documents/vidyas/Into the Future/8-deno-and-astro/2-astro/src/components/layout.astro");

const $$Astro$9 = createAstro();
const $$Checkout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$Checkout;
  const cartCookie = Astro2.cookies.get("cart").value;
  const cart = cartCookie ? JSON.parse(cartCookie) : {};
  const stripeENV = "sk_test_51Ls3YjJiFO7cOn9idbA0b3P3rwVXGs2YP5ctpYnJtBMCrfDIosa4touUgkUUAMr7VNXf0WsYxAOXKZWGslsVY7wh00gTSQ8wmG";
  if (Astro2.request.method === "POST") {
    const stripe = new Stripe(stripeENV);
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: Object.keys(cart).map((id) => ({
        price_data: {
          currency: "usd",
          product_data: {
            name: cart[id].title,
            images: cart[id].images
          },
          unit_amount: cart[id].price * 100
        },
        quantity: cart[id].quantity
      })),
      mode: "payment",
      success_url: `${Astro2.url.origin}/success`,
      cancel_url: `${Astro2.url.origin}/cart`
    });
    return new Response(JSON.stringify(session), {
      headers: {
        "Content-Type": "application/json"
      }
    });
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "checkout", "description": "give us money." }, { "default": ($$result2) => renderTemplate`
  ${maybeRenderHead($$result2)}<h1>Checkout</h1>
  <div id="cart">
    ${cart.length === 0 ? "<p>Cart is empty</p>" : ""}
    ${cart.length > 0 ? cart.map((item) => renderTemplate`<div${addAttribute(item.id, "id")} class="item">
              <h2${addAttribute(item.id, "id")} class="item-title">
                ${item.title}
              </h2>
              <img${addAttribute(item.images[0], "src")}${addAttribute(item.title, "alt")}>
              <p id="quantity" class="item-quantity">
                Quantity: ${item.quantity}
              </p>
              <p id="price" class="item-price">
                Price: $${item.price}
              </p>
            </div>`) : ""}
  </div>
  <hr>
  <p>
    Total: $${Object.keys(cart).reduce(
    (acc, id) => acc + cart[id].price * cart[id].quantity,
    0
  )}
  </p>
  <button id="checkout">Checkout (Redirect to Stripe)</button>
` })}`;
}, "C:/Documents/vidyas/Into the Future/8-deno-and-astro/2-astro/src/pages/checkout.astro");

const $$file$7 = "C:/Documents/vidyas/Into the Future/8-deno-and-astro/2-astro/src/pages/checkout.astro";
const $$url$7 = "/checkout";

const _page1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Checkout,
  file: $$file$7,
  url: $$url$7
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$8 = createAstro();
const $$Product = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$Product;
  const { product } = Astro2.props;
  const productPage = Astro2.url.pathname.startsWith("/product/") ? true : false;
  return renderTemplate`${maybeRenderHead($$result)}<div class="product"${addAttribute(product.id.toString(), "id")}>
  <a class="productLink"${addAttribute(`/product/${product.id.toString()}`, "href")}>
    <img${addAttribute(product.thumbnail, "src")}${addAttribute(productPage ? "activeImage" : "", "class")}${addAttribute(product.title, "alt")} loading="lazy">
    <h2>${product.title}</h2>
  </a>
  <p>${product.description}</p>
  <p>$${product.price}</p>
  <form method="POST">
    <input type="hidden" name="id"${addAttribute(product.id.toString(), "value")}>
    <button type="submit">Add to cart</button>
  </form>
  <a href="/">Back to home</a>
</div>`;
}, "C:/Documents/vidyas/Into the Future/8-deno-and-astro/2-astro/src/components/Product.astro");

const $$Astro$7 = createAstro();
const $$Products = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$Products;
  const products = await getProducts();
  const cartCookie = Astro2.cookies.get("cart").value;
  const cart = cartCookie ? JSON.parse(cartCookie) : [];
  if (Astro2.request.method === "POST") {
    let product;
    const form = await Astro2.request.formData();
    const body = Object.fromEntries(form.entries());
    if (body.id && typeof body.id === "string") {
      product = addToCart(body.id);
    }
    const param = `?toast=${product?.title}&type=success`;
    return Astro2.redirect(`/products${param}`);
  }
  function addToCart(id) {
    const product = products.find((product2) => product2.id === Number(id));
    if (!product)
      return;
    if (cart) {
      const cartItem = cart.find((item) => item.id === product.id);
      if (cartItem) {
        cartItem.quantity++;
      } else {
        cart.push({ ...product, quantity: 1 });
      }
      Astro2.cookies.set("cart", JSON.stringify(cart), { path: "/" });
    } else {
      Astro2.cookies.set("cart", JSON.stringify([{ ...product, quantity: 1 }]), {
        path: "/"
      });
    }
    return product;
  }
  return renderTemplate`${products.length === 0 && renderTemplate`${renderComponent($$result, "Nope", $$Nope, { "id": "badFetch" })}`}
${products.length > 0 && renderTemplate`${renderComponent($$result, "Layout", $$Layout$1, { "title": "Products", "description": "This is the products page" }, { "default": ($$result2) => renderTemplate`
      ${maybeRenderHead($$result2)}<h1>Products</h1>
      <div class="products">
        ${products.map((product) => renderTemplate`${renderComponent($$result2, "ProductComponent", $$Product, { "product": product })}`)}
      </div>
    ` })}`}`;
}, "C:/Documents/vidyas/Into the Future/8-deno-and-astro/2-astro/src/pages/products.astro");

const $$file$6 = "C:/Documents/vidyas/Into the Future/8-deno-and-astro/2-astro/src/pages/products.astro";
const $$url$6 = "/products";

const _page2 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Products,
  file: $$file$6,
  url: $$url$6
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$6 = createAstro();
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$id;
  const { id } = Astro2.params;
  if (!id) {
    return Astro2.redirect(`/404?id=badID&prop=${id}`, 302);
  }
  const product = await getProduct(id);
  const cartCookie = Astro2.cookies.get("cart").value;
  const cart = cartCookie ? JSON.parse(cartCookie) : [];
  if (!product) {
    return Astro2.redirect(`/404?id=badID&prop=${id}`, 302);
  }
  if (Astro2.request.method === "POST") {
    let product2;
    const form = await Astro2.request.formData();
    const body = Object.fromEntries(form.entries());
    if (body.id && typeof body.id === "string") {
      product2 = addToCart(body.id);
    }
    const param = `?toast=${product2?.title}&type=success`;
    return Astro2.redirect(`/product/${body.id}${param}`, 302);
  }
  function addToCart(id2) {
    if (cart) {
      const cartItem = cart.find((item) => item.id.toString() === id2);
      if (cartItem) {
        cartItem.quantity++;
      } else {
        cart.push({ ...product, quantity: 1 });
      }
      Astro2.cookies.set("cart", JSON.stringify(cart), { path: "/" });
    } else {
      Astro2.cookies.set("cart", JSON.stringify([{ ...product, quantity: 1 }]), {
        path: "/"
      });
    }
    return product;
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout$1, { "title": product.title, "description": product.description }, { "default": ($$result2) => renderTemplate`
  ${maybeRenderHead($$result2)}<h1>${product.title}</h1>
  ${renderComponent($$result2, "ProductComponent", $$Product, { "product": product })}
` })}`;
}, "C:/Documents/vidyas/Into the Future/8-deno-and-astro/2-astro/src/pages/product/[id].astro");

const $$file$5 = "C:/Documents/vidyas/Into the Future/8-deno-and-astro/2-astro/src/pages/product/[id].astro";
const $$url$5 = "/product/[id]";

const _page3 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$id,
  file: $$file$5,
  url: $$url$5
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$5 = createAstro();
const $$Success = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Success;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout$1, { "title": "Success", "description": "Your order has been placed. Thank you for shopping with us!" }, { "default": ($$result2) => renderTemplate`
  ${maybeRenderHead($$result2)}<h1>Success</h1>
  <p>Your order has been placed. Thank you for shopping with us!</p>
` })}`;
}, "C:/Documents/vidyas/Into the Future/8-deno-and-astro/2-astro/src/pages/success.astro");

const $$file$4 = "C:/Documents/vidyas/Into the Future/8-deno-and-astro/2-astro/src/pages/success.astro";
const $$url$4 = "/success";

const _page4 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Success,
  file: $$file$4,
  url: $$url$4
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$4 = createAstro();
const $$VanillaCalendar = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$VanillaCalendar;
  const {
    events = [],
    year = (/* @__PURE__ */ new Date()).getFullYear(),
    month = (/* @__PURE__ */ new Date()).getMonth()
  } = Astro2.props;
  function getDaysInMonth(year2, month2) {
    return new Date(year2, month2 + 1, 0).getDate();
  }
  function getFirstDayOfMonth(year2, month2) {
    return new Date(year2, month2, 1).getDay();
  }
  function isEventOnDay(event, year2, month2, day) {
    const currentDate = new Date(year2, month2, day).setHours(0, 0, 0, 0);
    const eventStart = event.start.setHours(0, 0, 0, 0);
    const eventEnd = event.end.setHours(0, 0, 0, 0);
    return currentDate >= eventStart && currentDate <= eventEnd;
  }
  const daysInMonth = getDaysInMonth(year, month);
  const firstDayOfMonth = getFirstDayOfMonth(year, month);
  const calendarDays = Array.from({ length: daysInMonth }, (_, i) => i + 1);
  const calendar = Array.from({ length: firstDayOfMonth }).fill(null).concat(calendarDays);
  return renderTemplate`${maybeRenderHead($$result)}<table class="calendar astro-3M6F55RD">
  <thead class="astro-3M6F55RD">
    <tr class="astro-3M6F55RD">
      <th class="astro-3M6F55RD">Sun</th>
      <th class="astro-3M6F55RD">Mon</th>
      <th class="astro-3M6F55RD">Tue</th>
      <th class="astro-3M6F55RD">Wed</th>
      <th class="astro-3M6F55RD">Thu</th>
      <th class="astro-3M6F55RD">Fri</th>
      <th class="astro-3M6F55RD">Sat</th>
    </tr>
  </thead>
  <tbody class="astro-3M6F55RD">
    <tr class="astro-3M6F55RD">
      ${calendar.map((day, index) => {
    const date = day ? new Date(year, month, day) : null;
    const event = events.find(
      (event2) => isEventOnDay(event2, year, month, day)
    );
    return renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "class": "astro-3M6F55RD" }, { "default": ($$result2) => renderTemplate`${index % 7 === 0 ? renderTemplate`<tr class="astro-3M6F55RD"></tr>` : ""}<td${addAttribute(`day ${event ? "event" : ""} astro-3M6F55RD`, "class")}>
                ${date ? date.getDate() : ""}
                ${event ? renderTemplate`<div class="event-title astro-3M6F55RD">${event.name}</div>` : ""}
              </td>
            ` })}`;
  })}
    </tr>
  </tbody>
</table>`;
}, "C:/Documents/vidyas/Into the Future/8-deno-and-astro/2-astro/src/components/VanillaCalendar.astro");

const $$Astro$3 = createAstro();
const $$Events = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Events;
  const today = /* @__PURE__ */ new Date();
  const events = [
    {
      name: "Murder Mystery Night",
      start: add(today, { days: 2, hours: 5 }),
      end: add(today, { days: 2, hours: 8 })
    },
    {
      name: "Gorgonzola Enthusiasts Conference",
      start: add(today, { days: 5 }),
      end: add(today, { days: 7 })
    },
    {
      name: "Dragon Appreciation Day",
      start: add(today, { days: 12 }),
      end: add(today, { days: 12 })
    },
    {
      name: "Circus Skills Workshop",
      start: add(today, { days: 15 }),
      end: add(today, { days: 16 })
    },
    {
      name: "Couch Sitting Competition",
      start: add(today, { days: 20 }),
      end: add(today, { days: 21 })
    },
    {
      name: "Three Week Rustic Retreat",
      start: add(today, { days: 22 }),
      end: add(today, { days: 43 })
    }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout$1, { "title": "Events", "description": "Real things happening at our real store", "class": "astro-RO7PGS3H" }, { "default": ($$result2) => renderTemplate`
  ${maybeRenderHead($$result2)}<h1 class="astro-RO7PGS3H">Events</h1>
  <div id="calendar" class="astro-RO7PGS3H">
    ${renderComponent($$result2, "Calendar", $$VanillaCalendar, { "events": events, "class": "astro-RO7PGS3H" })}
  </div>
  <ul class="events-list astro-RO7PGS3H">
    ${events.map((event) => {
    const daysRemaining = differenceInDays(event.start, today);
    return renderTemplate`<li${addAttribute({
      padding: "1rem",
      backgroundColor: daysRemaining < 7 ? "red" : "green",
      color: "white",
      borderRadius: "0.5rem",
      textAlign: "center",
      margin: "0.5rem"
    }, "style")} class="astro-RO7PGS3H">
            ${event.name} is in ${daysRemaining} days
          </li>`;
  })}
  </ul>
` })}`;
}, "C:/Documents/vidyas/Into the Future/8-deno-and-astro/2-astro/src/pages/events.astro");

const $$file$3 = "C:/Documents/vidyas/Into the Future/8-deno-and-astro/2-astro/src/pages/events.astro";
const $$url$3 = "/events";

const _page5 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Events,
  file: $$file$3,
  url: $$url$3
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$2 = createAstro();
const $$About = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$About;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout$1, {}, { "default": ($$result2) => renderTemplate`
  ${maybeRenderHead($$result2)}<h1>About</h1>
  <p>
    This is a totally real shop that sells totally real products. It's not a
    demonstration of how client-side routing works. Noo! It's just a shop.
  </p>
` })}`;
}, "C:/Documents/vidyas/Into the Future/8-deno-and-astro/2-astro/src/pages/about.astro");

const $$file$2 = "C:/Documents/vidyas/Into the Future/8-deno-and-astro/2-astro/src/pages/about.astro";
const $$url$2 = "/about";

const _page6 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$About,
  file: $$file$2,
  url: $$url$2
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$1 = createAstro();
const $$Cart = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Cart;
  const cartCookie = Astro2.cookies.get("cart").value;
  const cart = cartCookie ? JSON.parse(cartCookie) : [];
  if (Astro2.request.method === "POST") {
    const form = await Astro2.request.formData();
    const body = Object.fromEntries(form.entries());
    const { id } = body;
    if (!id || typeof id !== "string")
      return Astro2.redirect("/cart");
    const product = removeFromCart(id);
    const params = `?toast="${product.title} removed from cart&type=sad"`;
    return Astro2.redirect("/cart" + params);
  }
  function removeFromCart(id) {
    const item = cart.find((item2) => item2.id.toString() === id);
    if (!item)
      return;
    if (item.quantity > 1) {
      const newCart = cart.map((item2) => {
        if (item2.id.toString() === id) {
          return {
            ...item2,
            quantity: item2.quantity - 1
          };
        }
        return item2;
      });
      Astro2.cookies.set("cart", JSON.stringify(newCart));
      return item;
    } else {
      const newCart = cart.filter((item2) => item2.id.toString() !== id);
      Astro2.cookies.set("cart", JSON.stringify(newCart));
      return item;
    }
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout$1, { "title": "Cart", "description": "The Cart page!!" })}
${maybeRenderHead($$result)}<h1>Cart</h1>
${cart.length === 0 && renderTemplate`<p>No items in cart</p>`}
<p>
  Total: $${cart.reduce((acc, item) => acc + item.price, 0)}
</p>
<ul>
  ${cart.map((product) => renderTemplate`<li>
        <img class="product"${addAttribute(product.images[0], "src")}${addAttribute(product.title, "alt")} width="300" height="300">
        <p>${product.title}</p>
        <p>$${product.price}</p>
        <p>Quantity: ${product.quantity}</p>
        <form action="/cart" method="POST">
          <input type="hidden" name="id"${addAttribute(product.id, "value")}>
          <button type="submit">Remove</button>
        </form>
      </li>`)}
</ul>`;
}, "C:/Documents/vidyas/Into the Future/8-deno-and-astro/2-astro/src/pages/cart.astro");

const $$file$1 = "C:/Documents/vidyas/Into the Future/8-deno-and-astro/2-astro/src/pages/cart.astro";
const $$url$1 = "/cart";

const _page7 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Cart,
  file: $$file$1,
  url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro = createAstro();
const $$404 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$404;
  return renderTemplate`${renderComponent($$result, "Nope", $$Nope, {})}`;
}, "C:/Documents/vidyas/Into the Future/8-deno-and-astro/2-astro/src/pages/404.astro");

const $$file = "C:/Documents/vidyas/Into the Future/8-deno-and-astro/2-astro/src/pages/404.astro";
const $$url = "/404";

const _page8 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { _page0 as _, _page1 as a, _page2 as b, _page3 as c, _page4 as d, _page5 as e, _page6 as f, _page7 as g, _page8 as h };
