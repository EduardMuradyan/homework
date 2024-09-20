//exercise 1
let ageInMonths = 8;

if (ageInMonths < 1) {
    console.log("Age must be at least 1 month.");
} else if (ageInMonths >= 1 && ageInMonths <= 12) {
    console.log("Baby");
} else if (ageInMonths >= 13 && ageInMonths <= 24) {
    console.log("Toddler");
} else if (ageInMonths >= 36 && ageInMonths <= 144) {
    console.log("Child");
} else if (ageInMonths >= 156 && ageInMonths <= 204) {
    console.log("Teenager");
} else if (ageInMonths >= 216) {
    console.log("Adult");
} else {
    console.log("Age is not in a valid category.")
}

//exercise3

let num1 = -14;  
let num2 = 5;
let num3 = 0;

let negativeCount = 0;
if (num1 < 0) negativeCount++;
if (num2 < 0) negativeCount++;
if (num3 < 0) negativeCount++;

if (negativeCount === 0) {
    console.log("Negative");
} else if (negativeCount === 1 || negativeCount === 3) {
    console.log("Unsigned");
} else {
    console.log("Positive");
}


//exercise 4

let number = 123; 
let numberStr = number.toString();
for (let i = 0; i < numberStr.length; i++) {
    console.log(numberStr[i]);
}
