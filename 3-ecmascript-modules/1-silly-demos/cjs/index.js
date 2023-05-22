var {
  superCheeseGrater,
  tinyCheeseGrater,
} = require("./cheeseGraterCollection")

// var diamondGrater = require("./addDiamonds")

console.log(superCheeseGrater("cheddar"))
// cheddar is grated now... in a really impressive way!
console.log(tinyCheeseGrater("gouda"))
// gouda is grated now... in a really cute way!

// console.log(diamondGrater(superCheeseGrater)("brie"))
// Brie is grated now... in a really impressive way! Everyone claps and cheers for your diamond encrusted superCheeseGrater!

// var incredibleCheeseGrater = diamondGrater(superCheeseGrater)

// incredibleCheeseGrater("cheddar").then((result) => {
//   console.log(result)
//   // cheddar is grated now... in a really impressive way! Everyone claps and cheers for your diamond encrusted superCheeseGrater!
// })
