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





    function Calculator(str) {
     this.operators = {};
     this.operators["+"] = function(a, b) {
        return +a + +b;
      };
      this.operators["-"] = function(a, b) {
        return +a - +b;
      };
      this.calculate = function(str) {
        let arrKeyObj = [];
        for (let key in this.operators) {
            arrKeyObj = arrKeyObj.concat(key);
        }
        
        let strToArr = str.split(" ");
        
        if( strToArr.length === 3 && !isNaN(strToArr[2]) && !isNaN(strToArr[0]) && +strToArr[2] !== "" && +strToArr[0] !== "" && +strToArr[2] !== " " && +strToArr[0] !== " " && arrKeyObj.includes(strToArr[1])) {
         return this.operators[strToArr[1]](strToArr[0], strToArr[2])
        } else {
        return 'Ошибка, повторите ввод';
        }
      }
      this.addMethod = function(newOper, fun) {
        this.operators[newOper] = fun;
      }
      
    }

    let calc = new Calculator;

    alert(calc.calculate("3 - 8"));



    let powerCalc = new Calculator;
    powerCalc.addMethod("*", (a, b) => a * b);
    powerCalc.addMethod("/", (a, b) => a / b);
    powerCalc.addMethod("**", (a, b) => a ** b);

    let result = powerCalc.calculate("2 ** 3");
    alert(result); // 8
    console.log(Calculator)




    let vasya = { name: "Вася", age: 25 };
    let petya = { name: "Петя", age: 30 };
    let masha = { name: "Маша", age: 28 };

    let users = [vasya, petya, masha];

    let names = [];

    for(let item of users) {
      names = names.concat(item.name);
    }

      alert(names); // Вася, Петя, Маша
      
      console.log(users);
      
      



    let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
    let petya = { name: "Петя", surname: "Иванов", id: 2 };
    let masha = { name: "Маша", surname: "Петрова", id: 3 };

    let users = [vasya, petya, masha];

    let usersMapped = users.map(function(item) {
      return { 'fullName': item.name + " " + item.surname, 'id': item.id }
    } );
      
      usersMapped = [
        { fullName: "Вася Пупкин", id: 1 },
        { fullName: "Петя Иванов", id: 2 },
        { fullName: "Маша Петрова", id: 3 }
      ]
      

      alert(usersMapped[0].id) // 1
    alert(usersMapped[0].fullName) // Вася Пупкин





    let vasya = { name: "Вася", age: 25 };
    let petya = { name: "Петя", age: 30 };
    let masha = { name: "Маша", age: 28 };

    let arr = [vasya, petya, masha];


    function sortByAge(arr) {
       arr.sort(function(a, b) {
      return a.age - b.age;
       })
    }

    sortByAge(arr);

    // теперь: [vasya, masha, petya]
    alert(arr[0].name); // Вася
    alert(arr[1].name); // Маша
    alert(arr[2].name); // Петя


  

    let arr = [1, 2, 3];


    function shuffle(arr) {
      arr.sort(function() {
        return Math.random() - 0.5;
      })
    }
    shuffle(arr);
    alert(arr);
    // arr = [3, 2, 1]


    shuffle(arr);
    // arr = [2, 1, 3]

    shuffle(arr);
    // arr = [3, 1, 2]
    // ...
    console.log(Math.floor(Math.random() * 10)) 
    
    
    
    
  let vasya = { name: "Вася", age: 25 };
  let petya = { name: "Петя", age: 30 };
  let masha = { name: "Маша", age: 29 };
  
  let arr = [vasya, petya, masha];
  
  
  function getAverageAge(arr) {
    //let sumAge = 0;
 //   arr.forEach(function(item, index, array) {
//      sumAge += item.age;
 //   });
 //   return sumAge / arr.length;
  return arr.reduce(function(sumAge, item) {
    return sumAge + item.age;
  }, 0) / arr.length;
  }
  

  alert(getAverageAge(arr)); // (25 + 30 + 29) / 3 = 28





