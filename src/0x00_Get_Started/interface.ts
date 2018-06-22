interface Shape{
    name: string;
    width: number;
    height: number;
    color?: string;
}

function area(shape: Shape){
    var area = shape.width * shape.height;
    return "I'm " + shape.name + " with area " + area + " cm squared";
}

console.log(area({name:'rectangel',width:30,height:50}));
console.log(area({name:'rectangel',width:30,height:50,color:'blue'}));
console.log(area({width:30,height:50})); //编译报错但可执行 浏览器中name为undefined