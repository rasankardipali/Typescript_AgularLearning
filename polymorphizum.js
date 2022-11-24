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
var Organizer = /** @class */ (function () {
    function Organizer() {
    }
    Organizer.prototype.display = function () {
        console.log("Organization Details");
    };
    return Organizer;
}());
var event1 = /** @class */ (function (_super) {
    __extends(event1, _super);
    function event1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return event1;
}(Organizer));
_super.display.call(this);
this.id = id,
    this.name = name,
    this.discription = discription,
    this.strattime = strattime,
    display();
{
    console.log("ID:".concat(this.id, "   NAME:").concat(this.name, "  DISCRIPTION:").concat(this.discription, "  STARTTIME:").concat(this.strattime));
}
var Venue = /** @class */ (function (_super) {
    __extends(Venue, _super);
    function Venue() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Venue;
}(Organizer));
_super.display.call(this);
this.id = id,
    this.name = name,
    this.discription = discription;
this.address = address,
    display();
{
    console.log("ID:".concat(this.id, "   NAME:").concat(this.name, "  DISCRIPTION:").concat(this.discription, "  ADDRESS:").concat(this.address));
}
// let Organizer: Organizer[] = new Array(new event1(12, "Raj Kundra", "Namimg Ceremony", 8.30), new Venue(14, "Shilpa Kundra", "Namimg Ceremony", "pune"));
// for (const item of Organizer) {
//     item.display();
// }
