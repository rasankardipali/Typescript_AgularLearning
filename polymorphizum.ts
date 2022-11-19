class Organizer {
    id: number;
    name: string;
    display() {
        console.log("Organization Details");

    }

}
class event1 extends Organizer {
    discription: string;
    strattime: number;
    constructor(id: number, name: string, discription: string, strattime: number) {
        super.display();
        this.id = id,
            this.name = name,
            this.discription = discription,
            this.strattime = strattime,

    }

    display() {
        console.log(`ID:${this.id}   NAME:${this.name}  DISCRIPTION:${this.discription}  STARTTIME:${this.strattime}`);

    }

    
}

class Venue extends Organizer {
    discription: string;
    address: string;
    constructor(id: number, name: string, discription: string, address: string){
        super.display();
        this.id = id,
            this.name = name,
            this.discription = discription,
            this.address = address,

}
    display() {
        console.log(`ID:${this.id}   NAME:${this.name}  DISCRIPTION:${this.discription}  ADDRESS:${this.address}`);

    }


}


let Organizer: Organizer[] = new Array(new event1(12, "Raj Kundra", "Namimg Ceremony", 8.30), new Venue(14, "Shilpa Kundra", "Namimg Ceremony", "pune"));
for (const item of Organizer) {
    item.display();
}
