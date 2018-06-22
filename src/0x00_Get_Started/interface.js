function area(shape) {
    var area = shape.width * shape.height;
    return "I'm " + shape.name + " with area " + area + " cm squared";
}
console.log(area({ name: 'rectangel', width: 30, height: 50 }));
console.log(area({ name: 'rectangel', width: 30, height: 50, color: 'blue' }));
console.log(area({ width: 30, height: 50 }));
