require(["./cheesegraterCollection"], function (superCheeseGrater) {
  const main = document.querySelector("main")

  main.innerHTML = superCheeseGrater("cheddar")
})
