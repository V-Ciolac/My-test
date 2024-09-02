let view;
function initialize() {
  let called = 0;
  return function () {
    if (called > 0) {
      return;
    } else {
      view = "wall";
      called++;
      console.log("View has been set!");
    }
  };
}
const startOnce = initialize();
startOnce()

console.log(view);
console.log(view);add line
