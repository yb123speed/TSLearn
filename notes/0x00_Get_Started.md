## 类型批注

TypeScript 通过类型批注提供静态类型以在编译时启动类型检查。这是可选的，而且可以被忽略而使用 JavaScript 常规的动态类型。

```typescript
function Add(left: number, right: number): number {
    return left + right;
}

function area(shape: string, width: number, height: number) {
    var area = width * height;
    return "I'm a " + shape + " with an area of " + area + " cm squared.";
}
 
document.body.innerHTML = area("rectangle", 30, 15);
```

对于基本类型的批注是number, bool和string。而弱或动态类型的结构则是any类型。

类型批注可以被导出到一个单独的声明文件以让使用类型的已被编译为JavaScript的TypeScript脚本的类型信息可用。批注可以为一个现有的JavaScript库声明，就像已经为Node.js和jQuery所做的那样。

当类型没有给出时，TypeScript编译器利用类型推断以推断类型。如果由于缺乏声明，没有类型可以被推断出，那么它就会默认为是动态的any类型。



---

## 接口

接口可以作为一个类型批注。

```typescript
interface Shape {
    name: string;
    width: number;
    height: number;
    color?: string;
}
 
function area(shape : Shape) {
    var area = shape.width * shape.height;
    return "I'm " + shape.name + " with area " + area + " cm squared";
}
 
console.log( area( {name: "rectangle", width: 30, height: 15} ) );
console.log( area( {name: "square", width: 30, height: 30, color: "blue"} ) );
```



---

## 箭头函数表达式（lambda表达式）

lambda表达式**()=>{something}或()=>something**相当于js中的函数,它的好处是可以自动将函数中的this附加到上下文中。

##### JavaScript代码:

```javascript
var shape = {
    name: "rectangle",
    popup: function() {
 
        console.log('This inside popup(): ' + this.name);
 
        setTimeout(function() {
            console.log('This inside setTimeout(): ' + this.name);
            console.log("I'm a " + this.name + "!");
        }, 3000);
 
    }
};
 
shape.popup();
```

##### TypeScript代码:

```typescript
var shape = {
    name: "rectangle",
    popup: function() {
 
        console.log('This inside popup(): ' + this.name);
 
        setTimeout( () => {
            console.log('This inside setTimeout(): ' + this.name);
            console.log("I'm a " + this.name + "!");
        }, 3000);
 
    }
};
 
shape.popup();
```

在以上实例编译后端 js 文件中，我们可以看到一行**var _this = this;**，**_this**在 setTimeout() 的回调函数引用了 name 属性。



---

## 类

TypeScript支持集成了可选的类型批注支持的ECMAScript 6的类。

```typescript
class Shape {
 
    area: number;
    color: string;
 		//构造函数
    constructor ( name: string, width: number, height: number ) {
        this.area = width * height;
        this.color = "pink";
    };
 		//method
    shoutout() {
        return "I'm " + this.color + " " + this.name +  " with an area of " + this.area + " cm squared.";
    }
}
 
var square = new Shape("square", 30, 30);
 
console.log( square.shoutout() );
console.log( 'Area of Shape: ' + square.area );
console.log( 'Name of Shape: ' + square.name );
console.log( 'Color of Shape: ' + square.color );
console.log( 'Width of Shape: ' + square.width );
console.log( 'Height of Shape: ' + square.height );
```

构造器中参数(name, width 和 height) 的作用域是局部变量。

public 成员可以在任何地方访问， private 成员只允许在类中访问。



---

## 继承

我们可以继承一个已存在的类并创建一个派生类，继承使用关键字**extends**。

```typescript
class Shape3D extends Shape{
    volume: number;
 
    constructor ( public name: string, width: number, height: number, length: number ) {
        super( name, width, height );
        this.volume = length * this.area;
    };
 
    shoutout() {
        return "I'm " + this.name +  " with a volume of " + this.volume + " cm cube.";
    }
 
    superShout() {
        return super.shoutout();
    }
}

var cube = new Shape3D("cube", 30, 30, 30);
console.log( cube.shoutout() );
console.log( cube.superShout() );
```

派生类 Shape3D 说明：

- Shape3D 继承了 Shape 类, 也继承了 Shape 类的 color 属性。

- 构造函数中，super 方法调用了基类 Shape 的构造函数 Shape，传递了参数 name, width, 和 height 值。 继承允许我们复用 Shape 类的代码，所以我们可以通过继承 area 属性来计算 this.volume。

- Shape3D 的 shoutout() 方法重写基类的实现。superShout() 方法通过使用 super 关键字直接返回了基类的 shoutout()方法。

- 其他的代码我们可以通过自己的需求来完成自己想要的功能。
