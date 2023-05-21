import { tinyCheeseGrater } from "./cheeseGraterCollection.js"

console.log(tinyCheeseGrater("cheddar"))

const main = document.querySelector("main")
main && (main.innerHTML = tinyCheeseGrater("cheddar"))
