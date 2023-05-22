console.log("Loading addDiamonds module...")
function addDiamonds(cheeseGrater) {
  return (cheese) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(
          cheeseGrater(cheese) +
            ` Everyone claps and cheers at your diamond encrusted ${cheeseGrater.name}!`
        )
      }, 3000) // 3-second delay
    })
  }
}

console.log("addDiamonds module loaded!")
export default addDiamonds
