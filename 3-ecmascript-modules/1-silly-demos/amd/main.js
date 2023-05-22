require(["./cheeseGraterCollection", "./addDiamonds", "./spinner"], function (
  superCheeseGrater,
  addDiamonds,
  createSpinner
) {
  const main = document.querySelector("main")
  const spinner = createSpinner(main)

  const incredibleCheeseGrater = addDiamonds(superCheeseGrater)

  incredibleCheeseGrater("cheddar").then((result) => {
    main.innerHTML = result
    spinner.style.display = "none" // Hide spinner when result is ready
  })
})
