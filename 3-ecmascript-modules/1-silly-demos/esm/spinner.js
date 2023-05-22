console.log("Loading spinner module...")

export default function createSpinner(mainElement) {
  const spinner = document.createElement("div")
  spinner.className = "spinner"
  mainElement.appendChild(spinner)
  return spinner
}

console.log("Spinner module loaded!")
