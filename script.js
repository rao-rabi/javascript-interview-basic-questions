// 1-Print only Number that it should be print only integer. 
// “ const str=["1","3",52, "Subhan"] “

let arr = ["1", "3", 59, "subhan"];
const onlyNumbers = arr.filter(Number);
console.log(onlyNumbers.toString())
console.log(arr.filter(x => typeof x === "number").toString())

// 2-Destructure an array.

let arrDest = ["Rabi", 20, "GCUF"];
let [stuName, age, University] = arrDest;
console.log(stuName, age, University);

// 3-Split an array into Pairs and if a pair is not full, it will contain the leftover items.

let arrSplit = [1, 2, 3, 4, 5, 6, 7];
function splitFunc(arr, pair) {
    let store = [];
    let len = arr.length;
    for (let i = 0; i < len; i += pair) {
        store.push(arr.slice(i, i + pair))
    }
    return store;
}
console.log(splitFunc(arrSplit, 2));

// 4-program to check if the string is palindrome or not.

let str = prompt("Enter a string to check whether it is palandrome or not");
let save = "";
for (let i = str.length - 1; i >= 0; i--) {
    save += str[i]
}
if (str == save) {
    console.log("string is palandrome");
}
else {
    console.log("string is not palandrome");
}

// 5-Data Types.

/* 1.Primitive
Null
Undefined
Boolean
Symbol
Number
String
BigInt

2.Non-Primitive
Objects */

// 6-Declaration and Reassignment of Variables.

//we decalre variables in the start of any program using datatype and reassign them witout using datatype and change their value.
let a;  //declaration
a = 5; //reassignment

// 7-Find Minimum and Maximum number value in array.

let arrMaxMin = [34, 55, 23, 35, 68];
let maxValue = arrMaxMin[0];
let minValue = arrMaxMin[0];
for (let i = 0; i <= arrMaxMin.length; i++) {
    if (maxValue < arrMaxMin[i]) {
        maxValue = arrMaxMin[i];
    }
    if (minValue > arrMaxMin[i]) {
        minValue = arrMaxMin[i];
    }
}
console.log(`Maximum value is ${maxValue} while Minimum value is ${minValue} in the array.`);

// 8-Print a String in both cases (Lowercase and Uppercase).

let strCase = "Hello! How Are You?";
console.log(strCase.toLowerCase());
console.log(strCase.toUpperCase());

// 9-What keywords should we use for declaring variables in loops.

/*let keyword is best practice while var can also be used but due to its global scope we can face problem as if we have many number of loops.*/

// 10-scope of keywords used to declare variables. (Difference between Var,let const)

/* var ---> var has globally scoped and can be redeclared and updated.
   let ---> let is block scoped and can be updated but can't redeclared.
   const ---> const is block scoped and can't be redeclared  and updated*/


// 11-Print max no in the array of 10 by reduce method....

let arrRed = [12, 23, 123, 54, 53, 67, 92, 1, 39, 62];

const reduce = arrRed.reduce((max, curr) => {
    if (max < curr) {
        return curr;
    }
    else {
        return max;
    }
},
    arrRed[0]
)
console.log(`The maximum number is: ${reduce}`);
