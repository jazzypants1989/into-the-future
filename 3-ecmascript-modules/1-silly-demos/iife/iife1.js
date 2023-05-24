;(function () {
  // module scope
  var cheese = "cheddar"(function () {
    // local scope
    var cheese = "gouda"
    console.log(cheese) // gouda
  })()

  console.log(cheese) // cheddar
})() // note the extra parentheses
