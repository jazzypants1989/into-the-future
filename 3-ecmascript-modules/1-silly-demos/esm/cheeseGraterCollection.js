import cheeseGrater from "./cheeseGrater.js"

export function superCheeseGrater(cheese) {
  return cheeseGrater(cheese) + "... in a really impressive way!"
}

function tinyCheeseGrater(cheese) {
  return cheeseGrater(cheese) + "... in a really cute way!"
}

export { tinyCheeseGrater }
