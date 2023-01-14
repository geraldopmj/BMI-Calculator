document.getElementById("submit").addEventListener("click", bmiCalculator); // listen to click from button submit and activate function bmiCalculator.
function bmiCalculator(){
    var height = parseInt(document.getElementById("height").value); //get the height value from field
    var weight = parseFloat(document.getElementById("weight").value); //get the weight value from field 
    var newHeight = parseFloat(height/100) //parses a value as a string and returns the first number.
    var bmi = weight / (newHeight * newHeight); //calculate the BMI
    bmi = bmi.toFixed(1); //method rounds the string to a specified number of decimals specified inside parenthesis.
    
    //Condition to change the result color based on values!
    if (bmi <= 18.5) {document.getElementById("result").style.color = 'blue';
    } else if (bmi > 18.5 && bmi <= 24.9) {document.getElementById("result").style.color = 'green';
    } else if (bmi >= 24.9 && bmi <= 29.9) {document.getElementById("result").style.color = 'yellow';
    } else if (bmi >= 29.9 && bmi <= 40) {document.getElementById("result").style.color = 'orange';
    } else    {document.getElementById("result").style.color = 'red';}
        
    document.getElementById("result").innerHTML = "BMI: " + bmi; //sets the HTML markup contained within the element(result). 
}