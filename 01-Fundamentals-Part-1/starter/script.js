// Values & Variables

const country = 'UK';
const continent = 'Europe';
const population = 65000000;

console.log(country + continent + population);

// Data Types

const isIsland = false;

// Operator Precedence

let x;
let y;

x = y = 25 - 10 - 5;

console.log(x, y);

// Coding Challenge

const markHeight = 1.88;
const markWeight = 90;
const johnHeight = 1.76;
const johnWeight = 100;

const markBMI = markWeight / markHeight ** 2;
const johnBMI = johnWeight / johnHeight ** 2;

const markHigherBMI = markBMI > johnBMI;

console.log(markHigherBMI);

// Template Literals

const firstName = 'Dan';
const age = 28;
const job = 'Software Engineer';
const year = 2021;

const aboutMe = `Hello, my name is ${firstName} and I am ${age}. I am currently training
to become a ${job} by the end of ${year}!`;

console.log(aboutMe);

// Drivers License Challenge

const ageChecker = driverAge => {
  if (driverAge < 18) {
    const yearsLeft = 18 - driverAge;
    return `Sorry, you cannot drive yet. You have to wait another ${yearsLeft} years.`;
  }
  return 'You can drive! :)';
};

// Coding Challenge 2

if (markBMI > johnBMI) {
  console.log(
    `Mark's BMI (${markBMI}) is higher than John's BMI (${johnBMI}).`
  );
} else {
  console.log(
    `Johns's BMI (${johnBMI}) is higher than Mark's BMI (${markBMI}).`
  );
}

// Type conversion on a string

const inputYear = '1992';
const inputYearAsNum = Number(inputYear);
console.log(inputYear, inputYearAsNum);

const numAsNum = 1;
const numAsString = String(numAsNum);
console.log(numAsNum, numAsString);

// 5 falsy numbers in JS are: 0, '', undefined, null, NaN

const money = 0;
if (money) {
  console.log('This is a truthy value!');
} else {
  console.log('This is a falsy value!');
}

// === does not use type coercion, == does.

const favourite = prompt('What is your favourite number?');

if (favourite == 23) {
  console.log('The input was type coerced.');
} else if (favourite === '23') {
  console.log('The input is strict.');
} else {
  console.log('Nothing to see here.');
}
