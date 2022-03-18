
/*
                                                               Break ,continue,label

let products=["keyboard",10,20,"Mouse","Pen","Pad","Monitor"];
let colors=["red","green","black"];


for(let i=0;i<products.length;i++){
   
    if(typeof  products[i]==="number"){
         continue;
    }
     document.write(products[i]+"<br>");
}

output:
-------
keyboard
Mouse
Pen
Pad
Monitor

------------------------

let products=["keyboard",10,20,"Mouse","Pen","Pad","Monitor"];
let colors=["red","green","black"];


mainLoop: for(let i=0;i<products.length;i++){
    document.write(products[i]);
    nestedLoop: for(let j=0;j<colors.length;j++){
         document.write(`- ${colors[j]}`)
       if(colors[j]==="green"){
           break mainLoop
       }
    }
}

output:
-------
keyboard- red- green

                                                                    for loop advanced



let products=["keyboard","Mouse","Pen","Pad","Monitor","apple"];

let i=0;
for(;;){
    document.write(products[i]+"<br/>");
    i+=1;
    if(i === products.length){
        break;
    }

}

output:
------
keyboard
Mouse
Pen
Pad
Monitor
apple

-------------

let products=["keyboard","Mouse","Pen","Pad","Monitor","apple"];

let i=0;
for(;;){
    document.write(products[i]+"<br/>");
    i+=2;
    if(i === products.length){
        break;
    }

}

output:
------
keyboard
Pen
Monitor

                                                      Practice -Add products to page

        
let products=["keyboard","Mouse","Pen","Pad","Monitor","Iphone"];
let colors=["red","green","blue"];
let showCount =3;

document.write(`<h1>Show ${showCount} Products</h1>`);

for(let i=0;i<showCount;i++){
    document.write(`<div>`);
    document.write(`<h3>[${i+1}]${products[i]}</h3>`);

    for(j=0;j<colors.length;j++){
 document.write(`<p>${colors[j]}</p>`);

    }



    document.write(`<p>${colors.join(" | ")}</p>`)
    document.write(`</div>`);
}

output:

-------
Show 3 Products
[1]keyboard
red

green

blue

red | green | blue

[2]Mouse
red

green

blue

red | green | blue

[3]Pen
red

green

blue

red | green | blue

                                                               while loop

let products=["keyboard","Mouse","Pen","Pad","Monitor","Iphone"];
let index=0;

while(index<products.length){
    document.write(products[index]+"<br>");
    index +=1;

}


output:
---------
keyboard
Mouse
Pen
Pad
Monitor
Iphone



                                                 Do while loop

let products=["keyboard","Mouse","Pen","Pad","Monitor","Iphone"];
let i=0;

do{
    document.write(i);
    i++;
}while(false);

document.write(i);

output:
--------
0
1


                                                    Loop challenge elzero web school 56
                                             

 let myadmins = ["Ahmed", "Osama", "Sayed", "Stop", "Samera", "hsein"];
 let myEmployees = ["Amgad", "Samah", "Ammeer", "Omar", "Othman", "Amany", "Samia", "hamd"];


 let love= myadmins.slice(0,myadmins.indexOf('Stop'));
 let counter =love.length;
 document.write(`<div> We Have ${counter} Admins</div>`+`<hr>`);


 for ( i = 0; i < love.length; i++) {

    document.write(`The Admin For ${i+1} is ${love[i]}`+`<br/>`);
    document.write(`<h3>Team Members</h3>`);

    for (let j = 0, n = 1; j < myEmployees.length; j++) {

    if (love[i][0] === myEmployees[j][0]) {
           document.write(`<p>-${n}${myEmployees[j]}</p>`);

            n++;
         }
   }
 }


 output:
 ------
                                                                Function intro and Basic usage
 
 document.write(typeof document.write);    output: function
 
  function sayHello(){
     document.write("hello world");

 }
 sayHello();

 output: hello world
 -------

                                                                fuction advanced examples
 
  function sayHello(username,age){
    document.write(`hello ${username},Your age is ${age}`);                                                      
    }
    sayHello("moemen");
    
    output: hello moemen,Your age is undefined
    ------
                                                                
    --------------------------------------------------

     function sayHello(username,age){
    document.write(`hello ${username},Your age is ${age}`);                                                      
    }
    sayHello("moemen",37);

    output: hello moemen,Your age is 37
    -------

    --------------------------------------------------
    
     function sayHello(username,age){
    
    if(age<20){
        document.write(`App is Not Suitable For You`);
    }
    else{
        document.write(`Hello ${username} Your age is ${age}`);
    }
       }
    sayHello("moemen",17);

    output:    App is Not Suitable For You
    -------

--------------------------------------------------------
   
     function generateYears(start,end){
    for(let i=start ; i<=end ;i++){
         document.write(i+"<br>");
    }
}
 generateYears(1982,1990);                                                  

output:
------ 
1983
1984
1985
1986
1987
1988
1989
1990

--------------------------------------------------------

function generateYears(start,end,exclude){
    for(let i=start ; i<=end ;i++){
        if(i===exclude){
            continue;

        }
         document.write(i+"<br>");
    }
}
 generateYears(1982,1999,1995);            


 output:
 --------
1983
1984
1985
1986
1987
1988
1989
1990
1991
1992
1993
1994
1996
1997
1998
1999


                                                          Function return use cases

return :store value and all code after it will not execute


function calc(num1,num2){
    return num1+num2;
    
}

let result= calc(10,20);
document.write(result);

output:  30
-------

-------------------------------------------------

function generate(start,end){
    for(let i=start;i<=end;i++){
        document.write(i+"<br>");
        if(i===15){
            return 'Interrupting';
        }
    }
}
generate(10,20);

output:
--------
10
11
12
13
14
15

                                                                    function default parameters
            
         first method                                                       

 function sayHello(username,age){

if(age===undefined){
     age ="unknown";
        }
     return `hello ${username},Your age is ${age}`;                                                      
     }
    document.write(sayHello("Moemen"));                                                              


    output: hello Moemen,Your age is unknown
    -------

   -------------------------------------------------

            
   Second methode

 function sayHello(username,age){
      
        age= age ||"Unknown";
     return `hello ${username},Your age is ${age}`; 

     }
    document.write(sayHello("Moemen"));

    output: hello Moemen,Your age is Unknown
    -------
 

    --------------------------------------------------------
    third method (escma 6)

   function sayHello(username="Unknown",age="Unknown"){
      
     return `hello ${username},Your age is ${age}`; 

     }
    document.write(sayHello());


    output: hello Unknown,Your age is Unknown
    --------



                                                                */


 