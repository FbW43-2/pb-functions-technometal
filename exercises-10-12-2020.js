// 1. Multiply
/*Create a function that multiples a number by another number.
Rework the syntax of the function declaration so that is uses the arrow function shorthand  (browse the internet for what an arrow function is).
Write a function that accepts two numbers and validate that they are numbers.*/

/*
function Multiply(num1, num2) {
    console.log(num1 * num2);
}

Multiply(5,6);
*/

let Multiply = (num1, num2) => num1 * num2;
console.log(Multiply(6, 8));// =>48


function Validate (x, y) {
    if (typeof (x && y) === "number") {
        return true
    } else {
        return false
    }   
}

console.log(Validate(5, 90));// =>true


/*
function Validate (x, y) {
    if (typeof (x && y) === "number") {
        console.log("true");
    } else {
        console.log("false");
    }   
}


Validate(5, "b");
*/



// 2. Exponent
/*Create a function named exponent that takes two numbers as parameters. The second parameter defines how many times the first number should be multiplied by itself. 
Save the output in a variable named result.
Then, try to access the variable result outside of the exponent function. Is this possible? Why/Why not? Comment your answer in the index.js file.*/

function Exponent (base, exponential) {
    let result = Math.pow(base, exponential);
    console.log(result);
}

Exponent(2, 5);// =>32


/*// OTRO EJEMPLO

let base = 3;
let exponent = 4;
let result = 1;// numero para facilitar la operacion

for (let i = 0; i < exponent; i++) {

    result *= base;
}
    console.log(result);
*/ 



// 3. Add Up. Create a function that takes an integer as an argument. Add up all the integers from 1 to the integer you passed to the function. 
/*For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.
Examples:
sumIntFrom1ToN(4) ➞ 10
sumIntFrom1ToN(13) ➞ 91
sumIntFrom1ToN(600) ➞ 180300*/

function sumIntFrom1ToN(int) {
        let result = 0;
    for(let index = 1; index <= int; index++){
        
        result += index;
    }
    console.log(result);
}

sumIntFrom1ToN(7);// =>28



// 4. Cubed. Create a function that takes in three numbers and returns the sum of its cubes.
/*
Examples:
sumOfCubes(1, 5, 9) ➞ 855 // Since 1^3 + 5^3 + 9^3 = 1 + 125 + 729 = 855
sumOfCubes(2) ➞ 8
sumOfCubes() ➞ 0
*/



/*INCORRECTO
function sum_Of_Cubes(n, n2, n3) {
  let sumn = 0;

  for (let i = 1; i<=3; i++) {
    sumn += i ** 3;
  }
  return sumn;
}

console.log(sum_Of_Cubes(1, 5, 9));
*///INCORRECTO


/*INCORRECTO
function sum_Of_Cubes(n1, n2, n3) {
    let result1 = 0;

    if (n1 + n2 + n3) === n1 {
        result1 = n1 * n1 * n1;
    }
        return result1;
}

function sum_Of_Cubes(n1, n2, n3) {
    let result2 = 0;

    if (n1 + n2 + n3) === (n1 + n2) {
        result2 = result1 + (n2 * n2 * n2);
    }
        return result2;
        
}

function sum_Of_Cubes(n1, n2, n3) {
    let result3 = 0;

    if (n1 + n2 + n3) === (n1 + n2 + n3) {
        result3 = result2 (n3 * n3 * n3);
    }
        return result3;
        
}

console.log(sum_Of_Cubes(1,5,9));
*///INCORRECTO


/*INCORRECTO
function sum_Of_Cubes(n1, n2, n3) {
    let result1 = 0;
    let result2 = 0;
    let result3 = 0;

    if ((n1 + n2 + n3) === n1) {
        result1 = n1 * n1 * n1;
    }
        return result1;

    else if ((n1 + n2 + n3) === (n1 + n2)) {
        result2 = result1 + (n2 * n2 * n2);
    }
        return result2;
        
    else if ((n1 + n2 + n3) === (n1 + n2 + n3)) {
        result3 = result2 (n3 * n3 * n3);
    }
        return result3;
}

console.log(sum_Of_Cubes(1,5,9));
*///INCORRECTO



/*INCORRECTO
function sum_Of_Cubes(n1,n2,n3) {
    let result = (n1 ** 3) + (n2 ** 3) (n3 ** 3);
        return result;
}

console.log(sum_Of_Cubes(1,5,9));
*///INCORRECTO