function unique(arr) {
  let uniqueString = [];
  arr.forEach(function(item) {
   if( !(uniqueString.includes(item))) { 
     uniqueString.push(item);
   }
})
  return uniqueString;
}

let strings = ["кришна", "кришна", "харе", "харе",
  "харе", "харе", "кришна", "кришна", ":-O"
];

alert(unique(strings)); // кришна, харе, :-O




let login = prompt("Введите имя", '');

let message;

login == 'Сотрудник' ? 
message = 'Привет' :
(login == 'Директор') ?
  message = 'Здравствуйте':
 (login == '') ?
  message = 'Нет логина':
  message = '';


alert(message); 





let str = 'Hello';


let iterator = str[Symbol.iterator]();
while(true) {
let result = iterator.next();
if (result.done) {
  break;
} else {
  alert(result.value);
}
}


let range = {
  from: 1,
  to: 5,
  
  [Symbol.iterator]: function() {
    return { 
      current: this.from,
      last: this.to,
      next() {
        if(this.current <= this.last) {
          return {done:false, value: this.current++};
        } else {
        return {done:true};
        }
      },
    }
  }
}

for (let num of range) {
  alert(num);
}

let arr = Array.from(range);
alert(arr); // 1,2,3,4,5 (преобразование






function unique(arr) {
  let sett = new Set();
  arr.forEach(function(item) {
  sett.add(item);
  });
  let str = "";
  sett.forEach(function(item2) {
    str = str + item2 + ",";
  });
  str = str.slice(0, -1);
  console.log(sett);
   return str;
  
}

let values = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

alert(unique(values)); // Hare,Krishna,:-O






let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];


function aclean(arrUniq) {
  let arrNoAnnog = [arrUniq[0]];
  let arrLetters = [];
  let stuffToArr = [];
  one: for (let item of arrUniq) {
   arrLetters = item.toLowerCase().split('').sort().join('');
//console.log(arrLetters);
  
  
   for (let stuff of arrNoAnnog) {
     stuffToArr = stuff.toLowerCase().split('').sort().join('');
     
     console.log(arrNoAnnog.slice().reverse().lastIndexOf(stuff));
     if (stuffToArr == arrLetters) {
       continue one;
     } else if(arrNoAnnog.slice().reverse().lastIndexOf(stuff) == 0){
       arrNoAnnog.push(item);
       continue one;
     } else {
       continue;
     }
   
};
} 
return arrNoAnnog;
}


alert(aclean(arr)); // "nap,teachers,ear" или "PAN,cheaters



let john = { name: "John" };

let weakMap = new WeakMap();
weakMap.set(john, "...");

//john = null; // перезаписываем ссылку на объект

// объект john удалён из памяти!

console.log(weakMap.get());





let map = new Map();

map.set("name", "John");
map.set("name2", "John2");

let keys = Array.from(map.keys());
console.log(keys);
// Error: keys.push is not a function
// Ошибка: keys.push -- это не функция
keys.push("more");



let messages = [
  { text: "Hello", from: "John" },
  { text: "How goes?", from: "John" },
  { text: "See you soon", from: "Alice" }
];

let readMessages = new WeakSet();

// Два сообщения были прочитаны
readMessages.add(messages[0]);
readMessages.add(messages[1]);
// readMessages содержит 2 элемента

// ...давайте снова прочитаем первое сообщение!
readMessages.add(messages[0]);
// readMessages до сих пор содержит 2 элемента

// Вопрос: было ли сообщение message[0] прочитано?
alert("Read message 0: " + readMessages.has(messages[0])); // true

messages.shift();
// теперь readMessages содержит 1 элемент (хотя технически память может быть очищена позже)

alert("Read message 0: " + readMessages.has(messages[0])); // true
console.log(readMessages.length);


let timeReadMessage = new WeakMap();

function addTime(mess, time) {
  timeReadMessage.set(mess, time);
}

addTime(messages[1], '16:53 12.07.22');
alert(timeReadMessage.get(messages[1]));





let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

function sumSalaries(obj) {
  let sum = 0;
  for (let values of Object.values(obj)) {
    sum += values;
  }
  return sum;
}



