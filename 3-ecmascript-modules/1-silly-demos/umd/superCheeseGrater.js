;(function (root, factory) {
  if (typeof define === "function" && define.amd) {
    // AMD. Register as an anonymous module.
    define(["./cheeseGraterAMD"], factory)
  } else if (typeof exports === "object") {
    // Node.js/CommonJS
    module.exports = factory(require("./cheeseGraterCJS"))
  } else {
    // In the browser, use the global object
    root.superCheeseGrater = factory(root.cheeseGrater)
  }
})(this, function (cheeseGrater) {
  // this will be the global object in the browser,
  // or the module.exports object in Node.js
  function superCheeseGrater(cheese) {
    return cheeseGrater(cheese) + "... in a really impressive way!"
  }
  return superCheeseGrater
})
