"use strict"
let num = prompt('enter number', 5);

function fac(num2){
  
  if  (num2 === 1){ 
    return num2;
  }else {
    return num2 * fac(num2 - 1);}
}

console.log(fac(num));

alert(fac(num));
