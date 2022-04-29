/*

                                                        Destructuring Arrays Part 1
let a=1;
let b=2;
let c=3;
let d=4;

let myFriends=["moemen","ali","yousof","yehya"];
[a="A",b,c,d,e="ossama"] =myFriends;

console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);


let [,y,z]= myFriends;
console.log(y);
console.log(z);

output
moemen
ali
yousof
yehya
ossama
ali
yousof


                                               Destructuring Arrays Part 2


let myFriends=["Ahmed","sayed","ali",["shadi","Amr",["mohamed","Gamal"]]];

let [, , , [a, , [,b]]]= myFriends;

console.log(a);
console.log(b);


output:
------
shadi
Gamal


                                               Destructuring Arrays Part 3 - Swap Variables

method for beginner


let book = "video";
let video="book";
let stach =book;
book=video;
video=stach;

----------------------------
Advanced method 

let book = "video";
let video="book";

[book,video]=[video,book];

console.log(book);
console.log(video);

output:
------
book
video


                                                                   Destructuring Objects Part 1



const user={
    theName:"osama",
    theAge:39,
    theTitle:"Developper",
    theCountry:"egypt",
};

let {theName,theAge,theTitle,theCountry}=user;

console.log(theName);
console.log(theAge);
console.log(theCountry);


output:
-------

osama
39
egypt




                                                                          Destructuring Objects Part 2




  const user={
    theName:"osama",
    theAge:39,
    theTitle:"Developper",
    theCountry:"egypt",
    skills:{
        html:70,
        css:80,
    },
};

let {theName:n,
    theAge:A,
    theTitle,
    theCountry,
    theColor:co="red",
    skills:{html:h,css}}=user;


console.log(n);
console.log(A);
console.log(theCountry);
console.log(`My Html skill progress is ${h}`);
console.log(`My css skill progress is ${css}`);

const{
    html:skillOne,
    css:skillTwo,
} =user.skills;

console.log(`My Html skill progress is ${skillOne}`);
console.log(`My css skill progress is ${skillTwo}`);





                                                           Destructuring Function Parameters


const user={
    theName:"osama",
    theAge:39,
    theTitle:"Developper",
    theCountry:"egypt",
    skills:{
        html:70,
        css:80,
    },
};

showDetails(user)

function showDetails(obj){
   console.log(`Your name is ${obj.theName}`);
   console.log(`Your age is ${obj.theAge}`);
   console.log(`Your css progress is ${obj.skills.css}`);

}



function showDetails({theName:n,theAge:a,skills:{css:c}}=user){
    console.log(`Your name is ${n}`);
    console.log(`Your age is ${a}`);
    console.log(`Your css progress is ${c}`);
 
 }


                                                     Destructuring Mixed Content

const user={
    theName:"osama",
    theAge:19,
    skills:["html","css","javascript"],
    addresses:{
        egypt:"cairo",
        ksa:"riyadh",
    },
};

const{theName:n,theAge:a,skills:[,,three],addresses:{egypt:e}}=user;


console.log(`Your name is: ${n}`);
console.log(`Your age is : ${a}`);
console.log(`Your Skills is : ${three}`);
console.log(`You live in : ${e}`);


                                                          Destructuring Challenge 122
const user={
    theName:"osama",
    theAge:39,
    theTitle:"Developper",
    theCountry:"egypt",
};

let {theName,theAge,theTitle,theCountry}=user;

--------------------------------------





let chosen=1;
let myFriends=[
    {title:"osama",age:39,availble:true,skills:["html","css"]},
    {title:"Ahmet",age:25,availble:false,skills:["python","Django"]},
    {title:"sayed",age:33,availble:true,skills:["php","laravel"]},
]


let {title,age,availble,skills}= myFriends[chosen];

availble==true?availble="availble":availble="no availble";

console.log(title);
console.log(age);
console.log(availble);
console.log(skills[1]);


                                                           Set Data Types And Methods



let myData=[1,1,1,2,3,"A"];
//let myUniqueData= new Set([1,1,1,2,3]);
//let myUniqueData= new Set(myData);
//let myUniqueData= new Set().add(1).add(1).add(1).add(2).add(3);

let myUniqueData= new Set([1,1,1,2,3]).add("A");
console.log(myUniqueData.has("A"));

console.log(myData);
//myUniqueData.delete(2);
console.log(myUniqueData.delete(2));

console.log(myUniqueData);
console.log(myUniqueData.size);


myUniqueData.clear();
console.log(myUniqueData);
console.log(myUniqueData.size);


output:
-------
true
(6) [1, 1, 1, 2, 3, 'A']
 true
 Set(3) {1, 3, 'A'}
 3
Set(0) {size: 0}
 0

                                                            Set vs WeakSet And Garbage Collector




      let mySet=new Set([1,1,1,2,3,"A","A"]);
      console.log(mySet);
console.log(`size of elements inside set is ${mySet.size}`);

let iterator = mySet.keys();  // let iterator = mySet.values(); =  let iterator = mySet.keys();
console.log(iterator);
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next());



mySet.forEach((el)=>console.log(el));



let myws=new WeakSet([{A:1,B:2}]);
console.log(myws);


                                                            Map Data Type Vs Object




let myObj ={};
let myEmptyObjcet=Object.create(null);
let myMap= new Map();

console.log(myObj);
console.log(myMap);
console.log(myEmptyObjcet);

let myNewObject={
    10:"number",
    "10":"string",
};

console.log(myNewObject[10]);

let myNewMap= new Map();
myNewMap.set(10,"number");
myNewMap.set("10","string");
myNewMap.set(true,"boolean");
myNewMap.set({a:1,b:2},"Object");
myNewMap.set(function doSomthing(){},"function");




console.log(myNewMap.get(10));
console.log(myNewMap.get("10"));

console.log("####");
console.log(myNewObject);
console.log(myNewMap);


                                                                  Map Methods


let myMap= new Map([

    [10,"number"],
    ["name","string"],
    [false,"Boolean"],
]);

//myMap.set(10,"number");
//myMap.set("name","string");

console.log(myMap);
console.log(myMap.get(10));
console.log(myMap.get("name"));
console.log(myMap.get(false));

console.log('######');
console.log(myMap.has(false));





console.log(myMap.size);
console.log(myMap.delete("name"));  // it will done true because there is a name variable
 console.log(myMap.size);
 myMap.clear();
 console.log(myMap.size);

                                                           Map Vs WeakMap

Map => key can be anyting 
Weak=> key can be oject only




let mapUser={
    theName:"zero",
}
let myMap=new Map();
myMap.set(mapUser,"obejctValue");
mapUser=null;
console.log(myMap);

console.log("###".repeat(18));

let WmapUser={
    theName:"zero",
}
let mywMap=new WeakMap();
mywMap.set(WmapUser,"obejctValue");
WmapUser=null;
console.log(mywMap);


                                                            Array.from Method

   console.log(Array.from("osama"));
//['o', 's', 'a', 'm', 'a']
console.log(
    Array.from("12345",function(n){
    return +n + +n;
})
);

console.log(
    Array.from("12345",(n)=>+n + +n));

let myArray=[1,1,1,2,3,4];

//let mySet= new Set(myArray);
//console.log(Array.from(mySet));

console.log([...new Set(myArray)]);

function af(){
    return Array.from(arguments);
}
console.log(af("moemen","khaled","ali",1,2));

// output: (5) ['moemen', 'khaled', 'ali', 1, 2]



                                                               Array.copyWithin Method


let myArray=[10,20,30,40,50,"A","B"];

// myArray.copyWithin(3);   [10, 20, 30, 10, 20, 30, 40]
//myArray.copyWithin(4,6);    [10, 20, 30, 40, 'B', 'A', 'B']
//myArray.copyWithin(4,-1);    [10, 20, 30, 40, 'B', 'A', 'B']
//myArray.copyWithin(1,-2); [10,"A","B",40,50,"A","B"]
//myArray.copyWithin(1,5,6); [10,"A",30,40,50,"A","B"]


console.log(myArray);


                                                                Array.some Method


  let nums=[1,2,3,4,5,6,7];
  let checks= nums.some((e)=> e > 5);
console.log(checks);




----------------------



let nums=[1,2,3,4,5,6,7,9];
let myNumber=8;
let checks= nums.some(function(e){
    return e > this;
  },myNumber);
console.log(checks);

function checkValues(arr,val){
   return arr.some(function(e){
       return e === val;
   })
}

console.log(checkValues(nums,2)); //true
console.log(checkValues(nums,20)); //false


let range={
    min:10,
    max:20,
}
let checkNumInRange = nums.some(function(e){
    return e >= this.min && e<= this.max;
},range)

console.log(checkNumInRange);

  */


  