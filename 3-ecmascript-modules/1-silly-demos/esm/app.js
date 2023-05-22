import { SmolBoi } from "./cheeseGraterCollection.js"
import addDiamonds from "./addDiamonds.js"
import createSpinner from "./spinner.js"

const isBrowser = typeof window !== "undefined"
let main, spinner

if (isBrowser) {
  console.log("We're in the browser!")
  main = document.querySelector("main")
  spinner = createSpinner(main)
}

const CuteBoi = addDiamonds(SmolBoi)

CuteBoi("cheddar").then((result) => {
  if (isBrowser) {
    main.innerHTML = result
    spinner.style.display = "none" // Hide spinner when result is ready
  } else {
    console.log("We're in Node! No DOM manipulation here!")
    console.log(result)
  }
})
