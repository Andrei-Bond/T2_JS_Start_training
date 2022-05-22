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



let firstName = prompt('First Name','')
  , lastName = prompt("Last Name", "")
  , nickName = prompt("NickName", "");

alert(firstName ?? lastName ?? nickName ?? "Anonim");



let i = prompt("Enter number", "");
i = +i;
while (i) {
  i = prompt("Enter number", "");
  i = +i;
}


let i;
do {
  i = prompt("Enter number", "");
  i = Number(i);
} while (i);
alert(i);



for (let i = prompt("Enter number", ""); i; i = prompt("Enter number", ""), i = +i){

}


let sum = 0;

while (true) {

  let value = +prompt("Введите число", '');
  if (value !== 0) {
  if (!value) break;
  }
  sum += value;
}
alert( 'Сумма: ' + sum );


let sum = 0;
let value = prompt("Введите число", '');
while (true) {
  if (value == 0) continue;
  let value = +prompt("Введите число", '');
  if (!value) break;
  sum += value;
}
alert( 'Сумма: ' + sum );

let sum = 0;
let value = prompt("Введите число", '');
first: for (;;value = prompt("Введите число", '')) {
  //if (value == "0" || value == "00" || value == "000" || value == "0000") continue;
  for (let zero = ""; value !== zero;) {
    zero = zero + "0";  
  if (value === zero) continue first;
  console.log(zero);
  if (zero === "00000000000000000000") break;
  }
  value = +value;
  if (!value) break;
  sum += value;
}
alert( 'Сумма: ' + sum );


for (let num = 1; num <= 10; ++num) {
  if(num % 2 == 1) continue;
  alert(num);
}


let i = 0;
while (i < 3) {
  alert( `number ${i}!`);
  i++;
}


for (let num = prompt("Введите число больше ста", ""); num <= 100; num = prompt("Введите число больше ста ещё раз", "") ) {
  if( num === null) break;
}


let i = 2;
first:
for (let n = prompt("Enter number",""); i <= n; i++ ) {
  for(let y = 2; y < i; y++) {
    if( i % y == 0) {
      continue first;
    }
  }
  alert(i);
    
  
}

let browser = "Opera";
if (browser === "Edge") {
  alert( "You've got the Edge!" );
} else if (browser === 'Chrome' || 'Firefox' ||'Safari' || 'Opera') {
  alert( 'Okay we support these browsers too' );
} else {
  alert( 'We hope that this page looks ok!' );
}



const number = +prompt('Введите число между 0 и 3', '');
switch(number){
  case 0:
    alert('Вы ввели число 0');
    break;
    
  case 1:
  alert('Вы ввели число 1');
  break;
  
  case 2:
  case 3:
   alert('Вы ввели число 2, а может и 3');
   break;
}



function min(a,b) {
  return (a < b) ? a : b;
}

let a = prompt("","");
let b = prompt("","");
alert(min(a,b));



let x1 = prompt("Введите число","");
let n1 = prompt("Введите степень","");

function pow(x,n){
  let proizv = x;
  
  for(let counter = 1;counter < n;++counter) {
    proizv = proizv * x;
    if (counter > n) break;
  }
 return proizv;
}
if (n1 < 1) {
  alert("Wrong");
} else {
alert(pow(x1,n1));
}
*/
console.log;