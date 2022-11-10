console.log("*********************AppStatus*****************************");
var AppStatus;
(function (AppStatus) {
    AppStatus[AppStatus["ACTIVE"] = 0] = "ACTIVE";
    AppStatus[AppStatus["INACTIVE"] = 1] = "INACTIVE";
    AppStatus[AppStatus["ONHOLD"] = 2] = "ONHOLD";
})(AppStatus || (AppStatus = {}));
console.log(AppStatus.ACTIVE);
console.log(AppStatus.INACTIVE);
console.log(AppStatus.ONHOLD);
console.log("*********************print_Media*****************************");
var print_Media;
(function (print_Media) {
    print_Media["Newspaper"] = " NEWSPAPER";
    print_Media["Newsletter"] = "NEWSLETTER";
    print_Media["Magazine"] = "MAGAZIN";
    print_Media["Book"] = "BOOK";
})(print_Media || (print_Media = {}));
console.log(print_Media.Newspaper);
console.log(print_Media.Newsletter);
console.log(print_Media.Magazine);
console.log(print_Media.Book);
console.log("*********************print_Media*****************************");
var E1;
(function (E1) {
    E1["A"] = "A";
    E1["B"] = "B";
    E1["C"] = "C";
})(E1 || (E1 = {}));
console.log(E1.A);
console.log(E1.B);
console.log(E1.C);
console.log("*********************Direction*****************************");
var Direction;
(function (Direction) {
    Direction["UP"] = "UP";
    Direction["DOWN"] = "DOWN";
    Direction["LEFT"] = "LEFT";
    Direction["RIGHT"] = "RIGHT";
})(Direction || (Direction = {}));
console.log(Direction.UP);
console.log(Direction.DOWN);
console.log(Direction.LEFT);
console.log(Direction.RIGHT);
console.log("*********************uese_Responce*****************************");
var ueseResponce;
(function (ueseResponce) {
    ueseResponce["YES"] = "YES";
    ueseResponce["NO"] = "NO";
})(ueseResponce || (ueseResponce = {}));
console.log(ueseResponce.YES);
console.log(ueseResponce.NO);
