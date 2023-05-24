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
  // 'cheeseGrater' will be:
  // in an AMD environment: the module './cheeseGraterAMD'
  // in a Node.js/CommonJS environment: the module './cheeseGraterCJS'
  // in the browser: `root.cheeseGrater`

  // 'this' is the global context ('Window' in browser) in non-AMD/CJS environments;
  // Otherwise, it is discarded.
  function superCheeseGrater(cheese) {
    return cheeseGrater(cheese) + "... in a really impressive way!"
  }
  return superCheeseGrater
})
