// // Завдання 1
// Задача 5-1
// function-constructor
// Напиши функцию-конструктор Account, которая создает объект со свойствами login и email.

// В prototype функции-конструктора добавь метод getInfo(), который возвращает строку со 
// значениями свойств login и email объекта.



// Здано:

 // Write code under this line
 const Account = function(login, email){
  this.login = login
  this.email = email
  // Так не треба писати методи 
  // this.getInfo = function(){
    
  // console.log(`login : ${this.login}, email: ${this.email}`)
  // }
 }
 
// Ось так потрібно
 Account.prototype.getInfo = function(){
  // console.log(`login : ${this.login}, email: ${this.email}`)
  return `login : ${this.login}, email: ${this.email}`
}

console.log(typeof Account.prototype.getInfo);
// 'function'

const mango = new Account( 'Mangozedog', 'mango@dog.woof');
console.log(mango.getInfo()); 
// 'login : Mangozedog, email: mango@dog.woof'

const poly = new Account( 'Poly', 'poly@mail.com');
console.log(poly.getInfo());
// 'login : Poly, email: poly@mail.com'