alert(sumSalaries(salaries)); // 650



let user = {
  name: 'John',
  age: 30,
  name2: 'John',
  age2: 30,
  name3: 'John',
  age3: 30,
  name4: 'John',
  age4: 30,
};

function count(obj) {
  let sum = 0;
  for(let key of Object.keys(obj)) {
    sum++;
  console.log(sum);
  };
  return sum;
}


alert(count(user)); // 2






let user = { name: "John", years: 30 };

// ваш код должен быть с левой стороны:
// ... = user
let {name, years: age, isAdmin = false} = user;

alert(name); // John
alert(age); // 30
alert(isAdmin); // false





let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250,
};

function topSalary(salaries) {
  let maxSal = 0;
  let topName = null;
  for(let [key, value] of Object.entries(salaries)) {
    
    if (value > maxSal) {
      maxSal = value;
      topName = key;
    }
  }
  return topName;
}

alert(topSalary(salaries));





let start = new Date();

for (let i = 0; i < 10000000000; i++) {
  let goWork = i*i*i;
}

let end = new Date();
alert(Math.round((end - start)/1000) + " seconds");






alert(new Date('2012-01-20T03:12:50.000+03:00'));



let date = new Date(2012, 0, 3); // 3 января 2012 года

function getWeekDay(dateIn) {
  switch(dateIn.getDay()) {
    case 0:
      return "ВС";
    
    case 1:
      return "ПН";
      
    case 2:
      return "ВТ";
      
    case 3:
      return "СР";
    
    case 4:
      return "ЧТ";
      
    case 5:
      return "ПТ";
    
    case 6:
      return "СБ";
    
  }
}


alert(getWeekDay(date));


function getLocalDay(dateIn) {
  let localNumbers = [7, 1, 2, 3, 4, 5, 6];
  return localNumbers[dateIn.getDay()];
}

alert(getLocalDay(date));





let date = new Date(2015, 0, 2);

function getDateAgo(dateSourse, daysAgo) {
  
  return ((new Date(dateSourse.getTime() - (86400*1000)*daysAgo).getDate()));
}



alert(getDateAgo(date, 1)); // 1, (1 Jan 2015)
alert(getDateAgo(date, 2)); // 31, (31 Dec 2014)
alert(getDateAgo(date, 365)); // 2, (2 Jan 2014)







function getLastDayOfMonth(year, month) {
  let dateThis = new Date(year, month);
  let nextMonth = new Date(dateThis);
  nextMonth.setMonth(dateThis.getMonth() + 1);
  nextMonth.setDate(nextMonth.getDate() - 1);
  return nextMonth.getDate();
  
  
}

alert(getLastDayOfMonth(2012, 1)); // = 29




function getSecondsToday() {
  let timeNow = new Date();
  return timeNow.getHours() * 3600 + timeNow.getMinutes() * 60 + timeNow.getSeconds();
}
alert(getSecondsToday()); 



function getSecondsToTomorrow() {
  let now = new Date();
  let today = new Date(now.getFullYear(), now.getMonth(), (now.getDate() + 1));
  let diff = today - now;
  return Math.round(diff/1000);
}
alert(getSecondsToTomorrow());






let datePast = new Date();

function formatDate(date) {
  let diff = Date.now() - date;
  switch (true) {
    case (diff < 1000):
      return "прямо сейчас";
  
    case (diff < (1000*60)):
      return `${Math.round(diff/1000)} сек. назад`;
  
    case (diff < (1000*60*60)):
      return `${Math.round(diff/1000/60)} мин. назад`;
  
    default:
      let YY = ('' + date.getFullYear()).slice(-2);
      return `${('0' + (date.getDate())).slice(-2)}.${('0' + (date.getMonth() + 1)).slice(-2)}.${YY} ${('0' + (date.getHours())).slice(-2)}:${('0' + (date.getMinutes())).slice(-2)}`;
  
  }
}

alert(formatDate(new Date(new Date - 1))); // "прямо сейчас"

