console.log('Array with You!')

/*
    Array Methods
*/

// Create an array with which we will work

let names = ['Mike', 'Frank', 'Catherine', 'Fred', 'William'] ;

// Basic Looping
for (let i =0; i < names.length; i++){
    console.log(names[i]);
}

console.log('==================');

// For ... of
for (let name of names){
    console.log(name);
};

console.log('==================');

// Array.prototype.forEach() more than 1 execution after arrow needs {}
names.forEach(element => console.log(element));

console.log('==================');

// Callback function (any name really)
function callBack(name, idx, arr){
    console.log(name, idx, arr);
};
// forEach makes the loop happen
names.forEach(callBack);

names.forEach(name => console.log(name.toUpperCase()));

console.log('==================');

// Array.prototype.map()
function mapCallBack(element, index){
    if (index % 2 === 0){
        return element.toUpperCase();
    } else {
        return element.toLowerCase();
    };
};

let newNames = names.map(mapCallBack);
console.log(names);
console.log(newNames);

// As Arrow Function / One Line
let newerNames = names.map((e,i) => i%2===0 ? e.toUpperCase() : e.toLowerCase());
console.log(newerNames)

// Array.prototype.filter()
let cities = ['Chicago', 'Boston', 'Chattanooga', 'Baton Rouge', 'Champaign', 'Denver'];
console.log(cities);

function startsWithC(cityName){
    return cityName[0].toUpperCase() === 'C'
};

let cNameCitiesMap = cities.map(startsWithC);
console.log(cNameCitiesMap);
let cNameCitiesFilter = cities.filter(startsWithC);
console.log(cNameCitiesFilter);

// As an Arrow Function

function startsWithB(cityName){
    return cityName[0].toUpperCase() === 'B'
}
let bNameCities = cities.filter(city => city[0].toUpperCase() === 'B');
console.log(bNameCities);

let oddCities = cities.filter((c,i) => i%2 === 1)
console.log(oddCities);

let someNums = [1, 54, -324, 54, 324, -345, -23, 353];

// let sumPosNums = 0
// someNums.filter(e => e > 0).forEach(e => sumPosNums += e)
// console.log(sumPosNums)
let arrA = [1,2,3];


let arrB = [4,5,6];
let arrC = arrA + arrB;
console.log(arrC);
console.log(typeof arrC);

// Array.prototype.concat()
let arrAB = arrA.concat(arrB);
console.log(arrAB);

let myConcatArr = arrA.concat([4, 5, 6], [9, 8, 7], [34, 56, 78])
console.log(myConcatArr);

// Array.prototype.includes()
let fruits = ['orange', 'apple', 'banana', 'pear'];

console.log(fruits.includes('apple'));
console.log(fruits.includes('mango'));
console.log('orange' in fruits);
console.log('2' in fruits);

// Array.prototype.indexOf()
console.log(fruits.indexOf('banana'));
console.log(fruits.indexOf('cantaloupe'));

// Array.prototype.join()
let myArrName = ['B', 'r', 'i', 'a', 'n'];

console.log(myArrName.join(''));
console.log(myArrName.join('-'));

// Array.prototype.push()  *equivalent to list.append in python
fruits.push('peach', 'kiwi');
console.log(fruits);

// Array.prototype.pop()
const lastElement = fruits.pop();
console.log(lastElement);
console.log(fruits);

fruits.reverse();
console.log(fruits);
fruits.reverse();
console.log(fruits);

// Array.prototype.slice()
console.log('Array slice:');
console.log(fruits);
console.log(fruits.slice()) // fruits[:] in python
console.log(fruits.slice(2)) // fruits[2:] in python
console.log(fruits.slice(2,5)) // fruits[2:5] in python

// Array.prototype.splice() (start index, delete count of further indeces, add in)
console.log('Array Splice:');
console.log(fruits);
newExample.splice(2, 1, 3, 7, 8, 9);
console.log(newExample);

// Array.prototype.sort()
let unsorted = [23, 10, -10, 3, 5, -7];
console.log('SORT');
console.log(unsorted);

unsorted.sort();
console.log(unsorted);

let newUnsorted = [9, 80, 34, -4, 4, 15];

function compareFunc(a, b){
    console.log('A:', a, 'B:', b)
    if (a > b){
        return 1
    } else if (b > a){
        return -1
    } else {
        return 0
    }
}

console.log(newUnsorted);
newUnsorted.sort(compareFunc);
console.log(newUnsorted);

// to sort by number value
let anotherUnsorted = [34, 7, 2, 54, 1234, 98];

console.log(anotherUnsorted);
anotherUnsorted.sort((a,b) => a-b);
console.log(anotherUnsorted);
