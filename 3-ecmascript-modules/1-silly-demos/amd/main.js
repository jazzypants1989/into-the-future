require(["./cheeseGraterCollection", "./addDiamonds", "./spinner"], function (
  superCheeseGrater,
  addDiamonds,
  createSpinner
) {
  const main = document.querySelector("main")
  const button = document.querySelector("button")
  const spinner = createSpinner(main)

  button.addEventListener("click", () => {
    const div = document.createElement("div")
    div.innerHTML =
      "You clicked the button! It still worked despite the module loading asynchronously!"
    main.appendChild(div)
  })

  const incredibleCheeseGrater = addDiamonds(superCheeseGrater)

  incredibleCheeseGrater("cheddar").then((result) => {
    main.innerHTML = result
    spinner.style.display = "none" // Hide spinner when result is ready
  })
})
