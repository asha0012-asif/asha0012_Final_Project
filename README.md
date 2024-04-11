# Asif Ashadullah | asha0012

<!-- need to add a JS heading, don't remember how -->
![JavaScript] {


    function calculateBMI(weight, height) {
        // calculate BMI and return - not 100% sure if this is the correct formula but I would just swap this with the correct formula otherwise
        return (weight / height) / 2; // answer
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
    console.log(`Your BMI says that you fall under the ${interpretation} category.`);
}

![Screenshot for Topic 3](/screenshots/Screenshot%202024-04-11%20at%2011.06.15 AM.jpg)
![Screenshot for Topic 4](/screenshots/Screenshot%202024-04-11%20at%2010.44.05 AM.jpg)
![Screenshot for Topic 5](/screenshots/Screenshot%202024-04-11%20at%2010.47.10 AM.jpg)