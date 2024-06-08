let display = document.getElementById('display');

function appendToDisplay(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = '';
}

function deleteLastChar() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    try {
        const expression = display.value
            .replace(/×/g, '*')
            .replace(/÷/g, '/');
        
        const result = new Function('return ' + expression)();
        display.value = result;
    } catch (error) {
        display.value = 'Error';
    }
}

// Prevent invalid inputs
display.addEventListener('input', function(e) {
    let value = e.target.value;
    e.target.value = value.replace(/[^0-9+\-*/.()]/g, '');
});