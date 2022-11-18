var Passenger12 = /** @class */ (function () {
    function Passenger12(firstName, lastName, flightno) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.frequentFlyerno = flightno;
    }
    return Passenger12;
}());
var passenger = new Passenger12("Jsck", "Sparrow", 102);
console.log(passenger.firstName + " " + passenger.lastName + " " + passenger.frequentFlyerno);
