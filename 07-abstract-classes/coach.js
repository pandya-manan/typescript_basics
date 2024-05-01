"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Coach = void 0;
var Coach = /** @class */ (function () {
    function Coach(nameToAdd) {
        this.name = nameToAdd;
    }
    Coach.prototype.display = function () {
        console.log("Hi ".concat(this.name, " sir!"));
    };
    return Coach;
}());
exports.Coach = Coach;
