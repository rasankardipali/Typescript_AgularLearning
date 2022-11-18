class Person{
    name:string;
    address:string;
   
    display(){
        console.log("In BASE class");
        console.log(this.name+" "+this.address);
        
        
    }
}
 
class student extends Person{
   rollno:number;
    
   

    constructor(  rollno:number,name:string,address:string){
        super();
         this.rollno=rollno,
        this.name=name,
        this.address=address
    }

   display(){
    console.log("In student class");
    console.log(this.rollno+" "+this.name+" "+this.address);
   }
}


class Employee extends Person{
    emp_name:string;
    constructor(emp_name:string,name:string,address:string){
        super();
        
        this.emp_name=emp_name,
        this.name=name,
        this.address=address
    }
  display(){
    console.log("In Employee class");
    console.log(this.emp_name+" "+this.name+" "+this.address);
  
  }
}
class Trainer extends Person{
    trname:string;
    constructor(trname:string,name:string,address:string){
        super();
        this.trname=trname,
        this.name=name,
        this.address=address

    }
  display(){
    console.log("In Trainer  class");
    console.log(this.trname+" "+this.name+" "+this.address);
  }

}

var p1=new student(112,"Dipali", "Natepute");
var p2=new Employee(" IT traing","Dipali", "Natepute");
var p3=new Trainer("raghav","Dipali", "Natepute");
p1.display();
p2.display();
p3.display();