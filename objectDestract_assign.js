var Employee1 = {
    emp_id: 1,
    emp_name: "dapali",
    emp_salary: 60000,
    emp_city: "pune"
};
console.log("****************object *************************");
console.log("ID:", Employee1.emp_id);
console.log("name:", Employee1.emp_name);
console.log("salary:", Employee1.emp_salary);
console.log("city:", Employee1.emp_city);
var emp_id = Employee1.emp_id, emp_name = Employee1.emp_name, emp_salary = Employee1.emp_salary, emp_city = Employee1.emp_city;
console.log("****************object destructuring*************************");
console.log("emp_id:", emp_id);
console.log("emp_name:", emp_name);
console.log("emp_salary:", emp_salary);
console.log("emp_city:", emp_city);
console.log("****************object traveling using for in loop *************************");
for (var key in Employee1) {
    var element = Employee1[key];
    console.log(element);
}
