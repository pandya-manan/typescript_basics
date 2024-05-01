class CustomerPerson
{
    firstName:string;
    lastName:string;
    constructor(fName:string,lName:string)
    {
        this.firstName=fName;
        this.lastName=lName;
    }
}
let customerMan = new CustomerPerson("Manan","Pandya");
console.log(customerMan.firstName);
console.log(customerMan.lastName);
