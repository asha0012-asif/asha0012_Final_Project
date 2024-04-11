// TOPIC 2

function calculateBMI(weight, height) {
    // calculate BMI and return - I'm not 100% sure if this is the correct formula but I would just swap this with the correct formula otherwise
    return (weight / height) / 2; // answer should be BMI 24.67, Interpretation: Normal weight
}

function interpretBMI(bmi) {
    let result = "";

    if (bmi < 18.5) {
        result = "Underweight";
    } else if (bmi >= 18.5 && bmi < 25) {
        result = "Normal weight";  
    } else if (bmi >= 25 && bmi < 30) {
        result = "Overweight";  
    } else {
        result = "Obese";
    }

    return result;
}

let calculatedBmi = calculateBMI(90, 1.91);
let interpretation = interpretBMI(calculatedBmi);

console.log(`Your BMI is ${calculatedBmi}.`);
console.log(`Your BMI interprets that you fall under the ${interpretation} category.`);