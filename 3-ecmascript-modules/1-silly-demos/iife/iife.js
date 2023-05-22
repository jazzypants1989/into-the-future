;(function () {
  // module scope
  var cheese = "cheddar"

  ;(function () {
    // local scope
    var cheese = "gouda"
    console.log(cheese) // gouda
  })()

  console.log(cheese) // cheddar

  var secret = "I like cheese"
  console.log(secret) // I like cheese
})() // note the extra parentheses
