let firstValue = "";
let secondValue = "";
let thirdValue = "";

sum = () => {
    firstValue = Number(document.getElementById("firstvalue").value);
    secondValue = Number(document.getElementById("secondvalue").value);
    thirdValue = firstValue + secondValue;
    document.getElementById("thirdvalue").value = thirdValue;
}
minus = () => {
    firstValue = Number(document.getElementById("firstvalue").value);
    secondValue = Number(document.getElementById("secondvalue").value);
    thirdValue = firstValue - secondValue;
    document.getElementById("thirdvalue").value = thirdValue;
}
multiply = () => {
    firstValue = Number(document.getElementById("firstvalue").value);
    secondValue = Number(document.getElementById("secondvalue").value);
    thirdValue = firstValue * secondValue;
    document.getElementById("thirdvalue").value = thirdValue;
}
devide = () => {
    firstValue = Number(document.getElementById("firstvalue").value);
    secondValue = Number(document.getElementById("secondvalue").value);
    thirdValue = firstValue / secondValue;
    document.getElementById("thirdvalue").value = thirdValue;
}
moduler = () => {
    firstValue = Number(document.getElementById("firstvalue").value);
    secondValue = Number(document.getElementById("secondvalue").value);
    thirdValue = firstValue % secondValue;
    document.getElementById("thirdvalue").value = thirdValue;
}
reset = () => {
    document.getElementById("firstvalue").value = "";
    document.getElementById("secondvalue").value = "";
    document.getElementById("thirdvalue").value = "";
    
}

