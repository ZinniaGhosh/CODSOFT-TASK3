function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculate() {
    var display = document.getElementById('display');
    try {
        display.value = eval(display.value); // Using eval for simplicity; consider using safer alternatives for production
    } catch (error) {
        display.value = 'Error';
    }
}
