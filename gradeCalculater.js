// console.log('Hello');
// alert('Hello');
// confirm("Do you really want to do this?");
// var data = prompt('Please enter your name');
// console.log(data);
console.log("***************************** grade calculator**************************************");
var a = prompt("enter marks of  subject maths ");
var b = prompt("enter marks of  subject physics");
var c = prompt("enter marks of  subject chemistry");
console.log("maths mark=", a);
console.log("physics mark=", b);
console.log("chemistry mark=", c);
var num = parseFloat(a);
var num1 = parseFloat(b);
var num2 = parseFloat(c);
var total = 0;
total = num + num1 + num2;
var average = total / 3;
console.log("total marks=", total);
console.log("total average=", average);
if (total < 70) {
    console.log("student having 'C' grade");
}
else if (total > 70 && total < 90) {
    console.log("student having 'B' grade");
}
else if (total > 90) {
    console.log("student having 'A' grade");
}
