function heavyDuty(index) {
  const bigArray = new Array(7000).fill(":)");
  console.log("Created!");
  return bigArray[index];
}

console.log(heavyDuty(555));
console.log(heavyDuty(555));
console.log(heavyDuty(555));

const getHavyDuty = heavyDuty2();

console.log(getHavyDuty(345));


function heavyDuty2() {
  const bigArray = new Array(7000).fill(":)");
  console.log("Created again!");
  return function getIndex(index) {
    return bigArray[index];
  };
}
