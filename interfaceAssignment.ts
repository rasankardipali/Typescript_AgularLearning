interface IEmployee1{
    age:number,
    name:string
}
 interface IEmployee2{
    emp_address:string,
    emp_dept:string

 }

 interface Icompany extends IEmployee1,IEmployee2{
branch_no:number,
com_name:string
 }
    


 var myCompany1:Icompany={
    age:35,
    name:"Radheshyam",
    emp_address:"Natepute",
    emp_dept:"IT",
    branch_no:30,
    com_name:"TATA",


 }
 console.log(myCompany1);
 