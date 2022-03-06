/*
                                                    string methods
Acess with index , index starts from 0 not from 1
example:
-------
              01234
let theName= "ahmet";
document.write(theName[1]); output : h

other method example:
------------------
let theName= "ahmet";
document.write(theName.charAt(4));  output : t

lenght

lenght starts from 1 not from 0 , count the string
example:
--------
let theName= "ahmet";
document.write(theName.length); output : 5

trim:
removes the spaces in the first and the last of string
example:
--------
let theName= " ahmet ";
document.write(theName.trim()); output : ahmet (without spaces)

toUpperCase
all characters will be big lettres:
example:
--------
let theName= " ahmet ";
document.write(theName.toUpperCase()); output :AHMET

toLowerCase
all characters will be small lettres:
example:
--------
let theName= " AHMEt ";
document.write(theName.toLowerCase()); output :ahmet


advanced example:
----------------
let theName= " ahmet ";
I want to see on output only m capital lettre like this M in one code line

document.write(theName.trim().charAt(2).toUpperCase()); output :M

---------------------------------------------

 indexOf()/lastIndexOf():
syntax: indexOf(searching string,start[opt])
lastIndexOf(searching string,start[opt])
what is the difference between them?
by default :
indexOf(): starts from 0 and the count from the first lettres of string
lastIndexOf : starts from 0 and the count from the first lettres of string but it will find the first searching string from the last of string
if result : -1 : the string that you're about to seaching for it,isn't exist


example:
--------
let a="El zero web school";
document.write(a.indexOf("web")); output :8

example:
--------
let a="El zero web school";
document.write(a.indexOf("web",9)); output :-1

example:
-------
let a="El zero web school";
document.write(a.lastIndexOf("o")); output :16

Slice:
string.slice(start, end)
start :The start position.(First character is 0).
!! The end position not including.Default is string length.
example:
-------
let a="El zero web school";
document.write(a.slice(1,5)); output:l ze

repeat:
repeat the string
example:
--------
let a="El zero web school";
document.write(a.repeat(3)); 
output : El zero web schoolEl zero web schoolEl zero web school

split()
The split() method splits a string into an array of substrings.
The split() method returns the new array.
The split() method does not change the original string.
If (" ") is used as separator, the string is split between words.

Syntax
string.split(separator, limit)

example:
--------
let a="El zero web school";
console.log(a.split()); output: ['El zero web school']
exapmle:
-------
let a="El zero web school";
console.log(a.split(" "));
output: ['El', 'zero', 'web', 'school']


example:
--------
let a="El zero web school";
console.log(a.split(" ",2));
output: ['El', 'zero']


substring()
string.substring(start, end)
The substring() method extracts characters, between two indices (positions), from a string, and returns the substring.
The substring() method extracts characters from start to end (exclusive).
The substring() method does not change the original string
If start is greater than end, arguments are swapped: (4, 1) = (1, 4).

example:
--------
let a="El zero web school";
document.write(a.substring(2,7));
output: zero

substr()
string.substr(start, length)
The substr() method extracts a part of a string.
The substr() method begins at a specified position, and returns a specified number of characters.
The substr() method does not change the original string.
To extract characters from the end of the string, use a negative start position.

example:
--------
let a="El zero web school";
document.write(a.substr(2,7));
output: zero   output: zero w

!!! important The arguments of substring() represent the starting and ending indexes, while the arguments of substr() represent the starting index and the number of characters to include in the returned string


includes/ startsWith
searching for a string : output only true of false
syntax: includes(searchingString,length) offset: where i want to starts searching from
example:
-------
let a="El zero web school";
document.write(a.includes("web")); output : true
-------------
let a="El zero web school";
document.write(a.startsWith("E")); output : true



endsWith
it will search if the given lenght ends with the given string 
output only true of false
example:
-------
let a="El zero web school";
document.write(a.endsWith("o")); output false

let a="El zero web school";
document.write(a.endsWith("e",5)); output true
syntax: includes(searchingString,length) 
-----------------------------------

elzero web school challenge: video 30

let a="Elzero Web School";
document.write(a.toUpperCase().charAt(2)+a.slice(3,6)); output:Zero
---------------
let a="Elzero Web School";
document.write(a.charAt(13).toUpperCase().repeat(8)); output:HHHHHHHH
---------------
let a="Elzero Web School";
document.write(a.split(" ",1)); output: [Elzero]
---------------
let a="Elzero Web School";
let b="School";
document.write(a.substr(0,6)+" "+`${b}`);

-----------------------

let a="dilber hasanova";
let b= a.trim().charAt(0).toLowerCase();     //m
let c= a.trim().substring(1).toUpperCase();  //OEMEN SAADEH
let d= c.trim().charAt(c.length-1).toLowerCase(); //h
let e= c.slice(0,-1); //OEMEN SAADE
let answer= `${b}`+`${e}`+`${d}`;
document.write(answer);
*/