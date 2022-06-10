var plus = document.getElementById('plus');
var minus = document.getElementById('minus');
var devide = document.getElementById('devide');
var multiply = document.getElementById('multiply');


function onButtonPlusClick() {
    console.log('onButtonPlusClick');
    var i1 = document.getElementById('1');
    var i2 = document.getElementById('2');

    var number1 = Number(i1.value);
    var number2 = Number(i2.value);

    var result = number1 + number2;
    window.alert(result);

}

function onButtonMinusClick() {
    console.log('onButtonMinusClick');
    console.log('onButtonPlusClick');
    var i1 = document.getElementById('1');
    var i2 = document.getElementById('2');

    var number1 = Number(i1.value);
    var number2 = Number(i2.value);

    var result = number1 - number2;
    window.alert(result);
}

function onButtonDevideClick() {
    console.log('onButtonDevideClick');
    console.log('onButtonPlusClick');
    var i1 = document.getElementById('1');
    var i2 = document.getElementById('2');

    var number1 = Number(i1.value);
    var number2 = Number(i2.value);

    var result = number1 / number2;
    window.alert(result);
}

function onButtonMultiplyClick() {
    console.log('onButtonMultiplyClick');
    console.log('onButtonPlusClick');
    var i1 = document.getElementById('1');
    var i2 = document.getElementById('2');

    var number1 = Number(i1.value);
    var number2 = Number(i2.value);

    var result = number1 * number2;
    window.alert(result);
}

plus.addEventListener('click', onButtonPlusClick);
minus.addEventListener('click', onButtonMinusClick);
devide.addEventListener('click', onButtonDevideClick);
multiply.addEventListener('click', onButtonMultiplyClick);