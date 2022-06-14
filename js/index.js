var plus = document.getElementById('plus');
var minus = document.getElementById('minus');
var devide = document.getElementById('devide');
var multiply = document.getElementById('multiply');

var i1 = document.getElementById('input1');
var i2 = document.getElementById('input2');

function getNumber1() {
    return Number(i1.value);
}

function getNumber2() {
    return Number(i2.value);
}

function makeOperation (operationCode) {
    if (operationCode === '+') {
        var result = getNumber1() + getNumber2();
    }
    else if (operationCode === '-') {
        var result = getNumber1() - getNumber2();
    }

    else if (operationCode === '*') {
        var result = getNumber1() * getNumber2();
    }

    else if (operationCode === '/') {
        var result = getNumber1() / getNumber2();
    }

    window.alert(result);
}

function onButtonPlusClick() {
    makeOperation('+');
}

function onButtonMinusClick() {
    makeOperation('-');
}

function onButtonDevideClick() {
    makeOperation('/');
}

function onButtonMultiplyClick() {
    makeOperation('*');
}

plus.addEventListener('click', onButtonPlusClick);
minus.addEventListener('click', onButtonMinusClick);
devide.addEventListener('click', onButtonDevideClick);
multiply.addEventListener('click', onButtonMultiplyClick);