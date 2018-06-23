//boolean
console.log('boolean type');
var isDone = false;
console.log('isDone\'s type is ' + typeof (isDone) + ', value is ' + isDone + '.');
//number
console.log('number type');
var decLiteral = 6;
var hexLiteral = 0xf00d;
var binaryLiteral = 10;
var octalLiteral = 484;
console.log('decLiteral\'s type is ' + typeof (decLiteral) + ', value is ' + decLiteral + '.');
console.log('hexLiteral\'s type is ' + typeof (hexLiteral) + ', value is ' + hexLiteral + '.');
console.log('binaryLiteral\'s type is ' + typeof (binaryLiteral) + ', value is ' + binaryLiteral + '.');
console.log('octalLiteral\'s type is ' + typeof (octalLiteral) + ', value is ' + octalLiteral + '.');
//string
console.log('string type');
var name = "bob";
console.log('name\'s type is ' + typeof (name) + ', value is ' + name + '.');
name = 'smith';
console.log('name\'s type is ' + typeof (name) + ', value is ' + name + '.');
var subname = "Gene";
var age = 37;
var sentence = "Hello, my name is " + subname + ".\n\nI'll be " + (age + 1) + " years old next month.";
console.log('sentence\'s type is ' + typeof (sentence) + ', value is ' + sentence + '.');
//Array
console.log('Array type');
//method1
var list1 = [1, 2, 3];
console.log('list1\'s type is ' + typeof (list1) + ', value is ' + list1 + '.');
//method1
var list2 = [1, 2, 3];
console.log('list2\'s type is ' + typeof (list2) + ', value is ' + list2 + '.');
// //Tuple
// console.log('Tuple type');
// // Declare a tuple type
// let x: [string, number];
// // Initialize it
// x = ['hello', 10]; // OK
// // Initialize it incorrectly
// //x = [10, 'hello']; // Error
// console.log(x[0].substr(1)); // OK
// //console.log(x[1].substr(1)); // Error, 'number' does not have 'substr'
// x[3] = 'world';
// console.log(typeof(x[5]))
// //console.log(x[5].toString());
// x[6] = true;
//enum
var Color;
(function (Color) {
    Color[Color["Red"] = 6] = "Red";
    Color[Color["Green"] = 7] = "Green";
    Color[Color["Blue"] = 8] = "Blue";
})(Color || (Color = {}));
var c = Color.Green;
console.log(c);
var colorName = Color[7];
alert(colorName); // 显示'Green'因为上面代码里它的值是2
// Any
console.log('Any Type');
var notSure = 4;
console.log('notSure\'s type is ' + typeof (notSure) + ', value is ' + notSure + '.');
notSure = 'maybe a string instead';
console.log('notSure\'s type is ' + typeof (notSure) + ', value is ' + notSure + '.');
notSure = false;
console.log('notSure\'s type is ' + typeof (notSure) + ', value is ' + notSure + '.');
notSure = 4;
//notSure.ifItExists();//编译通过但是运行报错
notSure.toFixed();
// Void
console.log('Void Type');
var voidVar = undefined;
console.log('voidVar\'s type is ' + typeof (voidVar) + ', value is ' + voidVar + '.');
var voidVar1 = null;
console.log('voidVar1\'s type is ' + typeof (voidVar1) + ', value is ' + voidVar1 + '.');
function warnUser() {
    alert('This is a Void Function');
}
warnUser();
//Null和Undefined
console.log('Null Undefined Type');
var u = undefined;
console.log('u\'s type is ' + typeof (u) + ', value is ' + u + '.');
var n = null;
console.log('n\'s type is ' + typeof (n) + ', value is ' + n + '.');
//Never
console.log('Never Type');
// 返回never的函数必须存在无法达到的终点
function error(message) {
    throw new Error(message);
}
error('111');
// 推断的返回值类型为never
function fail() {
    return error("Something failed");
}
fail();
// 返回never的函数必须存在无法达到的终点
function infiniteLoop() {
    while (true) {
    }
}
infiniteLoop();
