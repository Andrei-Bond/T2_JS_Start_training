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


function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}
ask(
  "Вы согласны?",
  function() { alert("Вы согласились."); },
  function() { alert("Вы отменили выполнение."); }
);


let ask = (question, yes, no) => {
  if (confirm(question)) yes()
  else no();
}

ask("Вы согланы?", () => alert("Вы согласились."), () => alert("Вы отменили выполнение.") );


function pow(x, n) {
  let result = 1;

  for (let i = 0; i < n; i++) {
    result *= x;
  }

  return result;
}

mocha.run(); //запускаем тесты!



let user = {};
user.name = "John";
user.surname = "Smith";
delete user.name;

alert(user.surname);


function isEmpty(x) {
  for (let key in x) {
      return false;
    }
      return true;
    
}
let schedule = {};

alert( isEmpty(schedule) ); // true

schedule["8:30"] = "get up";

alert( isEmpty(schedule) ); // false



let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130 
}
let sum = 0;
function calcSum(obj) {
  for (let key in obj) {
    sum = sum + salaries[key];
    }
  return sum;
}
calcSum(salaries);
alert(sum);


let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};


function multiplyNumeric(menu) {
  for (let key in menu) {
  if (isNaN(menu[key])) {
    continue;
  } else {
    menu[key] *= 2;
  }
  }}


multiplyNumeric(menu);

for (let key in menu) {
alert(menu[key]);
}


let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};
let clone = {};

for(let key in menu) {
  clone[key] = menu[key];
}
for (let key in clone) {
  alert(clone[key]);
}





// Функция глубокого клонирования объекта


let user = {
  name: "Иван",
  sizes: {
    height: 182,
    width: 50,
    visual: {
      w:74,
      h:76,
    }
  }
}

let clone = {};
function deepCopyObj(objFrom, objIn) {
  let key;
  for( key in objFrom) {
    if (typeof(objFrom[key]) == "object") {
      objIn[key] = {};
      deepCopyObj(objFrom[key], objIn[key])
    } else {
      objIn[key] = objFrom[key];
    }
  }
} 

deepCopyObj(user, clone);

alert( clone["name"]);

alert(user.name);

alert( user['sizes'] == clone['sizes']);

alert(clone.sizes.height);

alert(clone.sizes.visual.h);




let user = {
  name: "Джон",
  hi() { alert(this.name); },
  bye() { alert("Пока"); }
};

//user.hi(); // Джон (простой вызов метода работает хорошо)

// теперь давайте попробуем вызывать user.hi или user.bye
// в зависимости от имени пользователя user.name
(user.name == "Джон" ? user.hi() : user.bye()); // Ошибка!



let user = {
  firstName: "Илья",
  sayHi() {
    let arrow = () => alert(this.firstName);
    arrow();
  }
};

user.sayHi(); // Илья





let user = {
  name: "Джон",
  ref() { return this; },
};

alert( user.ref().name );







let calculator = {
  read() {
    calculator.num1 = prompt('Введите первое число','');
    calculator.num2 = prompt('Введите  второе число','');
  },
  sum() {
    return (+this.num1 + +this.num2);
  },
  mul() {
    return (this.num1 * this.num2);
  },
};

calculator.read();
alert(calculator.sum());
alert(calculator.mul());






let ladder = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showStep: function() { // показывает текущую ступеньку
    alert(this.step);
  }
};

ladder.up().up().down().showStep(); // 1


*
function SmallUser() {

  this.name = "Вася";

  return; // <-- возвращает this
}

alert( new SmallUser().name );  // Вася




function User(name) {
  // this = {};  (неявно)

  // добавляет свойства к this
  this.name = name;
  this.isAdmin = false;

  // return this;  (неявно)
}
let user = new User("Vasya");
alert(user.name);



let obj = {
  name: null,
};

function A() {
  return obj;
}
function B() {
  return obj;
}
let a = new A;
let b = new B;
alert( a == b );




function Calculator() {
  this.read = function() {
    this.num1 = prompt("Введите первое число","");
    this.num2 = prompt("Введите второе число","");
  };
  this.sum = function() {return (+this.num1 + +this.num2)};
  this.mul = function() {return (this.num1 * this.num2)};
}

let calculator = new Calculator();
calculator.read();

alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() );



function Accumulator(startingValue) {
  this.value = startingValue;
  this.read = function() {
    this.value += +prompt("Number", 0);
  }
}

let accumulator = new Accumulator(1); // начальное значение 1

accumulator.read(); // прибавит ввод prompt к текущему значению
accumulator.read(); // прибавит ввод prompt к текущему значению

alert(accumulator.value); // выведет сумму этих значений



let user = {
  address: {
    street: 1,
  },
}; // пользователь без свойства "address"

alert(user.address.street);



let sym = Symbol("Someone symbol");

let obj = {
  name: 'Vasya',
  year: 1990,
  [sym]: "stuff",
  toString() {
    return `name: ${this.name}`;
  },
  valueOf () {
    return this.year;
  },
}

//console.log(obj[sym]);

//sym = Symbol("Someone symbol");
//console.log(obj);
//console.log(Reflect.ownKeys(obj));
//console.log(Object.getOwnPropertySymbols(obj));
//console.log(obj[sym]);

alert(+obj);





let str ="Привет";
str.test = 5;
alert(str.test);




