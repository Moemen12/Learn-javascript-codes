/*
                                              Array.every Method



const locations={
    20:"Place 1",
    30:"Place 2",
    10:"Place 3",
    40:"Place 4",
};

let mainLocation=15;
let locationArrays= Object.keys(locations);
console.log(locationArrays);

let locationArraysNumbers= locationArrays.map((n)=>+n);
console.log(locationArraysNumbers);

let check=locationArrays.every(function(e){
    return e>this;
},mainLocation)

console.log(check);


                                                   Spread Syntax And Use Cases


console.log("Osama"); //Osama
console.log(..."Osama"); // O s a m a
console.log([..."Osama"]); //['O', 's', 'a', 'm', 'a']

let myArray1=[1,2,3];
let myArray2=[4,5,6];

let allArrays=[...myArray1,...myArray2];
console.log(allArrays); //[1, 2, 3, 4, 5, 6]


let copiedArray=[...myArray1];
console.log(copiedArray); //[1, 2, 3]

let allFriends=["osama","ahmad","sayed"];
let thisYearFriends=["sameh","mahmoud"];


allFriends.push(...thisYearFriends);
console.log(allFriends); // ['osama', 'ahmad', 'sayed', 'sameh', 'mahmoud']


let myNumbers=[10,20,100,-100,1000,500];

console.log(Math.max(...myNumbers)); //1000


let obj1={
    a:1,
    b:2,
}


let obj2={
    c:3,
    d:4,
}

console.log({...obj1,...obj2,e:5}); //{a: 1, b: 2, c: 3, d: 4, e: 5}



                                                       Map And Set Challenge 133 elzero web school

let n1=[10,30,10,20];
let n2=[30,20,10]; 

console.log([...n1,...n2].length*Math.max(...n2));    // 210




                                                            Regular Expressions - Modifiers


let myString= "Hello Elzero Web School I Love elzero";
// let regex=/Elzero/i;  insensitive 
// let regex=/Elzero/ig; insensitive+global
// Match will return null if there isnt found

console.log(myString.match(regex));


                                                            Regular Expressions - Ranges Part 1


let Tld="Com Net Org Info Code Io";
let TldReg=/(org|info|io)/ig;

console.log(Tld.match(TldReg)); // ['Org', 'Info', 'Io']

let nums="12345678910";

let numsreg=/[0-9]/g;
console.log(nums.match(numsreg));  // ['1', '2', '3', '4', '5', '6', '7', '8', '9', '1', '0']

let Notnums="12345678910";

let Notnumsreg=/[^0-2]/g;
console.log(Notnums.match(Notnumsreg)); //['3', '4', '5', '6', '7', '8', '9']


let speacialnums="123!45#67%89$10";

let specialnumsreg=/[^0-9]/g;
console.log(speacialnums.match(specialnumsreg)); // ['!', '#', '%', '$']


let practice="Os1 Os1Os Os2 Os8 Os8Os";

let practicereg=/Os[5-9]Os/g;
console.log(practice.match(practicereg));


                                            Regular Expressions - Ranges Part 2 


let myString="AaBbcdefG123!234%^&*";
let atozsmall=/[a-z]/g;
let Notatozsmall=/[^a-z]/g;
let atozcapital=/[A-Z]/g;
let Notatozcapital=/[^A-Z]/g;
let andcnde=/[ace]/g;
let notandcnde=/[^ace]/g;
let lettrescapsandSmall =/[a-zA-z]/g;
let NumsandSpecial =/[^a-zA-z]/g;
let specials=/[^a-zA-z0-9]/g;


console.log(myString.match(atozsmall));
console.log(myString.match(Notatozsmall));
console.log(myString.match(atozcapital));
console.log(myString.match(Notatozcapital));
console.log(myString.match(notandcnde));
console.log(myString.match(lettrescapsandSmall));
console.log(myString.match(NumsandSpecial));
console.log(myString.match(specials));


                                                                 Regular Expressions - Character Classes Part 1


/*
  Regular Expression
  Character Classes
  . => matches any character, except newline or other line terminators.
  \w => matches word characters. [a-z, A-Z, 0-9 And Underscore]
  \W => matches Non word characters
  \d => matches digits from 0 to 9.
  \D => matches non-digit characters.
  \s => matches whitespace character.
  \S => matches non whitespace character.


let email = 'O@@@g...com O@g.com O@g.net A@Y.com O-g.com o@s.org 1@1.com';
let dot = /./g;
let word = /\w/g;
let valid = /\w@\w.(com|net)/g;

console.log(email.match(dot));
console.log(email.match(word));
console.log(email.match(valid));




                                                                Regular Expressions - Character Classes Part 2



/*
  Regular Expression
  Character Classes
  \b => matches at the beginning or end of a word.
  \B => matches NOT at the beginning/end of a word.

  Test Method
  pattern.test(input)


let names = "Sayed 1Spam 2Spam 3Spam Spam4 Spam5 Osama Ahmed Aspamo";
let re = /(\bspam|spam\b)/ig;
console.log(names.match(re));

console.log(re.test(names));
console.log(/(\bspam|spam\b)/ig.test("Osama"));
console.log(/(\bspam|spam\b)/ig.test("1Spam"));
console.log(/(\bspam|spam\b)/ig.test("Spam1"));

 

                                                                Regular Expressions - Quantifiers Part 1



/*
  Regular Expression

  Quantifiers
  n+    => One Or More
  n*    => zero or more
  n?    => zero or one


let mails = "o@nn.sa osama@gmail.com elzero@gmail.net osama@mail.ru"; // All Emails
// let mailsRe = /\w+@\w+.(com|net)/ig;
let mailsRe = /\w+@\w+.\w+/ig;
console.log(mails.match(mailsRe));

let nums = "0110 10 150 05120 0560 350 00"; // 0 Numbers Or No 0
let numsRe = /0\d*0/ig;
console.log(nums.match(numsRe));

let urls = "https://google.com http://www.website.net web.com"; // http + https
let urlsRe = /(https?:\/\/)?(www.)?\w+.\w+/ig;
console.log(urls.match(urlsRe));



                                                              Regular Expressions - Quantifiers Part 2

*/

