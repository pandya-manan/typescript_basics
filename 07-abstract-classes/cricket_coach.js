"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.CricketCoach = void 0;
var coach_1 = require("./coach"); // Importing the Coach class
var CricketCoach = /** @class */ (function (_super) {
    __extends(CricketCoach, _super);
    function CricketCoach(nameToAdd, state) {
        var _this = _super.call(this, nameToAdd) || this;
        _this.state_team = state;
        return _this;
    }
    CricketCoach.prototype.find = function (name) {
        return new CricketCoach(name, this.state_team);
    };
    return CricketCoach;
}(coach_1.Coach));
exports.CricketCoach = CricketCoach;
