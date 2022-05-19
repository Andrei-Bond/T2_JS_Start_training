"use strict"
/*let num = prompt('enter number', 5);

function fac(num2){
  
  if  (num2 === 1){ 
    return num2;
  }else {
    return num2 * fac(num2 - 1);}
}

console.log(fac(num));

alert(fac(num));

let ofCallJS = prompt('Какое официальноеназвание JS', ' ');
if (ofCallJS == "ECMAScript") {
  alert('Верно!');
}  else {
  alert('Не знаете? ECMAScript');
}


let num = prompt('Enter number', '');
if (num > 0) {
  alert(1);
} else if (num < 0) {
  alert(-1);
} else if (num == 0) {
  alert(0);
} else {
  alert('Wrong entering');
}

let a = 1 , b = 1;
let result = (a + b < 4) ? 'Мало' :'Много';
console.log(result);


let login = prompt('');
let message = (login == 'Сотрудник') ? 'Привет' :
  (login == 'Директор') ? 'Здравствуйте':
  (login == '') ? 'Нет логина' : 
  '';
alert(message);


let num = prompt('enter number','');
num = Number(num);
if (num > 90 || num < 14) {
  alert("верно");
} else {
  alert('не верно');
}
let num = prompt("Enter number", "");
num = Number(num);
if (!(num >= 14 && num <= 90)) {
  alert("верно");
} else {
  alert('не верно');
}

let userPass;
let userName = prompt("Ваше имя", "");
if (userName === null) {
  alert("Отменено");
} else if(userName != "Админ") {
  alert("Я вас не знаю");
} else {
  userPass = prompt("Введите пароль", "");
}

if (userPass === null) {
  alert("Отменено");
} else if( userPass != "Я главный") {
  alert("Неверный пароль");
} else {
  alert("Здравствуйте!");
}

*/

let firstName = prompt('First Name','')
  , lastName = prompt("Last Name", "")
  , nickName = prompt("NickName", "");

alert(firstName ?? lastName ?? nickName ?? "Anonim");


