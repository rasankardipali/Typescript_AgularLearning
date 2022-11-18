var objProduct = {
    id: 123,
    name: "IPhone",
    description: "It's awesome",
    price: 60000,
    display: function () {
        console.log(this.id + " " + this.name);
        console.log(" hellow");
    }
};
console.log(objProduct);
