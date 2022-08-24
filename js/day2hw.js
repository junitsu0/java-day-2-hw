console.log("It's Homework Time!")

/*
    Exercise 1: Write a function called toCelcius that takes in a number representing 
    temperature in fahrenheit and converts the number into Celcius.

    Ex 1. toCelcius(32) // 0
    Ex 2. toCelcius(212) // 100
    Ex 3. toCelcius(50) // 10
*/

// C(9/5) + 32 = F

function toCelcius(fahrenheit){
    return (fahrenheit - 32) * 5/9;
}

console.log(toCelcius(32))
console.log(toCelcius(212))
console.log(toCelcius(50))


/*
    Exercise 2: Create a class for a User that sets username and password property
    on creation. Add a method to change the user's password. The method should take in 
    the old password and new password. If the old password is wrong do not reset the password.
    Create an instance of the new user and then change their password using the method.
*/

class User {
    constructor(name, password) {
        this.name = name;
        this.password = password;
    }
    welcomeUser() {
        return `Hi, my name is ${this.name}. So what I wanna do is make my password "${this.password}."`
    }

    passwordCheck(password) {
        return this.password === password
    }

    passwordChange(password, newpassword) {
        if (this.password === password) {
            password = newpassword;
            return `Your new password of "${password} is totally more secure. Grats nerd."`
        } else {
            return "-1000 Who's Line? points for you."
        }
    }

}

let brian = new User("Brian Stanton", "Coolx2");
console.log(brian.welcomeUser());
console.log(brian.passwordCheck('Coolx2'));
console.log(brian.passwordChange('Coolx2', 'Coolx4'));


/*
    Exercise 3: Write a function that takes in an array of integers and returns
    an array of the negative integers squared using Array methods

    Ex 1. squareNegatives([-10, -3, 4, -2, 8, 9, -3]) // [100, 9, 4, 9]
    Ex 2. squareNegatives([-5, -4, -3, -2, -1, 1, 2, 3, 4, 5]) // [25, 16, 9, 4, 1]
    Ex 3. squareNegatives([2, 4, 6, 8, 10]) // []
*/

let squareNegatory = [-10, -3, 4, -2, 8, 9, -3]
let squareNegatory2 = [-5, -4, -3, -2, -1, 1, 2, 3, 4, 5]
let squareNegatory3 = [2, 4, 6, 8, 10]

let sqNegArray = []
squareNegatory.filter(e => e < 0).forEach(e => sqNegArray.push(e**2))
console.log(sqNegArray)

let sqNegArray2 = []
squareNegatory2.filter(e => e < 0).forEach(e => sqNegArray2.push(e**2))
console.log(sqNegArray2)

let sqNegArray3 = []
squareNegatory3.filter(e => e < 0).forEach(e => sqNegArray3.push(e**2))
console.log(sqNegArray3)

let squareNegatives = arr => {
    let squaredArray = [];
    for(let num of arr){
        if (num < 0){
            squaredArray.push(num ** 2)
        };
    };
    return squaredArray;
};

console.log(squareNegatives([-10, -3, 4, -2, 8, 9, -3]));
console.log(squareNegatives([-5, -4, -3, -2, -1, 1, 2, 3, 4, 5]));
console.log(squareNegatives([2, 4, 6, 8, 10]));
