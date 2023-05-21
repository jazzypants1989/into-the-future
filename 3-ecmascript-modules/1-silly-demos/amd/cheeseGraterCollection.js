define(["./cheeseGrater"], function (cheeseGrater) {
  function superCheeseGrater(cheese) {
    return cheeseGrater(cheese) + "... in a really impressive way!"
  }

  return superCheeseGrater
})