alert(formatDate(new Date(new Date - 30 * 1000))); // "30 сек. назад"

alert(formatDate(new Date(new Date - 5 * 60 * 1000))); // "5 мин. назад"

// вчерашняя дата вроде 31.12.2016, 20:00
alert(formatDate(new Date(new Date - 86400 * 1000)));






  function betterThanAverage(classPoints, yourPoints) {
    // Your code here
    let classAllPoints = classPoints.concat(yourPoints);
    let sumPoints = classAllPoints.reduce(function(sum, point) {
      return sum + point;
    });
    console.log(sumPoints);
    let averagePoint = sumPoints / classAllPoints.length;
    return (yourPoints > averagePoint);
  }



alert(betterThanAverage([2,3],5));





function removeExclamationMarks(s) {
  let arrS = s.split('');
  let arrEditS = arrS.map(function(letter, index) {
    if (letter != "!") {
      return letter;
    }
  })
  return arrEditS.join('');
}


function feast(beast, dish) {
  if (beast[0] == dish[0] && beast[beast.length - 1] == dish[dish.length-1]) {
    console.log(beast[beast.length - 1] );
    return true;
  } else {
    return false;
  }
  }




const areaOrPerimeter = function(l , w) {
  return  (l == w) ? l*w : l*2+w*2;
};



mocha.run();






let user = {
  name: "John",
  age: 25,
  roles: {
    isAdmin: false,
    isEditor: true
  }
};

alert(JSON.stringify(user, null, 4));





let user = {
  name: "Василий Иванович",
  age: 35
};

let userJson = JSON.stringify(user);
let newUser = JSON.parse(userJson);
console.log(newUser);







let room = {
  number: 23
};

let meetup = {
  title: "Совещание",
  occupiedBy: [{ name: "Иванов" }, { name: "Петров" }],
  place: room
};

// цикличные ссылки
room.occupiedBy = meetup;
meetup.self = meetup;

alert(JSON.stringify(meetup, function replacer(key, value) {
  return  (value == meetup && key !== "") ? undefined : value;
}));


function descendingOrder(n) {
  let arrNum = String(n).split("");
  let arrNumSort = arrNum.sort( (a, b) => a - b );
  return Number(arrNumSort.reverse().join(''));
}


alert(descendingOrder(356366467));




function sumTwoSmallestNumbers(numbers) {
  if(numbers.length >= 4) {
    numbers.sort((a, b) => a - b);
    return numbers[0] + numbers[1];
  } else {
    return "input 4 or more numbers";
  }
}

alert(sumTwoSmallestNumbers([1, 6, 96, 3, 9]));





function rowSumOddNumbers(n) {
  let arrOddNumbers = [];
  let maxNum = 1000000;
  for(let i = 1; i <= maxNum; i += 2) {
    arrOddNumbers.push(i);
  }
  let indexFirstNum = 0;
  for (let i = 1; i < n; i++) {
    indexFirstNum += i;
  }
  let rowArr = arrOddNumbers.slice(indexFirstNum, indexFirstNum + n);
  return rowArr.reduce((sum, current) => sum + current);
  
}

alert(rowSumOddNumbers(3));





// цикл:
function sumTo(n) {
  let sum = 0;
  for (let i = n ; i !== 0 ; i--) {
    sum += i;
  }
  return sum;
}


// рекурсия:

function sumTo(n) {
  if(n == 1) {
    return n;
  } else {
    return n + sumTo(n-1);
    
  }
}



// арифмметическая прогрессия:

function sumTo(n) {
  return (1+n)*n/2
}


alert( sumTo(100) ); // 5050






function factorial(n) {
  if(n==1) {
    return 1;
  } else {
    return n*factorial(n-1);
  }
}

alert(factorial(3));






function fib(n) { 
  let start = Date.now();
  let sum = 1;
  let prevSum = 1;
  let tunk;
  for(let i=1; i < n-1; i++){
    tunk = sum;
    sum = sum + prevSum;
    prevSum = tunk;
  }
  return `${sum} - ${Date.now() - start}`;
}





