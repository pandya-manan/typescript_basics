var CustomerPerson = /** @class */ (function () {
    function CustomerPerson(fName, lName) {
        this.firstName = fName;
        this.lastName = lName;
    }
    return CustomerPerson;
}());
var customerMan = new CustomerPerson("Manan", "Pandya");
console.log(customerMan.firstName);
console.log(customerMan.lastName);
