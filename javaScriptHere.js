         /*                                                       Using lenght with array

        let myFriends = ["Ahmet","mohamed","sayed","Alaa"];
        document.write(myFriends.length); output : 4



         let myFriends = ["Ahmet","mohamed","sayed","Alaa"];
         myFriends.length =2;
         document.write(myFriends); output: Ahmet,mohamed


                                                                 Add and Remove from array
unshift:
---------
Add element to the starting of array
syntax: stringName.unshift("element1","element2");
let myFriends = ["Ahmet","mohamed","sayed","Alaa"];
console.log(myFriends); 
output:
 ['Ahmet', 'mohamed', 'sayed', 'Alaa']
myFriends.unshift("moemen","hiba");
console.log(myFriends); 

output:
 [
    "moemen",
    "hiba",
    "Ahmet",
    "mohamed",
    "sayed",
    "Alaa"
]

push:
------
Add element to the ending of array
syntax: stringName.push("element1","element2");
  
let myFriends = ["Ahmet","mohamed","sayed","Alaa"];
console.log(myFriends);
output:
['Ahmet', 'mohamed', 'sayed', 'Alaa']

myFriends.push("moemen","hiba"); 
console.log(myFriends);
output:
[
    "Ahmet",
    "mohamed",
    "sayed",
    "Alaa",
    "moemen",
    "hiba"
]

shift:
------
remove the first element from array
syntax: stringName.shift();

let myFriends = ["Ahmet","mohamed","sayed","Alaa"];
console.log(myFriends);
output:
['Ahmet', 'mohamed', 'sayed', 'Alaa']

myFriends.shift();
console.log(myFriends);
output:
Ahmet

pop:
-----
remove the last element from array
syntax: stringName.shift();
let myFriends = ["Ahmet","mohamed","sayed","Alaa"];
console.log(myFriends);
output:
['Ahmet', 'mohamed', 'sayed', 'Alaa']

let myFriends = ["Ahmet","mohamed","sayed","Alaa"];
myFriends.pop();
console.log(myFriends);
['Ahmet', 'mohamed', 'sayed']

                                                                Searching array
    indexOf:
    -------
    search from the beginning 

    indexOf(search element , offset)   

let myFriends = ["Ahmet","mohamed","sayed","Ahmet"];

console.log(myFriends.indexOf("Ahmet")); output:0
console.log(myFriends.indexOf("Ahmet",1));  output: 3



    lastIndexOf:
    -----------
    search from the ending
    lastIndexOf(search element , offset)
       
 let myFriends = ["Ahmet","mohamed","sayed","Ahmet"];

console.log(myFriends.lastIndexOf("Ahmet")); output: 3
console.log(myFriends.lastIndexOf("Ahmet",1));  output:0
  
       
       

                                                           Sorting arrays

The sort() method sorts an array alphabetically:

 let myFriends = [10,"Ahmet","mohamed",1000,100,20,"20","sayed","Ahmet",-20,-10];

console.log(myFriends); output:
[10, 'Ahmet', 'mohamed', 1000, 100, 20, '20', 'sayed', 'Ahmet', -20, -10]
console.log(myFriends.sort()); output:
[-10, -20, 10, 100, 1000, 20, '20', 'Ahmet', 'Ahmet', 'mohamed', 'sayed']
console.log(myFriends.reverse()); output:
['sayed', 'mohamed', 'Ahmet', 'Ahmet', '20', 20, 1000, 100, 10, -20, -10]                                                             
                                                           
                                                           
                                                           
                                                             Slicing array 
                                                        
let myFriends = ["Ahmet","mohamed","sayed","Ahmet"];

console.log(myFriends); 
output:
------
['Ahmet', 'mohamed', 'sayed', 'Ahmet']

console.log(myFriends.slice());
output:
------
['Ahmet', 'mohamed', 'sayed', 'Ahmet']
console.log(myFriends.slice(1)); 
output:
------
 ['mohamed', 'sayed', 'Ahmet']
console.log(myFriends.slice(1,3)); 
output:
------
 ['mohamed', 'sayed']
console.log(myFriends.slice(-3));
output:
------
['mohamed', 'sayed', 'Ahmet']

console.log(myFriends.slice(1,-2)); 
output:
------
['mohamed']
console.log(myFriends.slice(-4,-2)); 
output:
------
['Ahmet', 'mohamed']


Splice                                                  

The splice() method adds and/or removes array elements.
The splice() method overwrites the original array.

array.splice(index, howmany, item1, ....., itemX)

index	Required.
The position to add/remove items.
Negative value defines the position from the end of the array.
howmany	Optional.
Number of items to be removed.

myFriends.splice(0,0,"samir","moemen"); 
console.log(myFriends);

['samir', 'moemen', 'Ahmet', 'mohamed', 'sayed', 'Ahmet']


                                                                            joinning arrays


let myFriends = ["Ahmet","mohamed","sayed","Ahmet"];
let schoolFriends=["nazih","ali"];
let myNewFriends=["samar","Yehya"];
let allFriends= myFriends.concat(myNewFriends,schoolFriends,"khaled",[1,2]);
console.log(allFriends);

output:
-------
['Ahmet', 'mohamed', 'sayed', 'Ahmet', 'samar', 'Yehya', 'nazih', 'ali','khaled',1,2]


join()
------
The join() method returns an array as a string.

The join() method does not change the original array.

Any separator can be specified. The default is comma (,).

Syntax
array.join(separator)

let myFriends = ["Ahmet","mohamed","sayed","Ahmet"];
let schoolFriends=["nazih","ali"];
let myNewFriends=["samar","Yehya"];
let allFriends= myFriends.concat(myNewFriends,schoolFriends);


console.log(allFriends.join());
console.log(allFriends.join(""));
console.log(allFriends.join(" @ "));
console.log(allFriends.join("|"));
console.log(allFriends.join("|").toUpperCase());


output:
-------
 Ahmet,mohamed,sayed,Ahmet,samar,Yehya,nazih,ali
 AhmetmohamedsayedAhmetsamarYehyanazihali
 Ahmet @ mohamed @ sayed @ Ahmet @ samar @ Yehya @ nazih @ ali
 Ahmet|mohamed|sayed|Ahmet|samar|Yehya|nazih|ali
 AHMET|MOHAMED|SAYED|AHMET|SAMAR|YEHYA|NAZIH|ALI


                                                                 Array challenge elzero web school 47


exercice 1
----------
let zero =0;
let counter=3;
let my=["Ahmed","Mazero","Elham","Osama","Gamal","Ameer"];
console.log(my.slice(zero,++counter).reverse());

output:
------
['Osama', 'Elham', 'Mazero', 'Ahmed']

exercice 2
----------
let zero =0;
let counter=3;
let my=["Ahmed","Mazero","Elham","Osama","Gamal","Ameer"];

console.log(my.slice(++zero,counter).reverse());

output:
------
['Elham', 'Mazero']


exercice 3
----------
let zero =0;
let counter=3;
let my=["Ahmed","Mazero","Elham","Osama","Gamal","Ameer"];

console.log('"'+my.slice(++zero,counter).reverse().toString().substring(--zero,--counter)+my[++zero].slice(counter)+'"');

output
------
"Elzero"


exercice 4
----------
let zero =0;
let counter=3;
let my=["Ahmed","Mazero","Elham","Osama","Gamal","Ameer"];

console.log('"'+my[++zero].slice(++counter)+'"');

output:
------
"ro"



                                                         For and concept of loop

for(i=0;i<10;i++){
    document.write("moemen"+"<br/>");
}


output:
-------
moemen
moemen
moemen
moemen
moemen
moemen
moemen
moemen
moemen
moemen


                                                         

                                                        looping on sequences


 let my=[1,2,"Ahmed","Mazero","Elham","Osama","Gamal","Ameer"];
  let onlyNames =[];
 

 for(let i=0;i<my.length;i++){
    if(typeof(my[i])=== "string"){
        onlyNames.push(my[i]);
    }
 }
 document.write(onlyNames);
 




                                                        Nested loops and Trainings
                                                                
                                                                

 let products=["keyboard","Mouse","Pen","Pad","Monitor"];
 let color=["red", "green","black"];
 let models=[2020,2021];
 
 for(let i=0; i<products.length;i++){
    console.log("#".repeat(15));
    console.log(`# ${products[i]}`);
    console.log("#".repeat(15));
    console.log("Colors: ")
    for(let j=0; j<color.length;j++){
        console.log(`- ${color[j]}`);
    }
    for(let k=0; k<models.length;k++){
        console.log(`- ${models[k]}`);
    }

 }
 
 
 output:
 -------
 ###############
# keyboard
 ###############
 Colors: 
 red
 green
black
2020
2021
###############
# Mouse
###############
 Colors: 
 red
 green
 black
2020
2021
###############
# Pen
 ###############
 Colors: 
red
green
 black
2020
 2021
###############
 # Pad
 ###############
 Colors: 
 red
 green
black
2020
 2021
###############
 # Monitor
 ###############
Colors: 
  red
 green
 black
 2020
2021
 
 
 
 
 
 
 */
