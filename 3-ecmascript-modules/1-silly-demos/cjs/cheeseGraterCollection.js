var cheeseGrater = require("./cheeseGrater")

function superCheeseGrater(cheese) {
  return cheeseGrater(cheese) + "... in a really impressive way!"
}

function tinyCheeseGrater(cheese) {
  return cheeseGrater(cheese) + "... in a really cute way!"
}

module.exports = {
  superCheeseGrater,
  tinyCheeseGrater,
}
