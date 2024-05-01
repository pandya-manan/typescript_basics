var Student = /** @class */ (function () {
    function Student() {
    }
    Object.defineProperty(Student.prototype, "firstName", {
        // constructor(fName:string,lName:string)
        // {
        //     this.firstName=fName;
        //     this.lastName=lName;
        // }
        get: function () {
            return this._firstName;
        },
        set: function (value) {
            this._firstName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "lastName", {
        get: function () {
            return this._lastName;
        },
        set: function (value) {
            this._lastName = value;
        },
        enumerable: false,
        configurable: true
    });
    return Student;
}());
var availableStudent = new Student();
var fname = "Akash";
var lname = "Agarwal";
availableStudent.firstName = fname;
availableStudent.lastName = lname;
console.log("Hi ".concat(availableStudent.firstName, " ").concat(availableStudent.lastName));
