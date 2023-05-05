import render from "../components/render.js";
import { cart } from "../features/cart.js";
function createLineItems() {
    console.log("createLineItems", cart);
    return Object.keys(cart).map((id) => {
        const idNum = Number(id);
        return {
            price_data: {
                currency: "usd",
                product_data: {
                    name: cart[idNum].product.title,
                    images: [cart[idNum].product.images[0]],
                },
                unit_amount: cart[idNum].product.price * 100,
            },
            quantity: cart[idNum].quantity,
        };
    });
}
async function createSession() {
    const checkoutButton = document.getElementById("checkout");
    checkoutButton.disabled = true;
    checkoutButton.textContent = "Redirecting you to Stripe... HOLD YOUR HORSES!";
    const response = await fetch("/create-checkout-session", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            line_items: createLineItems(),
            mode: "payment",
            success_url: "http://localhost:3001/success",
            cancel_url: "http://localhost:4242/cancel",
        }),
    });
    const data = await response.json();
    console.log("data", data);
    location.href = data.session.url;
}
const renderCartItems = () => {
    const cartItems = Object.keys(cart).map((id) => {
        const idNum = Number(id);
        return `
      <div>
        <h3>${cart[idNum].product.title}</h3>
        <p>${cart[idNum].product.description}</p>
        <p>${cart[idNum].product.price}</p>
        <p>${cart[idNum].quantity}</p>
      </div>
    `;
    });
    return cartItems.join("");
};
function sessionListener() {
    const checkoutButton = document.getElementById("checkout");
    checkoutButton.addEventListener("click", createSession);
}
export default function Checkout() {
    render({
        component: `
    <div>
      <h1>Checkout</h1>
      ${renderCartItems()}
      <p>Total: ${Object.keys(cart).reduce((acc, id) => acc + cart[Number(id)].product.price * cart[Number(id)].quantity, 0)}</p>
      <button id="checkout">Checkout (Redirect to Stripe)</button>
    </div>
`,
        callback: sessionListener,
    });
}
