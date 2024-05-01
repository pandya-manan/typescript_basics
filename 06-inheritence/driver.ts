import {Shape} from './shape';
import {Circle} from './circle';

let myShape=new Shape(10,20);
// console.log(myShape.getInfo());

let myCircle=new Circle(4,5,10);
// console.log(myCircle.getInfo());

let shapes :Shape[]=[myShape,myCircle];
for(let displayShape of shapes)
    {
        console.log(displayShape.getInfo())
    }
