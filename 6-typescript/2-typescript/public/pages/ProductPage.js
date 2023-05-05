import Nope from "./Nope.js";
import ProductComponent from "../components/Product.js";
import { getProduct } from "../components/store.js";
import render, { buttonFinderAdd } from "../components/render.js";
export default async function ProductPage(id) {
    const search = document.querySelector("#search");
    const product = await getProduct(id);
    if (!product) {
        return Nope(id);
    }
    document.title = product.title;
    search.value = product.title;
    product
        ? render({
            component: `
    <h1>${product.title}</h1>
    ${ProductComponent(product)}
    `,
            callback: buttonFinderAdd,
        })
        : Nope("badID", id);
}
