"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Employee = void 0;
var Employee = /** @class */ (function () {
    function Employee(fname, cityName) {
        this.name = fname;
        this.city = cityName;
    }
    Object.defineProperty(Employee.prototype, "employeeName", {
        get: function () {
            return this.name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Employee.prototype, "employeeCity", {
        get: function () {
            return this.city;
        },
        enumerable: false,
        configurable: true
    });
    return Employee;
}());
exports.Employee = Employee;