alert(parseFloat(prompt("Enter number one","")) + parseFloat(prompt("Enter number two","")));


let num; 
function readNumber() {
  num = prompt("Enter number","");
  if( isNaN(num) ) {
    return readNumber();
  } else if(num === null) {
    return num;
  } else if(num === "") {
    return null;
  } else {
   return +num; 
  }
}
let test = readNumber();
console.log(test);
console.log(num);




let randomNum = Math.random();
function random(min, max) {
  if(randomNum >= min && randomNum <max) {
    return randomNum;
  } else if(randomNum < min) {
    randomNum *= 10;
    return random(min, max)
  } else {
    randomNum = Math.random();
    return random(min, max);
  }
}


function random(min, max) {
  let randomNum = Math.random()
  while (!(randomNum >= min && randomNum <max))  { 
    if(randomNum < min) {
      randomNum *= 10;
    } else  {
    randomNum = Math.random();
    }
    
  }
  return randomNum;
}



function random(min, max) {
  let randomNum = min - 0.5 + Math.random() * (max - min + 1);
  randomNum = Math.floor(randomNum);
  return randomNum;
}
console.log(random(3, 7));



alert( '𝒳'.charCodeAt(0).toString(2) ); // d835, между 0xd800 и 0xdbff
alert( '𝒳'.charCodeAt(1).toString(16) ); // dcb3, между 0xdc00 и 0xdfff



function ucFirst(str) {
  if (str !== "") {
    return str = str[0].toUpperCase() + str.slice(1);
  } else {
    return "";
  }
}
alert(ucFirst(""));


let arr = ['Яблоко', 'Груша', 'Апельсин'];
arr.push('Вишня');
arr.unshift('Слива');
console.log(arr);

function checkSpam(str) {
  if (str.toLowerCase().includes("viagra") || str.toLowerCase().includes("xxx")) {
    return true;
  } else {
    return false;
  }
}

alert(checkSpam('buy ViAgRA now'));
alert(checkSpam('free xxxxx'));
alert(checkSpam("innocent rabbit"));

arr[7] = undefined;
arr[15] = null; 
console.log(arr);



function truncate(str, maxlength) {
  if (str.length <= maxlength ) {
    return str;
  } else {
    return `${str.slice(0, maxlength-1)}…`;
  }
}

alert(truncate("Вот, что мне хотелось бы сказать на эту тему:", 20));

alert(truncate("Всем привет!", 20));





function getMaxSubSum(arr) {
  let sumArr = 0;
  let maxSumArr = 0;
  for ( let y = 0; y < arr.length; y++) {
  
    for (let i=y; i < arr.length; i++) {
      sumArr += arr[i];
      maxSumArr = Math.max(sumArr, maxSumArr  );
    }
    sumArr = 0;
  }
  return maxSumArr;
}


alert(getMaxSubSum([1, 2, 3]));



function getMaxSubSum(arr) { 
  let partSumArr = 0;
  let maxSumArr = 0;
  for(let key of arr) {
    partSumArr += key;
    maxSumArr = Math.max(maxSumArr, partSumArr);
    if ( partSumArr < 0) {
      partSumArr = 0;
    }
  }
  return maxSumArr;
}

alert(getMaxSubSum([1, 2, 3]));







function isPrime(element, index, array) {
  var start = 2;
  while (start < element) {
    if (element % start++ < 1) {
      return false;
    }
  }
  return element > 1;
}

console.log([4, 6, 8, 7, 12, 25].find(isPrime)); // undefined, не найдено
console.log([4, 5, 8, 12].find(isPrime)); // 5





function camelize(str) {
  let arrStr = str.split("-");
  console.log(arrStr);
 // let arrStrUp = arrStr.map(item, index => index != 0 ? item[0] = item[0].toUpperCase() : )
 let arrStrUp = arrStr.map(function(item, index) {
   if(index != 0) {
    return item[0].toUpperCase() + item.slice(1);
   } else {
     return item;
   }
 });
 console.log(arrStrUp);
 let strUp = arrStrUp.join('');
 console.log(strUp);
 return strUp;
}

camelize("-list-style-image");
alert(camelize(""));



function filterRange(arr, a, b) {
  return arr.filter(function(item) {

  })
}

let arr = [5, 3, 8, 1];

let filtered = filterRange(arr, 1, 4);

alert( filtered ); // 3,1 (совпадающие значения)

alert( arr ); // 5,3,8,1 (без изменений)




function filterRangeInPlace(arr, a, b) {
  arr.forEach(function(item, index) {
    if (a > item || item > b) {
      arr.splice(index, 1);
    }
  })
}


let arr = [5, 3, 8, 1];

filterRangeInPlace(arr, 1, 4); // удалены числа вне диапазона 1..4

alert( arr ); // [3, 1]





let arr = [5, 2, 1, -10, 8];

arr.sort(function(a,b) {
  return b - a;
})

// ... ваш код для сортировки по убыванию

alert(arr); // 8, 5, 2, 1, -10






let arr = ["HTML", "JavaScript", "CSS"];

let sorted = copySorted(arr);


function copySorted(arr) {
  return arr.concat().sort();
}


alert(sorted); // CSS, HTML, JavaScript
alert(arr); // HTML, JavaScript,


*/


function Calculator(str) {
  this.calculate = function(str) {
    
  }
}