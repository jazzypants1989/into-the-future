define(["./cheeseGrater"], function (cheeseGrater) {
  console.log("Loading cheeseGraterCollection module...")

  function superCheeseGrater(cheese) {
    return cheeseGrater(cheese) + " in a really impressive way!"
  }

  console.log("cheeseGraterCollection module loaded!")
  return superCheeseGrater
})
