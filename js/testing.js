// Complete the below questions using this array:
const array = [
  {
    username: "john",
    team: "red",
    score: 5,
    items: ["ball", "book", "pen"]
  },
  {
    username: "becky",
    team: "blue",
    score: 10,
    items: ["tape", "backpack", "pen"]
  },
  {
    username: "susy",
    team: "red",
    score: 55,
    items: ["ball", "eraser", "pen"]
  },
  {
    username: "tyson",
    team: "green",
    score: 1,
    items: ["book", "pen"]
  },

];

//Create an array using forEach that has all the usernames with a "!" to each of the usernames
const notArr = array.map(obj => obj.username + "!");

//Create an array using map that has all the usernames with a "? to each of the usernames


//Filter the array to only include users who are on team: red
const teamRed = array.filter(obj => obj.team === "red");

//Find out the total score of all users using reduce
const totalScore = array.reduce((acc, obj) => obj.score + acc, 0);
// (1), what is the value of i?
// (2), Make this map function pure:
const arrayNum = [1, 2, 4, 5, 8, 9];
const newArray = arrayNum.map((num, i) => {
	console.log(num, i);
	alert(num);
	return num * 2;
})

//BONUS: create a new list with all user information, but add "!" to the end of each items they own.
const newArray = array.map((obj) => {
  let {username, team, score, items} = obj;
  const newItems = items.map(item => item + "!");

  const newItem = {
    username, team, score, newItems
  };

  return newItem;
});

// Classes
class Player{
  constructor(name, team){
    this.name = name;
    this.team = team;
  }

  intro(){
    console.log(`Hello I am ${this.name} from team ${this.team}!`);
  }
}

const player1 = new Player("Samuel", "Fire");

//Evaluate these:
//#1
[2] === [2] 
{} === {} 

//#2 what is the value of property a for each object.
const object1 = { a: 5 }; 
const object2 = object1; 
const object3 = object2; 
const object4 = { a: 5}; 
object1.a = 4;


//#3 create two classes: an Animal class and a Mamal class. 
// create a cow that accepts a name, type and color and has a sound method that moo's her name, type and color. 

class Animal{
  constructor(name, type, color){
    this.name = name;
    this.type = type;
    this.color = color;
  }
}

class Mammal extends Animal{
  constructor(name, type, color){
    super(name, type, color);
  }

  sound(){
    console.log(`Mooo!! This is ${this.name} of type ${this.type} and color ${this.color}!`);
  }
}

// Solve the below problems:


// #1) Check if this array includes the name "John".
const dragons = ['Tim', 'Johnathan', 'Sandy', 'Sarah'];
dragons.includes('John');

// #2) Check if this array includes any name that has "John" inside of it. If it does, return that
// name or names in an array.
const dragons = ['Tim', 'Johnathan', 'Sandy', 'Sarah'];
const array = dragons.filter(str => str.includes('John'));

// #3) Create a function that calulates the power of 100 of a number entered as a parameter
const power = (num) => 100**num;

// #4) Useing your function from #3, put in the paramter 10000. What is the result?
// Research for yourself why you get this result



// Solve the below problems:

// #1) Line up the Turtle and the Rabbit at the start line:
const startLine = '     ||<- Start line';
let turtle = '🐢';
let rabbit = '🐇';
turtle = turtle.padStart(8);
rabbit = rabbit.padStart(8);

// it should look like this:
'     ||<- Start line'
'       🐢'
'       🐇'

// when you do:
console.log(startLine);
console.log(turtle);
console.log(rabbit);


// #2) What happens when you run turtle.trim().padEnd(9, '=') on the turtle variable
// Read about what the second parameter does in padEnd and padStart
turtle = turtle.trim().padEnd(9, '=');


// #3) Get the below object to go from:
let obj = {
  my: 'name',
  is: 'Rudolf',
  the: 'raindeer'
}
// to this:
'my name is Rudolf the raindeer'

let str = '';
obj = Object.entries(obj).forEach(entry => {
  str = str + `${entry[0]} ${entry[1]} `;
});

str = str.trim();

str1 = Object.entries(obj).map(entry => entry.join(' ')).join(' ');

// Solve the below questions:

// #1 Turn this array into a new array: [1,2,3,[4],[5]]. Bonus if you can do it on one line
const array = [[1],[2],[3],[[[4]]],[[[5]]]]

const newArray = array.flat(10);

// #2 Turn this array into a new array: [ 'Hello young grasshopper!', 'you are', 'learning fast!' ]
const greeting = [["Hello", "young", "grasshopper!"], ["you", "are"], ["learning", "fast!"]];

const newGreeting = greeting.flatMap(arr => arr.join(' '));

//#3 Turn the greeting array above into a string: 'Hello young grasshopper you are learning fast!'

const newestGreeting = newGreeting.join(' ');


//#4 Turn the trapped 3 number into: [3]
const trapped = [[[[[[[[[[[[[[[[[[[[[[[[[[3]]]]]]]]]]]]]]]]]]]]]]]]]];

trapped.flat(Infinity);

