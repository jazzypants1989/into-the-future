define(function () {
  console.log('Loading cheeseGrater module...');
  function cheeseGrater(cheese) {
    return cheese + " is grated now"
  }
  console.log('cheeseGrater module loaded!');
  return cheeseGrater;
});
