// 1. Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.
const ages = [3, 9, 23, 64, 2, 8, 28, 93]
    //1a. Programmatically subtract the value of the first element in the array from the value in the last element of the array 
    let firstAge = ages[0];
    let lastAge = ages[ages.length - 1]; //length of array, amount of times to shift to left.
    let ageDifference = (lastAge - firstAge);
    console.log(ageDifference); // logs 90
        //1b. Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths).
        ages.push(133);
        let newLastAge = ages[ages.length - 1];
        let newAgeDifference = (newLastAge - firstAge);
        console.log(newAgeDifference); // logs 130
            //1c. Use a loop to iterate through the array and calculate the average age SUM/LENGTH
            function sumAges(ages) {
                let sum = 0
                ages.forEach(item => {
                    sum += item;
                });
                console.log(sum);
                return sum
            }
            sumAges([3, 9, 23, 64, 2, 8, 28, 93]); // logs 230
            console.log(sumAges([3, 9, 23, 64, 2, 8, 28, 93]) / ages.length); // logs 25.555555555555557 as the average age.




//2. Create an array called names that contains the following values: ‘Sam’, ‘Tommy’, ‘Tim’, ‘Sally’, ‘Buck’, ‘Bob’.
const names = ["Sam", "Tommy", "Tim", "Sally", "Buck", "Bob"];
    //2a. Use a loop to iterate through the array and calculate the average number of letters per name. 
    for (let i = 0; i < names.length; i++) {
        console.log(names[i]);
    }
    let length = ["Sam", "Tommy", "Tim", "Sally", "Buck", "Bob"].map(item => item.length); // .map converts the strings into number values.
    console.log(length);
    function sumNames(length) {
        let sum = 0
        length.forEach(item => {
            sum  += item;
        });
        console.log(sum);
        return sum
    }
console.log(sumNames([3, 5, 3, 5, 4, 3]) / names.length); // logs 3.8333333333333335 average of letters per name
        //2b.	Use a loop to iterate through the array again and concatenate all the names together, separated by spaces
        for (let i = 0; i < names.length; i++) {
            console.log(names[i]);
        }
        console.log(names.join(' '));



//3. How do you access the last element of any array?
//console.log(myArray[myArray.length - 1]); // we access it through the length property which has one more value than the highest array index.

//4. How do you access the first element of any array?
//console.log(myArray[0]); // Arrays are zero-based so the [0] is the first index.
            
//5. Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.
const nameLengths = [];
for (let i=0; i<names.length; i++) {
    nameLengths.push(names[i].length);
}
console.log(nameLengths); //logs [3, 5, 3, 5, 4, 3]

//6. Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array. 
const newNameLengths = [3, 5, 3, 5, 4, 3]
let sum = 0 // start the variable with sum = 0

for (let i = 0; i < newNameLengths.length; i++) { //for loop iterates over each element of newNameLengths array constantly adding to the sum
    sum += newNameLengths[i];
}

console.log(sum); // logs 23

//7. Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. (i.e. if I pass in ‘Hello’ and 3, I would expect the function to return ‘HelloHelloHello’
function concatenateWord(word, n) {
    let concatenateWord = "";

    for (let i = 0; i < n; i++) {
        concatenateWord += word;
    }

    return concatenateWord;
}
console.log(concatenateWord("Hello", 3)) // logs HelloHelloHello

//8. Write a function that takes two parameters, firstName and lastName, and returns a full name.  The full name should be the first and the last name separated by a space.
function fullName(firstName, lastName) {
    return firstName + " " + lastName;
}

console.log(fullName("John", "Doe"));

//9. Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.
function sumGreaterThan100(arr) {
    const total = arr.reduce((acc, curr) => acc + curr, 0); // we are reducing the array we input.
    return total > 100; // return if our total is less than 100
}

let numbers = [10, 20, 30, 50];
if (sumGreaterThan100(numbers)) { // if the function is greater than 100, true
    console.log(true);
} else { // if anything else? false
    console.log(false);
}

//10. Write a function that takes an array of numbers and returns the average of all the elements in the array.
 function average(arr) {
    let sum = arr.reduce((acc, curr) => acc + curr, 0 ); //the .reduce() method reduces the array of numbers into a single value. the accumalate argument accumalates values as the method iterates over each element in the array. the curr argument is the first element ion the array, the result of adding the acc element to the current element will result into a new current element.
    return sum / arr.length; // we are taking the sum we got from the above line and then dividing it by the amount of elements we have in our array. in this case we are pretty much saying 110 / 4
 }

 numbers = [10, 20, 30, 50]; // this is the array we are declaring
 const avg = average(numbers); // we are telling it to use our function of grabbing an average of something and using it to get the average of our numbers array.

 console.log(`The average of the numbers in the array is ${avg}.`); // logs 27.5

 //11. Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.
 
function compareAverages(arr1, arr2) {
    let avg1 = arr1.reduce((acc, curr) => acc + curr, 0); //gets the average of the first array
    let avg2 = arr2.reduce((acc, curr) => acc + curr, 0); //gets the average of the second array
    return avg1 > avg2; //return to see if avg1 is greater than avg2
}

let arr1 = [5, 40, 20];
let arr2 = [10, 15, 20];
console.log(compareAverages(arr1, arr2)); //parks our declared arrays in their parking spots and uses the function on them.

//12. Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.

function willBuyDrink(isHotOutside, moneyInPocket) { 
    return ((isHotOutside) && (moneyInPocket > 10.50)) //this is saying that isHotOutside AND moneyInPocket both have to be true AND greater than 10.50 in order to retun true. if the inputs dont meet the perameters than this will return false.
}

isHotOutside = true
moneyInPocket = 11.00
console.log(willBuyDrink(isHotOutside, moneyInPocket));

//13. Create a function of your own that solves a problem.   In comments, write what the function does and why you created it.
function sumAllAverages(arr1, arr2, arr3, arr4) { //this function is going to take four arguments and add them all up.
    let avg1 = arr1.reduce((acc, curr) => acc + curr, 0); //make a function for all four arguments
    let avg2 = arr2.reduce((acc, curr) => acc + curr, 0);
    let avg3 = arr3.reduce((acc, curr) => acc + curr, 0);
    let avg4 = arr4.reduce((acc, curr) => acc + curr, 0);
    return avg1 + avg2 + avg3 + avg4; //return the addition of all the functions
}

arr1 = [2, 4, 6];
arr2 = [5, 10, 15];
let arr3 = [10, 20, 30];
let arr4 = [20, 40, 60];

console.log(sumAllAverages(arr1, arr2, arr3, arr4)); //logs the sum of all the functions this one ends in 222