//#5 Clean up this email to have no whitespaces. Make the answer be in a single line (return a new string):
const userEmail3 = '     cannotfillemailformcorrectly@gmail.com   '

userEmail3.trimStart().trimEnd();

//#6 Turn the below users (value is their ID number) into an array: [ [ 'user1', 18273 ], [ 'user2', 92833 ], [ 'user3', 90315 ] ]
const users = { user1: 18273, user2: 92833, user3: 90315 }

const entryUser = Object.entries(users);

//#7 change the output array of the above to have the user's IDs multiplied by 2 -- Should output:[ [ 'user1', 36546 ], [ 'user2', 185666 ], [ 'user3', 180630 ] ]

const newEntryUser = entryUser.map(entry => [entry[0], entry[1]*2]);

//#8 change the output array of question #7 back into an object with all the users IDs updated to their new version. Should output: { user1: 36546, user2: 185666, user3: 180630 }
const userObj = Object.fromEntries(newEntryUser);

const basket = ['apples', 'oranges', 'grapes'];
const detailedBasket = {
  apples: 5,
  oranges: 10,
  grapes: 1000
}

//1
for (let i = 0; i < basket.length; i++) {
  console.log(basket[i]);
}

//2
basket.forEach(item => {
  console.log(item);
})

for (item in detailedBasket) {
  console.log(item);
}

for (item of basket) {
  console.log(item);
}

// Question #1:
// create a function called biggestNumberInArray() that takes
// an array as a parameter and returns the biggest number.
// biggestNumberInArray([-1,0,3,100, 99, 2, 99]) should return 100;
// Use at least 3 different types of javascript loops to write this:
const array = [-1,0,3,100, 99, 2, 99] // should return 100
const array2 = ['a', 3, 4, 2] // should return 4
const array3 = [] // should return 0

function biggestNumberInArray(arr) {
  let bigNum = -Infinity;
  for(item of arr){
    if(item > bigNum){
      bigNum = item;
    }
  }
  return bigNum;
}

function biggestNumberInArray2(arr) {

}

function biggestNumberInArray3(arr) {

}


// Question #2:
// Write a function checkBasket() that lets you know if the item is in the basket or not
amazonBasket = {
  glasses: 1,
  books: 2,
  floss: 100
}

function checkBasket(basket, lookingFor) {
  for(item in basket){
    if(item === lookingFor){
      return true;
    }
  }
  return false;
}

// Question 1: Clean the room function: given an input of [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20], make a function that organizes these into individual array
// that is ordered. For example answer(ArrayFromAbove) should return: [[1,1,1,1],[2,2,2], 4,5,10,[20,20], 391, 392,591]. Bonus: Make it so it organizes strings
// differently from number types. i.e. [1, "2", "3", 2] should return [[1,2], ["2", "3"]]
const cleanTheRoom = arr => {
  let finalArr = [], finalNumArr = [], finalStringArr = [];

  let numberArr = arr.filter(num => typeof(num) === 'number').sort((a,b) => a-b);
  let stringArr = arr.filter(num => typeof(num) === 'string').sort();

  let prev = -Infinity;

  for(num of numberArr){
    if(!(num === prev)){
      let x = arr.filter(item => item === num);
      finalNumArr.push(x.length === 1 ? x[0] : x);
      prev = num;
    }
  }
  
  for(num of stringArr){
    if(!(num === prev)){
      let x = arr.filter(item => item === num);
      finalStringArr.push(x.length === 1 ? x[0] : x);
      prev = num;
    }
  }

  if(finalNumArr.length > 0){
    finalArr.push(finalNumArr);
  }
  
  if(finalStringArr.length > 0){
    finalArr.push(finalStringArr);
  }

  return finalArr;
};


// Question 2: Write a javascript function that takes an array of numbers and a target number. The function should find two different numbers in the array
// that, when added together, give the target number. For example: answer([1,2,3], 4)should return [1,3]
const sumToTarget = (arr, num) => {
  let finalArr = [];
  for(let i=0;i<arr.length;i++){
    for(let j=i+1;j<arr.length;j++){
      if(arr[i] + arr[j] === num){
        let temp = [];
        temp.push(arr[i]);
        temp.push(arr[j]);
        finalArr.push(temp);
      }
    }
  }
  return finalArr;
};


// Question 3: Write a function that converts HEX to RGB. Then Make that function auto-dect the formats so that if you enter HEX color format it returns RGB
// and if you enter RGB color format it returns HEX.
const colorFormatConverter = color => {
  if(Object.is(parseInt(color,16),NaN)){
    if(color.substring(0,3).toLowerCase() === 'rgb'){
      color = color.replace('rgb(','').replace(')','').split(',');
      if(!(color.length === 3)){
        return NaN;
      }
      let r = Number(color[0]).toString(16);
      let g = Number(color[1]).toString(16);
      let b = Number(color[2]).toString(16);

      return `${r}${g}${b}`;
    }else{
      return NaN;
    }
  }else{
    let temp = [];
    temp.push(parseInt(color.substring(0,2),16));
    temp.push(parseInt(color.substring(2,4),16));
    temp.push(parseInt(color.substring(4),16));

    return `rgb(${temp.join(',')})`;
  }
};