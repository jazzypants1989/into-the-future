import cheeseGrater from "./cheeseGrater.js"

export function improvedCheeseGrater(cheese) {
  return (
    cheeseGrater(cheese) +
    `... like really grated!    
  Wow! It's so small now!
  That is a really impressive cheese grater!
  `
  )
}

function reallyTinyCheeseGrater(cheese) {
  return (
    cheeseGrater(cheese) +
    "... not much, though. Dang, this thing is impractical."
  )
}

export { reallyTinyCheeseGrater as SmolBoi }
