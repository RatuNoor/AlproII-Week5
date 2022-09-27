function calculate() {
    var myForm = document.calculator;
    var num1 = eval(myForm.num1.value);
    var num2 = eval(myForm.num2.value);
    var opt = myForm.ope.value;
    if (opt == "add") {
        var z = num1 + num2;
    }else if (opt == "sub") {
        var z = num1 - num2;
    }else if (opt == "times") {
        var z = num1 * num2
    }else if (opt == "div") {
        var z = num1 / num2;
    }
       myForm.hasil.value += z;
       
    
}
function clearreset() {
    document.calculator.reset();
}