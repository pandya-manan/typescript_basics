import { Shape } from "./shape";

export class Circle extends Shape
{
    private _radius: number;
    
    public get radius(): number {
        return this._radius;
    }
    public set radius(value: number) {
        this._radius = value;
    }

    constructor(value2:number,value:number,rale:number)
    {
        super(value2,value);
        this.radius=rale;
        
    }

    getInfo():string
    {
        return super.getInfo() + `, radius=${this._radius}`;
    }

}