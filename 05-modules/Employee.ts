export class Employee
{
    private name:string;
    private city:string;

    constructor(fname:string,cityName:string)
    {
        this.name=fname;
        this.city=cityName;
    }

    public get employeeName():string
    {
        return this.name;
    }

    public get employeeCity():string
    {
        return this.city;
    }

}