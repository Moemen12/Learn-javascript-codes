///                                                 Higher order functions


/*
let friends=["ahmed","sameh","sayed","asmaa","amgad","israa"];
let numbers=[11,20,2,5,17,10];


let filterFriends = friends.filter(function(element){
    return element.startsWith("a");
});

console.log(filterFriends);

output: ["ahmed","asmaa","amgad"]
--------

----------------------------
other exapmle:
-------------
let numbers=[11,20,2,5,17,10];
let evenNumbers= numbers.filter(function(el){
    return el %2===0;
})
console.log(evenNumbers);

output: [20, 2, 10]
--------

pratice:
--------

let sentences="I love Foood Code Too Playing Much";
let smallWords= sentences.split(" ").filter(function(ele){
    return ele.length<=4;
}).join(" ");
console.log(smallWords);

output:
--------
I love Code Too Much
---------------------------------


let mix="A13BS2zX";

let mixedContents= mix.split("").filter(function(ele){
    return !isNaN(parseInt(ele));
}).map(function(ele){
    return ele * ele;
})
.join("");
console.log(mixedContents);

output: 194
------- 

                                                               High order reduce


                                                               let nums =[10,20,15,30];

let add =nums.reduce(function(acc,current,index,arr){
    console.log(`Acc => ${acc}`);
    console.log(`current elements => ${current}`);
    console.log(`Current element index => ${index}`);
    console.log(`Array => ${arr}`);
    console.log(acc+current);
    console.log(`################`);
    return acc+current;
})
console.log(add);

ouput:
------
Acc => 10
current elements => 20
Current element index => 1
Array => 10,20,15,30
 30
################
Acc => 30
current elements => 15
 Current element index => 2
 Array => 10,20,15,30
 45
 ################
 Acc => 45
 current elements => 30
 Current element index => 3
 Array => 10,20,15,30
 75
 ################
 75

 -----------------------------------


 let nums =[10,20,15,30];

let add =nums.reduce(function(acc,current,index,arr){
    console.log(`Acc => ${acc}`);
    console.log(`current elements => ${current}`);
    console.log(`Current element index => ${index}`);
    console.log(`Array => ${arr}`);
    console.log(acc+current);
    console.log(`################`);
    return acc+current;
},5)
console.log(add);


output:
------

Acc => 5
current elements => 10
Current element index => 0
Array => 10,20,15,30
 15
################
Acc => 15
current elements => 20
 Current element index => 1
 Array => 10,20,15,30
 35
 ################
 Acc => 35
 current elements => 15
 Current element index => 2
 Array => 10,20,15,30
 50
 ################
 Acc => 50
 current elements => 30
 Current element index => 3
 Array => 10,20,15,30
 80
 ################
 80
  
                                                                  Reduce pratice



let theBiggest=["bla","propaganda","other","AAA","Battery","Test"];


let check =theBiggest.reduce(function(acc,current){
    console.log(`Acc => ${acc}`);
    console.log(`current elements => ${current}`);
    console.log(acc.length > current.length ?acc:current);
    console.log(`################`);
    return acc.length > current.length ?acc:current;
});

console.log(check);

output:
--------

Acc => bla
current elements => propaganda
 propaganda
################
 Acc => propaganda
current elements => other
propaganda
 ################
 Acc => propaganda
 current elements => AAA
 propaganda
 ################
Acc => propaganda
 current elements => Battery
 propaganda
 ################
 Acc => propaganda
 current elements => Test
propaganda
 ################
 propaganda

-------------------------

let removeChars=["E","@","@","L","Z","@","@","E","R","@","O"];

let finalString= removeChars.filter(function(ele){
   return !ele.startsWith("@");
}).reduce(function(acc,current){
    return `${acc}${current}`;
})
console.log(finalString);


output:
-------
ELZERO
                                        Higher order functions challenge video 78 elzero web school

let myString ="1,2,3,EE,l,z,e,r,o,_,W,e,b,_,S,c,h,o,o,l,2,0,Z";

let solution= myString.split(",").filter(function(ele){

  return isNaN(parseInt(ele));
}).map(ele =>ele ==="_"?" ":ele).filter(function(ele){
    return !ele.startsWith("Z");
})
.join("").replace("EE","E");

console.log(solution);


output: Elzero Web School
------

                                        */




