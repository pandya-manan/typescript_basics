"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var shape_1 = require("./shape");
var circle_1 = require("./circle");
var myShape = new shape_1.Shape(10, 20);
// console.log(myShape.getInfo());
var myCircle = new circle_1.Circle(4, 5, 10);
// console.log(myCircle.getInfo());
var shapes = [myShape, myCircle];
for (var _i = 0, shapes_1 = shapes; _i < shapes_1.length; _i++) {
    var displayShape = shapes_1[_i];
    console.log(displayShape.getInfo());
}