//CORRECTO
function sum_Of_Cubes(n1,n2,n3) {
   if ((n1 + n2 + n3) === n1) {
    console.log(Math.pow(n1, 3));
 } else if ((n1 + n2 + n3) === (n1 + n2)) {
    console.log(Math.pow(n1, 3) + Math.pow(n2,3));
 } else if ((n1 + n2 + n3) === (n1 + n2 + n3)) {
     console.log(Math.pow(n1, 3) + Math.pow(n2, 3) + Math.pow(n3, 3));
 } else {
     console.log("It doesn't work");
    }
}

sum_Of_Cubes(5, 0, 1);// =>126
//CORRECTO




/*// IDEAS MIAS
function GetCube(num1) {
    let result = 1;// SE ASIGNA 1 PORQUE NO ALTERA EL RESULTADO, EN ESTE CASO ES EL CUBO DE 1
    for (let i = 0; i < 3; i++) {
        result *= num1;
    }
    return result;
}

function SumCubes(...values) {// ... => INDICA UNA CANTIDAD ILIMITADA DE PARAMETROS
    let result = 0;
    for (let i = 0; i < values.length; i++) {
        result++;
    }
    return result;
}
console.log(SumCubes(3, 5, 6));
*/


/*INCORRECTO
function sum_Of_Cubes(n) {
   if (sum_Of_Cubes([0]) > 0) {
    console.log(Math.pow(sum_Of_Cubes([0]), 3));
 } 
 
 else if (sum_Of_Cubes([0],[1]) > 0) {
    console.log(Math.pow(sum_Of_Cubes([0]), 3) + Math.pow(sum_Of_Cubes([1]), 3));
 } 
 
 else if (sum_Of_Cubes([0],[1],[2]) > 0) {
     console.log(Math.pow(sum_Of_Cubes([0]), 3) + Math.pow(sum_Of_Cubes([1]), 3) + Math.pow(sum_Of_Cubes([2]), 3));
 } 
 
 else {
     console.log("It doesn't work");
    }
}


sum_Of_Cubes(5);
*///INCORRECTO

    
/*INCORRECTO
function sum_Of_Cubes(n) {
   if (n === n1) {
    console.log(Math.pow(n, 3));
 } else if (n = n1 + n2) {
    console.log(Math.pow(n1, 3) + Math.pow(n2,3));
 } else if ((n = n1 + n2 + n3)) {
     console.log(Math.pow(n1, 3) + Math.pow(n2, 3) + Math.pow(n3, 3));
 } else {
     console.log("It doesn't work");
    }
}

sum_Of_Cubes(5,9);
*///INCORRECTO



// 5. String Check. Create a function that takes a string and a word, and then returns true or false depending on whether the word starts with the initial string.
/*
Examples:
isStrStartOfWord("bu", "button") ➞ true
isStrStartOfWord("tri", "triplet") ➞ true
isStrStartOfWord("beau", "pastry") ➞ false
*/


/*function StringCheck(string, word) {//INCORRECTO
    if((word[0]) === string) {
        return true;
    } else {
        return false;
    }
}*/

/*function StringCheck(string, word) {//INCORRECTO
    
    for(let i = 0; i < word.length; i++)
    if((word.includes(string, 0)) === string) {
        return true;
    } else {
        return false;
    }
}*/

/*function StringCheck(string, word) {//INCORRECTO
    
    if (word.includes(string, 0)) {
        return true;
    } else {
        return false;
    }
}

console.log(StringCheck("r", "Enrique"));*/// => false



function StringCheck(string, word) {//CORRECTO

    if (word.substring(0, string.length) === string) {
        return true;
    } else {
        return false;
    }
}


console.log(StringCheck("Enriq", "Enrique"));// =>true



// 6. Less Than or Equal to Zero? Create a function that takes a number as its only argument and returns true if it's less than or equal to zero, otherwise return false.
/*
Examples:
isLEQZero(3) ➞ false
isLEQZero(0) ➞ true
isLEQZero(-4) ➞ true
isLEQZero(10) ➞ false
*/

function isLEQZero(numx) {
    if(numx <= 0) {
        return true;
    } else {
        return false;
    }
}
console.log(isLEQZero(0.5));// =>false




// 7. Count Occurrences. Create a function that accepts two arguments: a string and a letter. The function should count the number of occurrences of that letter in the string.
/*
Example:
countOccurrences("this is a string", "i") ➞ 3
*/


function countOccurrences(stringx, letter) {
    var result = 0;
    for(let i = 0; i < stringx.length; i++) {
        if (stringx[i] === letter) {
            result++;}// EL SIMBOLO ++ INDICA SUMA DE 1 (en este caso i & result)
    } 
    return result;
}   

console.log(countOccurrences("this is a string", "i"));// =>3











