function doubleAll(numberArray) {
  let doubles = [];
  for (let i = 0;i < numberArray.length; i++){
    doubles.push(numberArray[i] * 2);
  }
return doubles;
}
console.log(doubleAll([1,2,3,4,]));


function absoluteValues(numberArray) {
  let absolute = [];
  for (let i = 0;i < numberArray.length; i++){
    absolute.push(Math.abs(numberArray[i]));
  }
return absolute;
}
console.log(absoluteValues([1,2,3,4,-7]));



function yelledGreetings(wordsArray) {
  let yelled = [];
  for (let i = 0; i < wordsArray.length; i++){
   yelled.push(wordsArray[i] + '!');
  }
  return yelled;
}
console.log(yelledGreetings(['hello', 'there', 'you']));



function changeToInitials() {
}

function doubleOdd() {
}

function upperCaseFirstLetters() {
}

function add1ToLeft() {
}


module.exports = {
  doubleAll,
  absoluteValues,
  yelledGreetings,
  changeToInitials,
  doubleOdd,
  upperCaseFirstLetters,
  add1ToLeft,
}