// // let + const

const player = "Xhaka";
let club = "Arsenal";

const arse_club = {
	name: 'Arsenal',
	league: 'English Premier League',
	budget: 100,
	isTopClub: true
};

let {name, league} = arse_club;

const xhaka = {
	[player]: "Granit Xhaka",
	value: 28,
	["hello" + 'world']: true
};

// baptic

const name = 'Debayan', age = 27, work = 'Deloitte';

const intro = `Hello! I am ${name}. I am ${age} years old and I work at ${work}.`;

const func = (a, b) => a + b;

// map, filter, reduce
//map
const myArr = ["Hello", "Bye"];
const newMyArr = myArr.map((str) => {
    return str + " World";
});
const plusArr = newMyArr.map(str => str + 1);
const func = (f, g) => (a) => f(g(a));
//filter
const listArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const oddArr = listArr.filter(num => num%2 != 0);

//reduce
const reduceArr = listArr.reduce((acc, num) => acc * num, 1);

//classes and contructors
class Player{
	constructor(name, club){
		this.name = name;
		this.club = club;
	}

	intro(){
		console.log(`Hi, I am ${this.name} and I play for ${this.club}!`);
	}
}

const P1 = new Player('Xhaka', 'Arsenal');

P1.intro();

//Object assignments and references
let obj = {a: 1, b: 2, c: 3};
let obj2 = Object.assign({}, obj);

//Shallow cloning
let obj3 = {
	a: 1,
	b: 2,
	c: {
		p: 33,
		q: 'Hello'
	}
};

let obj4 = Object.assign({}, obj3);
let obj5 = {...obj3};

//Deep cloning
let obj = {
	a: 1,
	b: 2,
	c: {
		d: true
	}
};

let obj2 = JSON.parse(JSON.stringify(obj));

//Type Coercion
1 === 1;
NaN === NaN;
Object.is(NaN, NaN);

// ECMA Specials
let arr = ["dog", "cat", "wolf"];
arr.includes("dog");

const power = (m, n) => m**n;

let a = 'Hello'.padStart(10,'0');
let b = 'World'.padEnd(19);

const func = (
				a,
				b,
				c,
			 ) => console.log(a);

//Object.keys, Object.values, Object.entries
let obj = {
	user1: 'Jerry',
	user2: 'Tom',
	user3: 'Donald'
};

Object.keys(obj).map(key => console.log(key, obj[key]));

Object.values(obj).filter(values => values.includes('Don'));

Object.values(obj).forEach(values => console.log(values));

Object.entries(obj).map(entries => console.log(entries));

Object.entries(obj).map(entry => entry[1] + entry[0].replace('user',''));

//Flat

let arr1 = [1,2,[3,4],5];
arr1.flat();

let arr2 = [1,2,[3,4,[5,6]]];
arr2.flat();
arr2.flat(2);

let arr4 = ["tom", "jerry", "regan",,,,,,,,"donald"];
arr4.flat();

//Flatmap
let emoji = ['😀', '😅', '😆', '😉', '😊', '😋'];
let flatEmoji = emoji.flatMap(emo => `${emo} 👹`);

//trimStart(), trimEnd()

//fromEntries
let profileList = [['John', 23], ['Mary', 19], ['Hank', 19]];
let obj = Object.fromEntries(profileList);

//try catch
try{
	console.log(bob);
} catch{
	console.log('Messed up');
}

// Advanced Loops
// for of
// Both arrays and strings are iterable
const basket = ['apples', 'oranges', 'mangoes', 'grapes'];

for(item of basket){
	console.log(item);
}

const detailedBasket = {
	apples: 10,
	oranges: 6,
	mangoes: 23,
	grapes: 100
};

for(fruit in detailedBasket){
	console.log(fruit);
}

// for in loops for objects and for of loops for arrays and strings

const flattened = [[0,1], [2,3], [4,5]].reduce((a,b) => {
	debugger;
	return a.concat(b);
}, []);

// CALL STACK

//WEB API

//CALLBACK QUEUE

//EVENT LOOP

console.log(1);
setTimeout(() => {
	console.log(2);
}, 3000);
console.log(3);

export const newFunc = (a, b) => a + b;

//Prototype
let animal = {
	eats: true,
	walk: () => console.log('Walking')
};

let rabbit = {
	jumps: true,
	__proto__: animal
};

rabbit.walk();

let user = {
	firstName: 'John',
	lastName: 'Smith',
	set fullName(name){
		[this.firstName, this.lastName] = name.split(' ');
	},
	get fullName(){
		return `${this.firstName} ${this.lastName}`;
	}
};

let admin = {
	__proto__: user,
	isAdmin: true
};

//hasOwnProperty
for(prop in admin){
	if(admin.hasOwnProperty(prop)){
		console.log(`Owned ${prop}`);
	} else{
		console.log(`Inherited ${prop}`);
	}
}