// рекурсия:
function fib(n) {
  if(n <= 1 ) {
    return n;
  } else {
    return  fib(n-1)+fib(n-2);
  };
}



alert(fib(3)); // 2
alert(fib(7)); // 13
alert(fib(767)); // 5527939700884757




//рекурсия

let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};


function printListRec(list) {
  if(list.next == null) {
    alert(list.value);
  } else {
    
    printListRec(list.next);
    alert(list.value);
  }
  
}

function printListCyrcl(list){
  let tunk = list;
  let arr = [];
  for(; tunk !== null;){
    arr.push(tunk.value);
    tunk = tunk.next;
  }
  arr.reverse();
  arr.forEach(function(item){
    alert(item);
  })
}

printListRec(list);
printListCyrcl(list);




let arr = [1,2,3];
console.log(arr.find(() => false));



let l = [1,2,3,'g','y'];

function filter_list(l) {
  return l.filter((item) => typeof(item) === "number");
}

console.log(filter_list(l));




let arr = [3, 5, 6.2, 1];


function sum(numbers) {
  "use strict";
  let sum = 0;
  numbers.forEach(function(item) {
    sum += item;
  });
  return sum;
};


console.log(sum(arr));




let str = 'helloy'


function getCount(str) {
  return str.split('').reduce(function(sum, item) {
    if(item == 'a' || item == 'e' ||item == 'i' || item == 'o' ||  item == 'u') {
    sum += 1;
    }
    return sum;
  }, 0)
}

console.log(getCount(str));



let friends = ["Ryan", "Kieran", "Mark"];

function friend(friends) {
  return friends.filter(function(item) {
    if(item.length == 4) {
      return true;
    }
  })
}

console.log(friend(friends));




let numbers = [2, 7, 3];

function grow(x) {
  return x.reduce((grow, x) => grow *= x, 1)
}

console.log(grow(numbers));






function f() {
  let value = Math.random();

  function g() {
    debugger; // в консоли: напишите alert(value); Такой переменной нет!
  }

  return g;
}

let g = f();
g();
g();




function sum(a) {
  let count = 0
  return function(b) {
    return b + a;
  };
};





alert(sum(1)(2));
sum(5)(-1);





function inBetween(a, b) {
  return function(item) {
  return item >= a && b >= item
  }
}

function inArray(arr) {
  return function(item) {
    return arr.includes(item);
  }
}


let arr = [0, 1, 2, 3, 4, 5, 6, 7];

alert(arr.filter(inBetween(3, 6))); // 3,4,5,6

alert(arr.filter(inArray([1, 2, 10]))); // 1,2




let users = [
  { name: "John", age: 20, surname: "Johnson" },
  { name: "Pete", age: 18, surname: "Peterson" },
  { name: "Ann", age: 19, surname: "Hathaway" }
];

function byField(fieldName) {
  return function(a, b) {
    return (a[fieldName] > b[fieldName]) ? 1 : -1;
  }
}


users.sort(byField('name'));
console.log(users);
users.forEach(user => alert(user.name)); 
users.sort(byField('age'));
console.log(users);
users.forEach(user => alert(user.name)); 



function makeArmy() {
  let shooters = [];

  let i = 0;
  while (i < 10) {
    let x = i;
    let shooter = function() { // функция shooter
      alert(x); // должна выводить порядковый номер
    };
    shooters.push(shooter);
    i++;
  }

  return shooters;
}

let army = makeArmy();

army[0](); // у 0-го стрелка будет номер 10
army[5](); // и у 5-го стрелка тоже будет номер 10
// ... у всех стрелков будет номер 10, вместо 0, 1, 2, 3...



*/


function highAndLow(numbers) {
  return `${Math.max(...numbers.split(" "))} ${Math.min(...numbers.split(" "))}`
}

console.log(

highAndLow("1 2 3 4 5")); // return "5 1"
highAndLow("1 2 -3 4 5"); // return "5 -3"
highAndLow("1 9 3 4 -5"); // return

