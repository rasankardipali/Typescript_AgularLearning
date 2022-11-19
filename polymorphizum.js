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
    function event1(id, name, discription, strattime) {
        var _this = this;
        _super.prototype.display.call(_this);
        _this.id = id,
            _this.name = name,
            _this.discription = discription,
            _this.strattime = strattime,
        ;
        return _this;
    }
    event1.prototype.display = function () {
        console.log("ID:".concat(this.id, "   NAME:").concat(this.name, "  DISCRIPTION:").concat(this.discription, "  STARTTIME:").concat(this.strattime));
    };
    return event1;
}(Organizer));
var Venue = /** @class */ (function (_super) {
    __extends(Venue, _super);
    function Venue(id, name, discription, address) {
        var _this = this;
        _super.prototype.display.call(_this);
        _this.id = id,
            _this.name = name,
            _this.discription = discription,
            _this.address = address,
        ;
        return _this;
    }
    Venue.prototype.display = function () {
        console.log("ID:".concat(this.id, "   NAME:").concat(this.name, "  DISCRIPTION:").concat(this.discription, "  ADDRESS:").concat(this.address));
    };
    return Venue;
}(Organizer));
var Organizer = new Array(new event1(12, "Raj Kundra", "Namimg Ceremony", 8.30), new Venue(14, "Shilpa Kundra", "Namimg Ceremony", "pune"));
for (var _i = 0, Organizer_1 = Organizer; _i < Organizer_1.length; _i++) {
    var item = Organizer_1[_i];
    item.display();
}
