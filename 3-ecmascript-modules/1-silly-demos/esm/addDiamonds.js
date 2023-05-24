// const addDiamonds = (cheeseGrater) => {
//   return (cheese) => {
//     return (
//       cheeseGrater(cheese) +
//       ` Everyone claps and cheers at your diamond encrusted cheese grater!`
//     );
//   };
// };

// module.exports = addDiamonds;

function addDiamonds(cheeseGrater) {
  return (cheese) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(
          cheeseGrater(cheese) +
            ` Everyone claps and cheers at your diamond encrusted ${cheeseGrater.name}!`
        )
      }, 5000) // Simulating a 5-second delay for a large module
    })
  }
}

module.exports = addDiamonds
