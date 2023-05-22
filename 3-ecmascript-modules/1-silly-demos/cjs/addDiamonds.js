const addDiamonds = (cheeseGrater) => {
  return (cheese) => {
    return (
      cheeseGrater(cheese) +
      ` Everyone claps and cheers at your diamond encrusted ${cheeseGrater.name}!`
    )
  }
}

module.exports = addDiamonds
