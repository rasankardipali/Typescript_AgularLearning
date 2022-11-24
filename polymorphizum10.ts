class  Organizer{
    id: number;
    name: string;
    display():void{
        console.log("Organization Details");

    }

 }
//  class event10 extends Organizer{
//     discription: string;
//     address: string;
// constructor(id:number,name:string,discriptio:string,address:string){
//     super();
//     this.id=id,
//     this.name=name,
//     this.discription=this.discription,
//     this.address=address,
//     super.display();
// }

//  }

class event1 extends Organizer{
    discription: string;
    strattime: number;
    constructor(id: number, name: string, discription: string, strattime: number){
        super();
        super.display();
        this.id = id,
            this.name = name,
            this.discription = discription,
            this.strattime = strattime,

    }

    display(){
        console.log(`ID:${this.id}   NAME:${this.name}  DISCRIPTION:${this.discription}  STARTTIME:${this.strattime}`);

    }


}

class Venue extends Organizer {
    discription: string;
    address: string;
    constructor(id: number, name: string, discription: string, address: string){
        super();
        super.display();
        this.id = id,
            this.name = name,
            this.discription = discription
            this.address = address,
    }

    display(){
        console.log(`ID:${this.id}   NAME:${this.name}  DISCRIPTION:${this.discription}  ADDRESS:${this.address}`);

    }
    

}


let Organizer1: Organizer[] = new Array(new event1(12, "Raj Kundra", "Namimg Ceremony", 8.30), new Venue(14, "Shilpa Kundra", "Namimg Ceremony", "pune"));
for (const item of Organizer1) {
    item.display();
}

