// // 父类
// function SuperType(name){
// 	this.name = name;
// 	this.colors = ["red","blue","green"];
// }
// SuperType.prototype.sayName = function() {
// 	console.log(this.name);
// };
// // 子类
// function SubType(name, age){
// 	// 继承属性 第二次调用
// 	SuperType.call(this, name);
// 	this.age = age;
// }
// // 继承方法 第一次调用
// SubType.prototype = new SuperType();
// SubType.prototype.sayAge = function() {
// 	console.log(this.age);
// };
// let instance1 = new SubType("Nicholas", 29);
// instance1.colors.push("black");
// console.log(instance1.colors); //["red,blue,green,black"]
// instance1.sayName(); // "Nicholas";
// instance1.sayAge(); // 29
// let instance2 = new SubType("Greg", 27);
// console.log(instance2.colors); // ["red,blue,green"]
// instance2.sayName(); // "Greg";
// instance2.sayAge(); // 27

// //可以继承父类原型上的属性，可以传参，可复用。 每个新实例引入的构造函数属性是私有的 
function object(person) {
  function F() {}
  F.prototype = person
  return new F()
 }
 
 let person = {
  name:'小明',
  colors:['red','blue']
 }
 
 let person1 = object(person)
 person1.colors.push('green')
 let person2 = object(person)
 person1.colors.push('yellow')
 console.log(person) //['red','blue','green','yellow']
 