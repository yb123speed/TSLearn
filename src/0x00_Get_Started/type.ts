alert('hello world in TypeScript');

//类型批注
function Add(left: number, right: number): number {
    return left + right;
}

//
function area(shape: string, width: number, height: number) {
    let area = width * height;
    return "I'm a " + shape + " with an area of " + area + " cm squared.";
}

document.body.innerHTML = area('rectangle', 30, 15);