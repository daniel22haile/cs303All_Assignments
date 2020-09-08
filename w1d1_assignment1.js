/*------------------------------------------------------------------------------+
 * 1. Define a function maxOfThree() that takes three numbers as arguments and 
 *returns the largest of them.

 *--------------------------------------------------------------------------------*/
"use strict"

function maxOfThree(a, b, c) {
    if (a >= b && b >= c) {
        return a;
    } else if (b >= a && a >= c) {
        return b;
    } else {
        return c;
    }
}
console.log(maxOfThree(3, 5, 9));
/*--------------------------------------------------------------------------------------------
 * 2. Define a function sum() and a function multiply() that sums and multiplies (respectively)
 * all the numbers in an array of numbers. For example, sum([1,2,3,4]) should return 10, and
 * multiply([1,2,3,4]) should return 24. 
 +-----------------------------------------------------------------------------------------*/

"use strict"

function sum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}
console.log(sum([1, 2, 3, 4]));

"use strict"

function multiply(arr) {
    let sum = 1;
    for (let i = 0; i < arr.length; i++) {
        sum *= arr[i];
    }
    return sum;
}
console.log(multiply([1, 2, 3, 4]));
/*-----------------------------------------------------------------------------------------------+
 * 3. Write a function findLongestWord() that takes an array of words and returns the length of
 *the longest one. 
 +-----------------------------------------------------------------------------------------------*/

