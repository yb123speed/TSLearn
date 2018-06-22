var shape = {
    name: "rectangle",
    popup: function () {
        console.log('This inside popup(): ' + this.name);
        setTimeout(function () {
            console.log('This inside setTimeout(): ' + this.name);
            console.log("I'm a " + this.name + "!");
        }, 3000);
    }
};
shape.popup();
var shape1 = {
    name: "rectangle",
    popup: function () {
        var _this = this;
        console.log('This inside popup(): ' + this.name);
        setTimeout(function () {
            console.log('This inside setTimeout(): ' + _this.name);
            console.log("I'm a " + _this.name + "!");
        }, 3000);
    }
};
shape1.popup();
