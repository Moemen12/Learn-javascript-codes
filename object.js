//                                               introduction to object
/*

let user={
    theName:"Osama",
    theAge:38,
    sayHello:function(){
       return ("Hello");
    },
};
console.log(user.theName);
console.log(user.theAge);
console.log(user.sayHello());

output:
------
Osama
 38
Hello

                                             Dot notation vs bracket notation


let myVar="country";
let user={
    theName:"moemen",
    country:"egypt",
};
console.log(user.theName);
console.log(user.myVar);
console.log(user[myVar]);


output:
--------
moemen
undefined
egypt


                                                Nested object and advanced trainings



let user={
    name:"moemen",
    age:37,
    skills:["Html","css","JS"],
    available: false,
    addresses:{
        ksa: "riyad",
        egypt: {
            one:"cairo",
            two:"giza",
        },
    },
    checkAv: function(){
        if(user.available===true){
   return "free for work";
        }else{
    return "Not free";
        }
    },
};
console.log(user.name);
console.log(user.age);
console.log(user.skills);
console.log(user.skills.join(" | "));
console.log(user.skills[2]);
console.log(user.addresses.ksa);
console.log(user.addresses.egypt);
console.log(user["addresses"].egypt.one);
console.log(user["addresses"]["egypt"]["one"]);
console.log(user.checkAv());


output:
------

(3) ['Html', 'css', 'JS']0: "Html"1: "css"2: "JS"length: 3[[Prototype]]: Array(0)
 Html | css | JS
 JS
 riyad
 {one: 'cairo', two: 'giza'}one: "cairo"two: "giza"[[Prototype]]: Object
 cairo
 cairo
 Not free


                                   Create Object with new keyword


let user={
   age:20,
}
console.log(user);

user.age= 38;
user["country"]="lebanon";

user.sayHello=function(){
    return "Hello";
}

console.log(user);
console.log(user.age);
console.log(user.country);
console.log(user.sayHello());


other methode to create object

let user= new Object({
    age:20,
});

 console.log(user);
 
 user.age= 38;
 user["country"]="lebanon";
 
 user.sayHello=function(){
     return "Hello";
 }
 
 console.log(user);
 console.log(user.age);
 console.log(user.country);
 console.log(user.sayHello());
 

output:
-------

{age: 20}
{age: 38, country: 'lebanon', sayHello: ƒ}
 38
 lebanon
Hello

 
                                                    This keyword

let user={
    age:38,
    ageInDays: function(){
        return user.age*365;
        }
}
console.log(user.age);
console.log(user.ageInDays());

Or


let user={
    age:38,
    ageInDays: function(){
        return this.age*365;
        }
}
console.log(user.age);
console.log(user.ageInDays());

the same output:
-----------
8
13870
 

                                                              Create object with create methode


let user={
    age:20,
    doubleAge:function(){
        return this.age*2;
        },
};
console.log(user);
console.log(user.age);
console.log(user.doubleAge());


let obj= Object.create({});
obj.a=100;
console.log(obj);


let CopyObj= Object.create(user);
CopyObj.age=50;

console.log(CopyObj);
console.log(CopyObj.age);
console.log(CopyObj.doubleAge());



output:
-------
{age: 20, doubleAge: ƒ}
20
40
 {a: 100}a: 100[[Prototype]]: Object


 {age: 50}
 age: 50
 [[Prototype]]: Object


 age: 20
 doubleAge: ƒ ()
[[Prototype]]: Object

 50
 100


                                                   create object with assign method


let obj1={
    prop1:1,
    method1: function(){
        return this.prop1;
    },
};

let obj2={
    prop2:2,
    method1: function(){
        return this.prop2;
    },
};

let targetObject={
    prop1:5,
    prop2:3,
};


let  finaObject= Object.assign(targetObject,obj1,obj2);
finaObject.prop1=200;
finaObject.prop4=4;
console.log(finaObject);

let newObject = Object.assign({},obj1,{prop5:5,prop6:6});
console.log(newObject);


output:
-------

{prop1: 200, prop2: 2, prop4: 4, method1: ƒ}
method1: ƒ ()
prop1: 200
prop2: 2
prop4: 4
[[Prototype]]: Object




{prop1: 1, prop5: 5, prop6: 6, method1: ƒ}
method1: ƒ ()
prop1: 1
prop5: 5
prop6: 6
[[Prototype]]: Object


                                                        what is Dom and select elements





let myidElements =document.getElementById("my-div");
let myTagElements =document.getElementsByTagName("p");
let myclassElements =document.getElementsByClassName("my-span");
let myqueryElements=document.querySelector(".special");
let myqueryALl=document.querySelectorAll(".my-span");
console.log(myidElements); //output :<div id="my-div">Hello Div</div> 
console.log(myTagElements[1]); //output: <p>Hello paragraph 2</p>
console.log(myclassElements); //output:  HTMLCollection [span.my-span]
console.log(myqueryElements); //ouput: <span class="my-span 2 special">My Span</span>
console.log(myqueryALl); 
output: NodeList(2) [span.my-span, span.my-span.special]
0: span.my-span
1: span.my-span.special
length: 2
[[Prototype]]: NodeList


console.log(document.title); //output: love (title of page)
console.log(document.body); 
output:

<body>
    <span class="my-span">My Span 1</span>
    <span class="my-span special">My Span 2</span>
  <p>Hello paragraph 1</p>
  <p>Hello paragraph 2</p>
  <div id="my-div">Hello Div</div>
  <form action="">
      <input type="text"name="one" value="Hello" />
  </form>
  <form action="">
      <input type="text"name="two" value="Hello"/>
  </form>
  <a href="https://google.com">Google</a>
  <a href="https://facebook.com">Facebook</a>
 <script src="object.js"></script>
</body>

console.log(document.forms[0]); 
 ouput:  
<form action="">
      <input type="text"name="one" value="Hello" />
  </form>
  
  console.log(document.links[1]);
  output: <a href="https://facebook.com">Facebook</a>

  */

