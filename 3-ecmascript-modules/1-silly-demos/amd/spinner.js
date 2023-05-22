define(function () {
  console.log("Loading spinner module...")

  function createSpinner(mainElement) {
    const spinner = document.createElement("div")
    spinner.className = "spinner"
    mainElement.appendChild(spinner)
    return spinner
  }

  console.log("Spinner module loaded!")
  return createSpinner
})
