import Nope from "./Nope"
import ProductComponent from "../components/Product"
import { getProduct } from "../components/store"
import render, { buttonFinderAdd } from "../components/render"

export default async function ProductPage(id?: string) {
  if (!id) {
    Nope("badID", id)
    return
  }

  const search = document.querySelector("#search") as HTMLInputElement
  const product = await getProduct(id)
  if (!product) {
    return Nope(id)
  }
  document.title = product.title
  search.value = product.title
  product
    ? render({
        component: `
<h1>${product.title}</h1>
${ProductComponent(product)}
`,
        callback: buttonFinderAdd,
      })
    : Nope("badID", id)
}
