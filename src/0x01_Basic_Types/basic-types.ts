//boolean
console.log('boolean type');

let isDone: boolean = false;

console.log('isDone\'s type is '+typeof(isDone)+', value is '+isDone+'.');

//number
console.log('number type');

let decLiteral: number = 6;
let hexLiteral: number = 0xf00d;
let binaryLiteral: number = 0b1010;
let octalLiteral: number = 0o744;

console.log('decLiteral\'s type is '+typeof(decLiteral)+', value is '+decLiteral+'.');
console.log('hexLiteral\'s type is '+typeof(hexLiteral)+', value is '+hexLiteral+'.');
console.log('binaryLiteral\'s type is '+typeof(binaryLiteral)+', value is '+binaryLiteral+'.');
console.log('octalLiteral\'s type is '+typeof(octalLiteral)+', value is '+octalLiteral+'.');

//string
console.log('string type');

let name: string ="bob";
console.log('name\'s type is '+typeof(name)+', value is '+name+'.');
name = 'smith';
console.log('name\'s type is '+typeof(name)+', value is '+name+'.');

let subname: string = `Gene`;
let age: number = 37;
let sentence: string = `Hello, my name is ${ subname }.

I'll be ${ age + 1 } years old next month.`;
console.log('sentence\'s type is '+typeof(sentence)+', value is '+sentence+'.');

//Array
console.log('Array type')

//method1
let list1: number[] = [1, 2, 3]
console.log('list1\'s type is '+typeof(list1)+', value is '+list1+'.');
//method1
let list2: Array<number> = [1, 2, 3]
console.log('list2\'s type is '+typeof(list2)+', value is '+list2+'.');

//Tuple
console.log('Tuple type');
// Declare a tuple type
let x: [string, number];
// Initialize it
x = ['hello', 10]; // OK
// Initialize it incorrectly
//x = [10, 'hello']; // Error
console.log(x[0].substr(1)); // OK
//console.log(x[1].substr(1)); // Error, 'number' does not have 'substr'
x[3] = 'world';
console.log(typeof(x[5]))
//console.log(x[5].toString());
x[6] = true;


//enum
enum Color{
    Red=6,
    Green,
    Blue
}

let c: Color = Color.Green;
console.log(c);
let colorName: string = Color[7];

alert(colorName);  // 显示'Green'因为上面代码里它的值是2