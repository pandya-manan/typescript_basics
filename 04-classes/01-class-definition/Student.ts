
class Student
{
    private _firstName:string;
    private _lastName:string;

    // constructor(fName:string,lName:string)
    // {
    //     this.firstName=fName;
    //     this.lastName=lName;
    // }

    public get firstName():string
    {
        return this._firstName;
    }

    public get lastName():string
    {
        return this._lastName;
    }

    public set firstName(value:string)
    {
        this._firstName=value;
    }
    public set lastName(value:string)
    {
        this._lastName=value;
    }
}
let availableStudent=new Student();
let fname:string="Akash";
let lname:string="Agarwal";
availableStudent.firstName=fname;
availableStudent.lastName=lname;
console.log(`Hi ${availableStudent.firstName} ${availableStudent.lastName}`);

