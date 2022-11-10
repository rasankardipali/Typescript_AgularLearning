var array=["J&J","Pfizer","Sputnik"];
console.log("************************Given array:*************************************");

 for (let index = 0; index < array.length; index++) {
    console.log(  array[index]);
    
    
 }
 array.push("Covaxin");
 console.log("************************Given array Destructuring*************************************");
   let [a,b,c,d]=array;
   console.log(a);
   console.log(b);
   console.log(c);
   console.log(d);

   
