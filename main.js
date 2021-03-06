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



function changeToInitials(wordsArray) {
  let initials = [];
  for (let i = 0; i < wordsArray.length; i++){
   initials.push(wordsArray[i][0] + wordsArray[i][wordsArray[i].indexOf(' ') + 1]);
  }
  return initials;
}
console.log(changeToInitials(['Colin Jaffe', 'Patrick Hurley']))

function doubleOdd(numberArray) {
  let odds = [];
  for (let i = 0; i < numberArray.length; i++){
    if (Math.abs(numberArray[i]) % 2 === 1)
    {odds.push(numberArray[i] * 2);}
   else {
    odds.push(numberArray[i]);
  }
}
return odds;
}
console.log(doubleOdd([1, 2, 3, 4, 101, -5, 0, 32.5]));



function upperCaseFirstLetters(wordsArray) {
  let firstCap = [];
  for (let i = 0; i < wordsArray.length; i++){
  firstCap.push(wordsArray[i][0].toUpperCase() + wordsArray[i].slice(1).toLowerCase());
  }
  return firstCap;
}
console.log(upperCaseFirstLetters(['collin','patrick',]));

function add1ToLeft(numberArray) {
  let one = [];
  for (let i = 0; i < numberArray.length; i++){
    if (numberArray[i] >= 0){
   one.push(Number('1' + numberArray[i]));
  } else if (numberArray[i] < 0){
    one.push(('1' + (Math.abs(numberArray[i]))) * -1);
  }
}
  return one;
}
console.log(add1ToLeft([1,2,3,-30]));



module.exports = {
  doubleAll,
  absoluteValues,
  yelledGreetings,
  changeToInitials,
  doubleOdd,
  upperCaseFirstLetters,
  add1ToLeft,
}