//Method one
function findLongestWord(arr) {
    let max = -infinity;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

console.log(findLongestWord(["This", "is", "Daniel"]));

//method two using forEach
function findLongestWord(array) {
    let longestWord = "";

    array.forEach(function(word) {
        if (word.length > longestWord.length) {
            longestWord = word;
        }
    });

    return longestWord;
}

let word = findLongestWord(["The", "quick", "brown", "fox", "jumped", "over", "the", "lazy", "dog"]);
console.log(word); // result is "jumped"
/*------------------------------------------------------------------------------------------------------+
 * 4. Arrays have a reverse method that changes the array by inverting the order in which its elements
 *appear. For this exercise, write two functions, reverseArray and reverseArrayInPlace. The first,
 *reverseArray, takes an array as argument and produces a new array that has the same elements in
 *the inverse order. The second, reverseArrayInPlace, does what the reverse method does: it
 *modifies the array given as argument by reversing its elements. Neither may use the standard reverse
 *method. console.log(reverseArray(["A", "B", "C"])); 
 * → ["C", "B", "A"];
 +-----------------------------------------------------------------------------------------------------*/

//4a. reverse array The first,
//reverseArray, takes an array as argument and produces a new array that has the same elements in
//the inverse order.
"use strict"

function reverseArray(arr) {
    let temp = [];
    let j = 0;
    for (let i = arr.length - 1; i >= 0; i--) {
        temp[j] = arr[i];
        j++;
    }
    return temp;
}
console.log(reverseArray(["A", "B", "C"]));


"use strict"

//4b.
/*let arrayValue = [1, 2, 3, 4, 5];
 *reverseArrayInPlace(arrayValue);
 *console.log(arrayValue);
 *→ [5, 4, 3, 2, 1]
 */
function reverseArrayInPlace(arr) {
    let temp = [];
    let j = 0;
    for (let i = arr.length - 1; i >= 0; i--) {
        temp[j] = arr[i];
        j++;
    }
    return temp;
}
let arrValue = [1, 2, 3, 4, 5];
console.log(reverseArrayInPlace(arrValue));




//part two using arrow function
//1. Is array coppied?

"use strict"
let fruits = ["Apples", "Pear", "Orange"];

// push a new value into the "copy"
let shoppingCart = fruits;
shoppingCart.push("Banana");

// what's in fruits?
console.log(fruits.length);

//Arrow function 
let fruits1 = ["Apples", "Pear", "Orange"];

let shoppingCart1 = fruits1;

shoppingCart1.push("Banana");

console.log(fruits1.length);


/* (no implementation needed, just an answer) */

// 1. No they are the same.
/* Rewrite the function using '?' or '||’ */
function checkAge(age) {
    return (age > 18) ? true : confirm('Did parents allow you?');
}
/*------------------------------------------------------------------------------*/
function checkAge(age) {
    return (age > 18) || confirm('Did parents allow you?');
}

console.log(checkAge(20));

/* Function min(a, b) */

function min(a, b) {
    let minOfThe2;
    if (a > b) {
        minOfThe2 = b;
    } else {
        minOfThe2 = a;
    }
    return minOfThe2;
    /* let minOfTheTwo = Math.min(a, b);
     return minOfTheTwo;
     */
}

function min(a, b) {
    return (a < b) ? a : b;
}

console.log(min(9, 9));

/* Function pow(x,n) */

function pow(x, n) {
    /*let powerOf = Math.pow(x, n);
    return powerOf;
    */
    let powerOf = x ** n;
    return powerOf;
}

console.log(pow(5, 3));

const prompt = require('prompt-sync')();

function pow(x, n) {
    let result = x;

    for (let i = 1; i < n; i++) {
        result *= x;
    }

    return result;
}

let x = prompt("x?", '');
let n = prompt("n?", '');

if (n < 1) {
    console.log(`Power ${n} is not supported, use a positive integer`);
} else {
    console.log(pow(x, n));
}

/*---------------------------------------------------------------------------------------------------------------+
//2. Array operations
/*
Let’s try 5 array operations.

Create an array styles with items “Jazz” and “Blues”.
Append “Rock-n-Roll” to the end.
Replace the value in the middle by “Classics”. Your code for finding the middle value should work for any arrays with odd length.
Strip off the first value of the array and show it.
Prepend Rap and Reggae to the array.

The array in the process:
Jazz, Blues
Jazz, Blues, Rock - n - Roll
Jazz, Classics, Rock - n - Roll
Classics, Rock - n - Roll
Rap, Reggae, Classics, Rock - n - Roll
+---------------------------------------------------------------------------------------------------------------*/
let styles = ["Jazz", "Blues"];
styles.push("Rock-n-Roll");
styles[Math.floor((styles.length - 1) / 2)] = "Classics";
console.log(styles.shift());
styles.unshift("Rap", "Reggae");

/*------------------------------------------------------------------------------------------------------------+
//3. calling in the array context
+-------------------------------------------------------------------------------------------------------------*/
let arr = ["a", "b"];

arr.push(function() {
    console.log(this);
})

arr[2]();



let arr1 = ["a", "b"];

arr1.push(function() {
    console.log(this);
})

arr1[2](); // a,b,function(){...}

//4. sum input numbers

//const prompt = require("prompt-sync")();

function sumInput() {
    let numbers = [];
    while (true) {
        let value = prompt("A number please?", 0);
        if (value === "" || value === null || !isFinite(value))
            break;
        numbers.push(value);
    }

    let sum = 0;
    for (let number of numbers) {
        sum += number;
    }
    return sum;
}

console.log(sumInput());
/*-------------------------------------------------------------------------------------------------------------+
The input is an array of numbers, e.g. arr = [1, -2, 3, 4, -9, 6].

The task is: find the contiguous subarray of arr with the maximal sum of items.

Write the function getMaxSubSum(arr) that will return that sum.

For instance:
+--------------------------------------------------------------------------------------------------------------*/
function getMaxSubSum(arr) {
    let maxSum = 0; // if we take no elements, zero will be returned

    for (let i = 0; i < arr.length; i++) {
        let sumFixedStart = 0;
        for (let j = i; j < arr.length; j++) {
            sumFixedStart += arr[j];
            maxSum = Math.max(maxSum, sumFixedStart);
        }
    }

    return maxSum;
}

console.log(getMaxSubSum([-1, 2, 3, -9]));
console.log(getMaxSubSum([-1, 2, 3, -9, 11]));
console.log(getMaxSubSum([-2, -1, 1, 2]));
console.log(getMaxSubSum([1, 2, 3]));
console.log(getMaxSubSum([100, -9, 2, -3, 5]));