var plus = document.getElementById('plus');
var minus = document.getElementById('minus');
var devide = document.getElementById('devide');
var multiply = document.getElementById('multiply');

var i1 = document.getElementById('input1');
var i2 = document.getElementById('input2');



function makeOperation(operationCode) {

    var number1 = Number(i1.value);
    var number2 = Number(i2.value);

    if (operationCode === '+') {
        var result = number1 + number2;
    }
    else if (operationCode === '-') {
        var result = number1 - number2;
    }

    else if (operationCode === '*') {
        var result = number1 * number2;
    }

    else if (operationCode === ':') {
        var result = number1 / number2;
    }

    window.alert(result);
}


function onOperationButtonClick(eventObject) {
    var clickedElement = eventObject.currentTarget;
    var operation = clickedElement.innerHTML;
    makeOperation(operation);
}

var arrayOfButtons = [plus, minus, devide, multiply];


for (var i = 0; i < arrayOfButtons.length; i++) {
    var button = arrayOfButtons[i];
    button.addEventListener('click', onOperationButtonClick);
}

var arrayOfNumbers = [13, 24, 45, 99];
var arrayOfStrings = ['Alex', 'Susan', 'Hector', 'David'];
