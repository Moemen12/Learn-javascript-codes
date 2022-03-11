/*
                                                       comparision Opeartors
equal ==

 it will compare the number only as a numbers without looking to datatype of strings                                                      
example:
----------
document.write(100 =="100"); output:true
document.write(-100=="-100");output:true
-----------------------
Not equal !=

example:
----------
document.write(100!="100"); output: false
-----------------------
identical: ===

 it will compare the number only as a numbers and datatype
example:
---------
document.write(100 ==="100"); output false
------------------------

Not identical:
example:
---------
document.write(10!==10); output false

                                                                        logical opearators
! NOT
&& AND
|| OR

document.write(10=="10" && 10>8);output true
  
                                                                if conditions
if syntax
else if to another condition
else without any condition if all conditions above didnt check it will do the else condition
if(condition){
    block of code
}else if(other condition){
    block of code
}

example:
--------
let price= 100;
let discount=false;
let discountAmout=30;
let country="egypt";

if(discount===true){
    price-=discountAmout;
}else if(country==="egypt"){
    price-=40;
}else{
    price-=10;
}

document.write(price);  output 60

other example:
------------
let price= 100;
let discount=false;
let discountAmout=30;
let country="egypt";
let student =true

if(discount===true){
    price-=discountAmout;
}else if(country==="egypt" && student===true){
    price-=discountAmout+30;
}else if(country==="egypt" && student===false){
    price-=discountAmout+10;
}else{
    price-=discountAmout+10;
}

document.write(price); output 40


The ternary operator is a simplified conditional operator like if / else.

Syntax: condition ? <expression if true> : <expression if false>

React ES6 Ternary Operator

example:
--------
let theGender="Male";
let theName="ahmet";

theGender==="Male" ? document.write("MR") : document.write("MRS"); output : MR

save value of condition in varible:
--------------------------------
let theGender="Male";
let theName="ahmet";

let result = theGender==="Male" ?"MR" : "MRS";
document.write(result); output: MR

call variable:
---------------

let theGender="Male";
let theName="ahmet";

let result = theGender==="Male" ?"MR" : "MRS";
document.write(`hello ${result} ${theName}`);
output : hello MR ahmet

multiple condition:
-------------------
let theGender="Male";
let theName="ahmet";
let theAge= "40";

let result = theGender==="Male" ?"MR" : "MRS";
theAge<20 ? document.write(20) : theAge>20 && theAge<60 ?document.write("20 to 60") : theAge>60 ?document.write ("larger then 60") :document.write("Unknown");

output : 20 to 60

                                                        Nullish coalescing operator and logical  or
 
let price=0 or null or 0 or false or "";
document.write(`the price is ${price || 20}`);
ouput: the price is 20
------
document.write(`the price is ${price ?? 20}`);

document.write(`the price is ${price ?? 20}`);
ouput: the price is 0 
------

document.write(`the price is ${price ?? 20}`);
ouput: the price is 20
------

----------------------

document.write(Boolean(100)); output true
document.write(Boolean(-100)); output true
document.write(Boolean(0)); output false
document.write(Boolean(""));  output false
document.write(Boolean(null));  output false

                                                             if challenge "elzero web school 37"

change from normal methode to shortcut methods
example:
--------
let a=10;
a<10 ? document.write(10) : a>=10 && a<=40?document.write("10 to 40") : a>40 ? document.write(">40"):document.write("unknown");
        
output :10 to 40

exercice 2:
-----------
let st="Elzero Web School";
if( (st.length*2).toString() ==="34"){
    document.write("Good");
}
output:  Good
-------


exercice 3:
-----------
let st="Elzero Web School";
if( st[st.indexOf("W")]==="W"){
    document.write("Good");
}
output:  Good
-------

exercice 4:
-----------
if("strin" !== "string"){
    document.write("Good");
}

output:  Good
-------

exercice 5:
-----------
if("number" === "number"){
    document.write("Good");
}

output:  Good
-------

exercice 6:
-----------
let st="Elzero Web School";
if(st.substring(0,6).repeat(2)==="ElzeroElzero"){
    document.write("Good");
}

output:  Good
-------

                                                            switch statement

let day=1;
switch(day){
    default:       //default first case must to be  
        document.write("unknown day");    
    case 0:
        document.write("saturday");
        break;
    case 1:
        document.write("sunday");
        break;
    case 2:  // case 2 and case 3 has the same value monday
    case 3:
        document.write("monday");
        break;    

}

                                                     switch and if challenge
     
Convert from if condition to switch condition 
---------------------------------------------
let job="Manager";
let salary=0;
if(job === "Manager"){
    salary=8000;
}else if(job=== "IT" || job==="Support"){
    salary=6000;
}else if(job==="Developer" || job==="Designer"){
    salary=7000;
}else{
    salary=4000;
}

solution:
--------
let job="Support";
let salary=0;
switch(job){
    default:
    document.write()
    break;
            case "Manager":
        salary=8000;
        document.write(`My Money is ${salary}`);
    break;
            case "IT":
            case "Support":
        salary=6000;
        document.write(`My Money is ${salary}`);
    break;
            case "Developer":
            case "Designer":
        document.write(`My Money is ${salary}`);
    break;
}

output:
------
My Money is 6000


convert from switch condition to if condition
----------------------------------------------
let holidays=0;
let money =0;
switch(holidays){
    case 0:
        money=5000;
        document.write(`My money is ${money}`);
        break;
    case 1:
    case 2:
        money=3000;
        document.write(`My money is ${money}`);
        break;
    case 3:
         money=2000;
         document.write(`My money is ${money}`);
         break;

}

solution:
--------

let holidays=0;
let money =0;

if(holidays===0){
    money=5000;
    document.write(`My money is ${money}`);

}else if(holidays===1 || holidays===2){
    money=3000;
    document.write(`My money is ${money}`);
}
else if(holidays===3){
    money=2000;
    document.write(`My money is ${money}`);
}

output:
-------
My money is 5000


                                                                     Array


let myFriends =["moemen","Ahmet","oussama"];
document.write(`Hello ${myFriends[1]}`);    output: Hello Ahmet
document.write(`Hello ${myFriends[0][2]}`); output: Hello e


let myFriends =["moemen","Ahmet","oussama",["ali","yousof","dilber"]];
document.write(`Hello ${myFriends[3][2][4]}`); output: Hello e


myFriends[0]="ali";
console.log(myFriends); output: ["ali","Ahmet","oussama",["ali","yousof","dilber"]]
                                                                    

let myFriends =["moemen","Ahmet","oussama",["ali","yousof","dilber"]];
console.log(Array.isArray(myFriends)); output: true



*/

