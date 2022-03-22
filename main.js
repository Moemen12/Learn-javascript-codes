
/*
                               Function Rest Paramters
                                  
function calc(...numbers){


     let result=0;

    for(let i=0;i<numbers.length;i++){
        result+= numbers[i];
    }
      return `Final Result is ${result}`;
}

document.write(calc(10,20,30,50));

output: Final Result is 110
--------
                            
                                          Function Ultimate practice



function showInfo(us="Un",ag="Un",rt=0,show="Yes",...sk){

 document.write('<div>');
 document.write(`<h2>Welcome ${us}</h2>`);
 document.write(`<p>Age: ${ag}</p>`);
 document.write(`<p>Hour Rate: $${rt}</p>`);

 if(show==="Yes"){
     if(sk.length>0){

        document.write(`<p>Skills:${sk.join(" | ")}</p>`);

     }else{
        document.write(`<p>No Skills</p>`);
     }
     
 }
 else{
    document.write(`<p>Skills is Hidden</p>`);
 }
 document.write('</div>');

}

showInfo("moemen",33,20,"Yes","html","css");

output:
------

Welcome moemen
Age: 33

Hour Rate: $20

Skills:html | css


                                                                random arguments function challenge


function showDetails(a,b,c){
    let arr=[a,b,c];
    let name,age,q;
     for(let i=0;i<arr.length;i++){
            
       if(typeof(arr[i])==="string"){  
           name =arr[i]; 
       }
      else if(typeof(arr[i])==="number"){  
             age =arr[i];
    }
    else if(typeof(arr[i])==="boolean"){ 
        q= arr[i];
        if(q===true){
            work =("Available For Hire");
        }else if(q===false){
            work= ("Not Available For Hire");
        }
          
    }
    }

    document.write(`Hello ${name}, Your age Is ${age},You are ${work}`);
}
showDetails("moemen",22,false);   

output:
-------
Hello moemen, Your age Is 22,You are Not Available For Hire


                                                          Anonymous Function and practice


 Anonymous Function : function without a name and maded for special work, and we dont
 need to call it in other place

 normal function we can call before the function without any wrong like undefined
 Anonymous Function : we can't call it without declaration

let calculator = function(num1,num2){
    return num1+num2;
}

document.write(calculator(10,20));

output:30
-------
                                                              Return nested function

nested function: function inside function

example 1
---------

function sayMesaj(fName,lName){
    let message=`Hello`;
    //Nested function 
    function concatMsg(){
        message=`${message} ${fName} ${lName}`;
    }
    concatMsg();
    return message;
}

document.write(sayMesaj("moemen","saade"));


output: Hello moemen saade
------

example 2
---------
function sayMesaj(fName,lName){
    let message=`Hello`;
    //Nested function 
    function concatMsg(){
         return`${message} ${fName} ${lName}`;
    }
    return concatMsg();
}

document.write(sayMesaj("moemen","saade"));

output: Hello moemen saade
------



example 3
---------

function sayMesaj(fName,lName){
    let message=`Hello`;
    //Nested function 
    function concatMsg(){
        function getFullName(){
            return `${fName} ${lName}`;      
        }
         return`${message} ${getFullName()}`;
    }
    return concatMsg();
}

document.write(sayMesaj("moemen","saade"));

output: Hello moemen saade
------

                                                                Arrow function Syntax

Arrow functions were introduced in ES6.

Arrow functions allow us to write shorter function syntax:
we can use it if we have one line in block statement
if we have only 1 parameters or we don't any have paramters, we can remove ()
we can replace () by under score _


Normal function

let print = function(){
    return 10;
}       
document.write(print());   output: 10

Arrow function
---------------
let print = _ => 10; 
document.write(print());

output: 10
--------

example 2
---------
Normal function

let print = function(num){
    return num;
}      
document.write(print(100));

Arrow function
-----------------
let print = num => num;
  
document.write(print(100));

output:100
--------


example 3
---------
Normal function

let print = (num1,num2){
    return num1+num2;
}      
document.write(print(100,30));
output: 130
-------

Arrow function
-----------------

let print = (num1,num2) =>num1+num2; 
document.write(print(100,30));

output: 130
---------


                                                                Scope -Block


    when we use 'let' in block of scoop, the variable will be privat for the scoop only                                                          

example:
---------
var x=10;
if(10===10){
    let x=50;
}
document.write(x);

output: 10
-------

example 2:
--------
var x=10;
if(10===10){
    let x=50;
    document.write(`From if block ${x}`+`<br/>`);
}
document.write(`From Global ${x}`);

output: 
-------
From if block 50
From Global 10


                                                             Arrow function challenge
                                                               


let names = function(...something){

    return "String ["+something.join("],[")+"] => Done !";    

};
document.write(names("moemen","ahmad","ali","yehya"));


converting to arrow function
------------------------
let names =(...something) => "String ["+something.join("],[")+"] => Done !";    
document.write(names("moemen","ahmad","ali","yehya"));


------------------------------------

let myNumbers=[20,50,10,60];
let calc=(one,two,...nums)=> 10+myNumbers[0]+myNumbers[1];

document.write(calc(10,myNumbers[0],myNumbers[1]));



                                         Higher order function-Map


let myNums=[1,2,3,4,5,6];

let newArray=[];
for(let i=0;i<myNums.length;i++){
    newArray.push(myNums[i]+myNums[i]);
}
document.write(newArray);


output: [2,4,6,8,10,12]
------
----------------------------
//same idea with map
let myNums=[1,2,3,4,5,6];

let addSelf= myNums.map(function(element,index,arr){

    return element+element;
  

},10 );
document.write(addSelf);

output: [2,4,6,8,10,12]
------


//same idea with map/arrow function
let myNums=[1,2,3,4,5,6];


let addSelf=myNums.map((element)=> element+element)
document.write(addSelf);


output: [2,4,6,8,10,12]
------


                                                    higher order function map practice


let swappingCases ="elZERo";
let invertedNumbers=[1,-10,-20,15,100,-30];
let ignoreBooleans="ELzi23er4o";

let sw=swappingCases
.split("")
.map(function(element){
    return element === element.toUpperCase()?element.toLowerCase():element.toUpperCase();}).join("");
console.log(sw);


output:  ELzerO 
-------

-------------------------------------


let swappingCases ="elZERo";
let invertedNumbers=[1,-10,-20,15,100,-30];
let ignoreNumbers="ELzi23er4o";

let inv=invertedNumbers.map(function(ele){
    return -ele;
})
console.log(inv);

output:
------
[-1, 10, 20, -15, -100, 30]


--------------------------
let swappingCases ="elZERo";
let invertedNumbers=[1,-10,-20,15,100,-30];
let ignoreNumbers="ELz123er4o";

let ing =ignoreNumbers.split("").map(function(ele){
   return isNaN(parseInt(ele))?ele:"";
})
.join("");
console.log(ing);


output:
------
ELzero

 */


