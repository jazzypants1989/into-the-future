import render from "../components/render.js";
export default function Success() {
    render({
        component: `
            <h1>Success</h1>
            <p>
                Your order has been placed. Thank you for shopping with us!
            </p>
  `,
    });
}
