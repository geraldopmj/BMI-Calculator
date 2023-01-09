document.getElementById("submit").addEventListener("click", bmiCalculator); // listen to click from button submit and activate funcion bmiCalculator
function bmiCalculator(){
    var height = parseInt(document.getElementById("height").value); //get the height value from field
    var weight = parseFloat(document.getElementById("weight").value); //get the weight value from field

    var bmi; 
    var newHeight = parseFloat(height/100) //parses a value as a string and returns the first number.
    
    bmi = weight / (newHeight * newHeight); //calculate the BMI
    bmi = bmi.toFixed(1); //method rounds the string to a specified number of decimals specified inside parenthesis.
    console.log(bmi); 

    document.getElementById("result").innerHTML = "Result: " + bmi; //sets the HTML markup contained within the element(result). 
}