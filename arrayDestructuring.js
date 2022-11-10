var array = ["J&J", "Pfizer", "Sputnik"];
console.log("************************Given array:*************************************");
for (var index = 0; index < array.length; index++) {
    console.log(array[index]);
}
array.push("Covaxin");
console.log("************************Given array Destructuring*************************************");
var a = array[0], b = array[1], c = array[2], d = array[3];
console.log(a);
console.log(b);
console.log(c);
console.log(d);
