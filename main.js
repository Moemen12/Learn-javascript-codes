/*                                                Data types Intro
   string
   --------
console.log("moemen"); output: moemen
console.log(typeof 'moemen'); output:string
console.log(typeof("moemen")); output:string

   number
   ------
console.log(9000); output: 9000
console.log(typeof(9000));  output: number
console.log(typeof(900,30));  output: number
console.log(typeof 900.30); output:number

Array =>object
-------------
console.log(typeof[10,15,19]); output: object
console.log(typeof["lola","ali","ahmad"]); output: object

object
------
console.log(typeof{name:'osama',age:16,country:'egypt'}); output :object

boolean
--------
console.log(typeof true); output: boolean

undefined
---------
console.log(typeof undefined); output : undefined

Null:
------
console.log(typeof null); output :null


                                                         how do i declare a variable:

var/let/const variableName = value
example:
----------
var user= "moemen";
let username = "ali";
const number = 1;


                                                          var,let,const cmpare:
redeclare:
-----------
var : i can redeclare the variable 
let and const :  i can't redeclare the variable 
first example:
------------
var name ="moemen";
var name ="ahmad";
console.log(name); output : ahmad 

second example:
------------
let name ="moemen";
let name ="ali";
console.log(name); output : Error / i can't redeclare it using let/const

Acess before declare:
--------------------
example :
console.log(user);
var user ="moemen";  output(undefined)

var output(undefined)
let output(error)
const output(error)

                                                                 concatenation
example:
-------
let a ="we love";
let b ="java script";
document.write(`${a}${b}`);
output
------
we lovejava script

-----------------------------------
let a ="we love";
let b ="java script";
document.write(`${a}<br>${b}`);

output
------
we love
java script

                                             challenge in video 17 "el zero web school"

let titleName="Elzero",descriptionSite="EL zero web school",theDate="25/10";
let kart= `
   <div class="codes">
     <h3>${titleName}</h3>
     <p>${descriptionSite}</p>
     <span>${theDate}</span>
</div>
`;
let torepeat = kart.repeat(4);
document.write(torepeat);

                                                    Arithmetic operators

document.write(10+10); output : 20
document.write(10+"moemen"); output : 10moemen
document.write(10-10); output : 0
document.write(10-"moemen"); output : NaN
document.write(10*10); output : 100
document.write(20/10); output : 2
document.write(2**4); output : 16
document.write(10%2); output : 0

let user= 1;
document.write(++user);
output:
-------
2

let user= 1;
document.write(user++ +'<br>');
document.write(user);
output:
-------
1
2
   
                                              unary plus and negation operators

 document.write(+100 +"<br>");
 document.write(+"100" +"<br>");
 document.write(+"moemen" +"<br>");
 document.write(+"12.3" +"<br>");
 document.write(+null +"<br>");
 document.write(+true +"<br>");
 document.write(+false +"<br>");

output:
100
100
NaN
12.3
0
1
0



document.write(-100 +"<br>");
document.write(-"100" +"<br>");
document.write(-"-100" +"<br>");
document.write(-"moemen" +"<br>");
document.write(-"12.3" +"<br>");
document.write(-null +"<br>");
document.write(-true +"<br>");
document.write(-false +"<br>");

output:
-100
-100
100
NaN
-12.3
0
-1
0
                                                         assignment operators
                                                         
let a=100;
a = a+100;
document.write(a); output 200                                                   


let a=100;
a+=100;
document.write(a); output 200  

let a=100;
a/=50;
document.write(a); output 2

with all assignment operators ,it is the same


                                                     assignment operators challenge
Youtube elzero web school video 22

let a=10;
let b="20";
let c=80;
document.write(++a + +b++ + +c++ - +a++); output 100
document.write(++a + -b + +c++ - -a++ + +a); output 94
document.write(--c + +b + --a* +b++ - +b*a + --a - +true); output 97
---------------------
let d="-100";
let e="20";
let f=30;
let g =true;

document.write(+e * -d); otuput 2000
                                                                Number
document.write(1000000);   output 1000000
document.write(1_000_000); output 1000000
document.write(1e6);       output 1000000
document.write(10**6);     output 1000000
document.write(10*10*10*10*10*10); output 1000000
document.write(1000000.0);  output 1000000

                                                       Number methods    
toString(): Convert a number to a string:
-----------
document.write((100).toString());   output :100 and it's a string
document.write(100..toString());    output :100  other example with the same method
document.write(100.10.toString());  output :100.1



toFixed :
--------
The toFixed() method converts a number to a string.
The toFixed() method rounds the string to a specified number of decimals.

document.write(100.5555555.toFixed(2)); output :100.56

parseInt:
--------
The parseInt method parses a value as a string and returns the first integer.


document.write(parseInt("100")); output :100 and it's a string
document.write(Number("100 osama"));
document.write(+"100 osama");
document.write(parseInt("100 osama"));
document.write(parseInt("osama 100 osama"));
document.write(parseInt("100.500 osama"));
document.write(parseFloat("100.500 osama"));

output:
------
NaN
NaN
100
NaN
100
100.5

isInteger:
---------
document.write(Number.isInteger("100"));
document.write(Number.isInteger(100.500));
document.write(Number.isInteger(100));

output:
-------
false
false
true

isNaN:
-----
In JavaScript NaN is short for "Not-a-Number".

The isNaN() method returns true if a value is NaN.

The isNaN() method converts the value to a number before testing it.

isNaN(123); output : false
isNaN(-1.23); output : false
isNaN(5-2); output : false
isNaN(0); output : false
isNaN('Hello');  output : true
isNaN('2005/12/12'); output : true

Difference Between isnan() and Number.isnan()
------------------------------------------
isNaN() method returns true if a value is Not-a-Number.

Number.isNaN() returns true if a number is Not-a-Number.

In other words:

isNaN() converts the value to a number before testing it.

Examples
---------
isNaN('Hello');  This returns true;
Number.isNaN('Hello'); This returns false;
 
                                                               Math object

Math.round 
-----------
:if the number after virgul is more then 4 , the whole number will increase by one 
document.write(Math.round(99.5)); output : 100
document.write(Math.round(99.4));  output : 99
document.write(Math.round(99.2)); output : 99


Math.ceil: 
---------
it will increase to the next number direckt 
document.write(Math.ceil(99.1)); output : 100

Math.floor: 
-----------
it will disincrease to the next number direckt
document.write(Math.floor(99.9));  output : 99

Math.max:
---------
it will give the higher number 
document.write(Math.max(49,44,-33,33,2));  output : 49 

Math.min:
---------
it will give the lower number 
document.write(Math.min(49,44,-33,33,2));  output : -33

Math.pow:
---------
it will give the power of a number
document.write(Math.pow(2,4));  output : 16

Math.random:
----------
it will give a number randomly
document.write(Math.random()); output : when do you refresh the page a new number will be appear


Math.trunc:
------------
it will remove all number after the decimal point
document.write(Math.trunc(99.5));  output : 99
*/
