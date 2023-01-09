document.getElementById("submit").addEventListener("click", bmiCalculator);
function bmiCalculator(){
    var height = parseInt(document.getElementById("height").value);
    var weight = parseFloat(document.getElementById("weight").value);

    var bmi;
    var newHeight = parseFloat(height/100)
    
    bmi = weight / (newHeight * newHeight);
    bmi = bmi.toFixed(1);
    console.log(bmi);

    document.getElementById("result").innerHTML = "Result: " + bmi;
}