/*
  Regular Expression

  Quantifiers
  n{x}   => Number of
  n{x,y} => Range
  n{x,}  => At Least x


let serials = "S100S S3000S S50000S S950000S";

console.log(serials.match(/s\d{3}s/ig)); // S[Three Number]S
console.log(serials.match(/s\d{4,5}s/ig)); // S[Four Or Five Number]S
console.log(serials.match(/s\d{4,}s/ig)); // S[At Least Four]S



                                                            Regular Expressions - Quantifiers Part 3


  Regular Expression

  Quantifiers
  $  => End With Something
  ^  => Start With Something
  ?= => Followed By Something
  ?! => Not Followed By Something

let myString = "We Love Programming";
let names = "1OsamaZ 2AhmedZ 3Mohammed 4MoustafaZ 5GamalZ";

console.log(/ing$/ig.test(myString));
console.log(/^we/ig.test(myString));
console.log(/lz$/ig.test(names));
console.log(/^\d/ig.test(names));

console.log(names.match(/\d\w{5}(?=Z)/ig));
console.log(names.match(/\d\w{8}(?!Z)/ig));

                                                             Regular Expression – Replace With Pattern

   Regular Expression

  - replace
  - replaceAll


let txt = "We Love Programming And @ Because @ Is Amazing";
console.log(txt.replace("@", "JavaScript"));
console.log(txt.replaceAll("@", "JavaScript"));
let re = /@/ig;
console.log(txt.replaceAll(re, "JavaScript"));
console.log(txt.replaceAll(/@/ig, "JavaScript"));
                                                    


                                                           Regular Expressions - Form Validation


document.getElementById("register").onsubmit = function () {
    let phoneInput = document.getElementById("phone").value;
    let phoneRe = /\(\d{4}\)\s\d{3}-\d{4}/; // (1234) 567-8910
    let validationResult = phoneRe.test(phoneInput);
    if (validationResult === false) {
      return false;
    }
    return true;
  }




                                                                              regular expression 146 challenge


let url1 = 'elzero.org';
let url2 = 'http://elzero.org';
let url3 = 'https://elzero.org';
let url4 = 'https://www.elzero.org';
let url5 = 'https://www.elzero.org:8080/articles.php?id=100&cat=topics';

let re = /(https?:\/\/)?(www.)?\w+.org:?(\w+)?(\W\w+.\w+\W\w+=100&cat=topics)?/ig;

console.log(url1.match(re));
console.log(url2.match(re));
console.log(url3.match(re));
console.log(url4.match(re));
console.log(url5.match(re));



                                                               Constructor Function New Syntax

   before

   const userOne = {
     id: 100,
     username: "Elzero",
     salary: 5000+1000,
   };
  
   const userTwo = {
     id: 101,
     username: "Hassan",
     salary: 6000+1000,
   };
  
   const userThree = {
     id: 102,
     username: "Sayed",
     salary: 7000+1000,
   };


   
  -------------------------------------------------------

After

   function User(id, username, salary) {
    this.i = id;
    this.u = username;
    this.s = salary + 1000;
  }
  
  let userOne = new User(100, "Elzero", 5000);
  let userTwo = new User(101, "Hassan", 6000);
  let userThree = new User(102, "Sayed", 7000);
  
  console.log(userOne.i);
  console.log(userOne.u);
  console.log(userOne.s);
  
  console.log(userTwo.i);
  console.log(userTwo.u);
  console.log(userTwo.s);
  
  console.log(userThree.i);
  console.log(userThree.u);
  console.log(userThree.s);


                                                                      Constructor Function New Syntax
                                                                    

class User {
    constructor(id, username, salary) {
      this.i = id;
      this.u = username;
      this.s = salary + 1000;
    }
  }
  
  let userOne = new User(100, "Elzero", 5000);
  
  console.log(userOne.i);
  console.log(userOne.u);
  console.log(userOne.s);
  
  console.log(userOne instanceof User);
  console.log(userOne.constructor === User);


                                                                     Deal With Properties And Methods


class User {
    constructor(id, username, salary) {
      this.i = id;
      this.u = username || "Unknown";
      this.s = salary <6000? salary+500:salary;
      this.msg= function(){
          return `Hello ${this.u} , Your salary is ${this.s}`; 
      }
    }
    writeMgs(){
        return `Hello ${this.u} , Your salary is ${this.s}`; 
      }
}


  let userOne = new User(100, "Elzero", 5000);
  let userTwo = new User(101, "", 6000);

  console.log(userOne.u);
  console.log(userOne.s);
  console.log(userOne.msg());
  console.log(userOne.writeMgs());

  console.log(userTwo.u);
  console.log(userTwo.s);
  console.log(userOne.msg);//native code 
  console.log(userOne.writeMgs);//native code 


                                                             Update Properties And Built In Constructors


class User {
    constructor(id, username, salary) {
      this.i = id;
      this.u = username;
      this.s = salary;
    }
   updateName(newName){
     this.u=newName;
   }
  }


  
  let userOne = new User(100, "Elzero", 5000);
  
  console.log(userOne.u);  Elzero
  userOne.updateName("moemen");
  console.log(userOne.u); moemen

  let strOne="Elzero";
  let strTwo= new String("Elzero");

console.log(typeof strOne); string
console.log(typeof strTwo); object

console.log(strOne instanceof String); false
console.log(strTwo instanceof String); true


console.log(strOne.constructor === String); true
console.log(strTwo.constructor === String); true


                                                           - Class Static Properties And Methods



class User {
  // Static Property
  static count = 0;

  constructor(id, username, salary) {
    this.i = id;
    this.u = username;
    this.s = salary;
    User.count++;
  }

  // Static Methods
  static sayHello() {
    return `Hello From Class`;
  }
  static countMembers() {
    return `${this.count} Members Created`;
  }
}

let userOne = new User(100, "Elzero", 5000);
let userTwo = new User(101, "Ahmed", 5000);
let userThree = new User(102, "Sayed", 5000);

console.log(userOne.u);
console.log(userTwo.u);
console.log(userOne.count);
console.log(User.count);
console.log(User.sayHello());
console.log(User.countMembers());



                                                                        Class Inheritance


  Class
  - Inheritance

// Parent Class
class User {
    constructor(id, username) {
      this.i = id;
      this.u = username;
    }
    sayHello() {
      return `Hello ${this.u}`;
    }
  }
  
  // Derived Class
  class Admin extends User {
    constructor(id, username, permissions) {
      super(id, username);
      this.p = permissions;
    }
  }
  
  class Superman extends Admin {
    constructor(id, username, permissions, ability) {
      super(id, username, permissions);
      this.a = ability;
    }
  }
  
  let userOne = new User(100, "Elzero");
  let adminOne = new Admin(110, "Mahmoud", 1);
  
  console.log(userOne.u);
  console.log(userOne.sayHello());
  console.log("####");
  console.log(adminOne.i);
  console.log(adminOne.u);
  console.log(adminOne.p);
  console.log(adminOne.sayHello());  

  
                                                                               Class Encapsulation

        
    /*
  Encapsulation
  - Class Fields Are Public By Default
  - Guards The Data Against Illegal Access.
  - Helps To Achieve The Target Without Revealing Its Complex Details.
  - Will Reduce Human Errors.
  - Make The App More Flexible And Manageable.
  - Simplifies The App.


class User {
    // Private Property
    #e;
    constructor(id, username, eSalary) {
      this.i = id;
      this.u = username;
      this.#e = eSalary;
    }
    getSalary() {
      return parseInt(this.#e);
    }
  }
  
  let userOne = new User(100, "Elzero", "5000 Gneh");
  
  console.log(userOne.u);
  console.log(userOne.getSalary() * 0.3);


                                                                 Prototype Introduction

       class User {
  constructor(id, username) {
    this.i = id;
    this.u = username;
  }
  sayHello() {
    return `Hello ${this.u}`;
  }
}

let userOne = new User(100, "Elzero");
console.log(userOne.u);

console.log(User.prototype);

let strOne = "Elzero";

console.log(String.prototype);


                                                       Add To Prototype Chain And Extend


/*
  Prototype
  - Add To Prototype Chain
  - Extend Built In Constructors Features


class User {
    constructor(id, username) {
      this.i = id;
      this.u = username;
    }
    sayHello() {
      return `Hello ${this.u}`;
    }
  }
  
  let userOne = new User(100, "Elzero");
  console.log(userOne.u);
  console.log(User.prototype);
  console.log(userOne);
  
  User.prototype.sayWelcome = function () {
    return `Welcome ${this.u}`;
  };
  
  Object.prototype.love = "Elzero Web School";
  
  String.prototype.addDotBeforeAndAfter = function (val) {
    return `.${this}.`;
  };
  
  let myString = "Elzero";
 
                                                               Object Meta Data And Descriptor Part 1

/*
  Object Meta Data And Descriptor
  - writable
  - enumerable
  - configurable [Cannot Delete Or Reconfigure]


const myObject = {
    a: 1,
    b: 2,
  };
  
  Object.defineProperty(myObject, "c", {
    writable: false,
    enumerable: true,
    configurable: false,
    value: 3,
  });
  
  // Object.defineProperty(myObject, "c", {
  //   writable: false,
  //   enumerable: true,
  //   configurable: true, <= Cannot redefine property
  //   value: 3,
  // });
  
  myObject.c = 100;
  
  console.log(delete myObject.c);
  
  for (let prop in myObject) {
    console.log(prop, myObject[prop]);
  }
  
  console.log(myObject);

                                                              Object Meta Data And Descriptor Part 2

  Object Meta Data And Descriptor
  - Define Multiple Properties
  - Check Descriptors


const myObject = {
    a: 1,
    b: 2,
  };
  
  Object.defineProperties(myObject, {
    c: {
      configurable: true,
      value: 3,
    },
    d: {
      configurable: true,
      value: 4,
    },
    e: {
      configurable: true,
      value: 5,
    },
  });
  
  console.log(myObject);
  
  console.log(Object.getOwnPropertyDescriptor(myObject, "d"));
  console.log(Object.getOwnPropertyDescriptors(myObject));



*/


 







