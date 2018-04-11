

function fun1() {
    var chbox;
    chbox=document.getElementById('fistCheck');
    if (chbox.checked) {
        alert('Выбран');
    }
    else {
        alert ('Не выбран');
    }
}

function fun2() {
    var radi = document.getElementsByName('r1');
    for (var i = 0; i < radi.length; i++) {
        if (radi[i].checked) {
            alert ('Выбран ' +i+ ' элемент');
        }
    }
}
document.write("</br>Hello, World !");
document.write("</br>Hello, World !");
var number = 21;
var string;
string = "Hello World";
var floatNumber = 1.23;
var isTrue;
isTrue = "true";
document.write("Variable number = " + number + "<br />" + string + floatNumber + "<br />" + isTrue);
var x = 5;
var y;
var result;
y = 5;
result = x+y;
document.write(result);
result = result + x;
document.write("<br/>"+result);