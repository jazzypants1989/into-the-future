var {
  superCheeseGrater,
  tinyCheeseGrater,
} = require("./cheeseGraterCollection")

console.log(superCheeseGrater("cheddar"))
console.log(tinyCheeseGrater("gouda"))

var addDiamonds = require("./addDiamonds")

console.log("Loading addDiamonds module...")

var incredibleCheeseGrater = addDiamonds(superCheeseGrater)

console.log(incredibleCheeseGrater("cheddar"))

// console.log("NOTHING WOULD WORK RIGHT NOW IN THE BROWSER!!")

// incredibleCheeseGrater("cheddar").then((result) => {
//   console.log(result)
// })
