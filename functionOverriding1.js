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
var Person = /** @class */ (function () {
    function Person() {
    }
    Person.prototype.display = function () {
        console.log("In BASE class");
        console.log(this.name + " " + this.address);
    };
    return Person;
}());
var student = /** @class */ (function (_super) {
    __extends(student, _super);
    function student(rollno, name, address) {
        var _this = _super.call(this) || this;
        _this.rollno = rollno,
            _this.name = name,
            _this.address = address;
        return _this;
    }
    student.prototype.display = function () {
        console.log("In student class");
        console.log(this.rollno + " " + this.name + " " + this.address);
    };
    return student;
}(Person));
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(emp_name, name, address) {
        var _this = _super.call(this) || this;
        _this.emp_name = emp_name,
            _this.name = name,
            _this.address = address;
        return _this;
    }
    Employee.prototype.display = function () {
        console.log("In Employee class");
        console.log(this.emp_name + " " + this.name + " " + this.address);
    };
    return Employee;
}(Person));
var Trainer = /** @class */ (function (_super) {
    __extends(Trainer, _super);
    function Trainer(trname, name, address) {
        var _this = _super.call(this) || this;
        _this.trname = trname,
            _this.name = name,
            _this.address = address;
        return _this;
    }
    Trainer.prototype.display = function () {
        console.log("In Trainer  class");
        console.log(this.trname + " " + this.name + " " + this.address);
    };
    return Trainer;
}(Person));
var p1 = new student(112, "Dipali", "Natepute");
var p2 = new Employee(" IT traing", "Dipali", "Natepute");
var p3 = new Trainer("raghav", "Dipali", "Natepute");
p1.display();
p2.display();
p3.display();
