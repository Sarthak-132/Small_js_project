let counterValues = 0;

function onIncrese() {
    counterValues++;
    document.getElementById("counterValue").innerHTML = counterValues;
}
function onDecrese() {
    counterValues--;
    document.getElementById("counterValue").innerHTML = counterValues;
}
function onReset() {
    counterValues = 0;
    document.getElementById("counterValue").innerHTML = counterValues;
}