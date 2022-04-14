
//                                                       Settimeout and cleartimeout


/* setTimeout(function(){
      console.log('Msg');
},3000);


output:
-------
Msg (but after 3 seconds)

-----------------------------
 setTimeout(sayMsg,3000);
    function sayMsg(){
    console.log('I am messsaj');
    }

 output:
-------
Msg (but after 3 seconds)

-------------------------------

setTimeout(sayMsg,3000,"Moemen",15);
function sayMsg(user,age){
console.log(`I am messsaj for ${user} and my age is ${age}`);
}

 output:
-------
I am messsaj for Moemen and my age is 15 (but after 3 seconds)

---------------------------

let counter =setTimeout(sayMsg,3000);
function sayMsg(){
console.log(`I am message`);
}
let btn= document.querySelector("button");
btn.onclick=function(){
    clearTimeout(counter);
};




                                                          setinterval and clearinterval





setInterval(function(){
      console.log('Msg');
},1000);


output:
-------
every 1second it will print Msg without stoping

---------------------------


let div= document.querySelector("div");
function countDown(){
    div.innerHTML -=1;
     if(div.innerHTML==="0"){
            clearInterval(counter);
     }


}

let counter =setInterval(countDown,1000);

output:
-------
5    (count 5 to 0 then stop)



                                                      window location object



console.log(location);
console.log(location.href);

console.log(location.host);
console.log(location.hostname);
console.log(location.protocol);
console.log(location.replace("...."));
console.log(location.assign("...."));



output:
------
Location {ancestorOrigins: DOMStringList, href: 'http://127.0.0.1:5500/index.html', origin: 'http://127.0.0.1:5500', protocol: 'http:', host: '127.0.0.1:5500', …}
http://127.0.0.1:5500/index.html
 127.0.0.1:5500
 127.0.0.1
 http:



                                                  window open and close
  
         
                                                  
 setTimeout(function(){
window.open("https://google.com","_blank","width=400,height=400,left=200,top=10");
},2000);



                                                  Scroll,ScrollTo,ScrollBy,focus,print,Stop


window.stop(); // stop reloading the page 

window.print(); //print a page


let myNewWindow =window.open("https://google.com","","width=500,height=500");


window.scrollTo(500,200); //from 0 to this location all time
window.scrollBy(500,200); // from anywhere to anywhere it will  be increase x and y


window.scrollTo({
    left:500,
    top:200,
    behavior:"smooth"
});



                                               Scroll to top using Y pratice


let btn = document.querySelector("button");
window.onscroll=function(){
     if(window.scrollY >= 600){
        btn.style.display="block";
     }else{
         btn.style.display="none";
     }
};

btn.onclick=function(){
    window.scrollTo(
        {
            left:0,
            top:0,
            behavior:"smooth",
        }
    );
};

 
                                                                Local Storage


// set

window.localStorage.setItem("color","red");
window.localStorage.fontWeight="bold";
window.localStorage["fontSize"]="20px";

//get

console.log(window.localStorage.getItem("color"));
console.log(window.localStorage.color);
console.log(window.localStorage["color"]);



//remove one

window.localStorage.removeItem("color");

//remove all 
window.localStorage.clear();

//Get key

console.log(window.localStorage.key(0));

//set color in page

document.body.style.backgroundColor=window.localStorage.getItem("color");




                                                        Local storage color application practice




let lis = document.querySelectorAll("ul li");
let exp =document.querySelector(".experiment");



if(window.localStorage.getItem("color")){    
    // if there is a color in local storage
    //1- add color to div
    exp.style.backgroundColor= window.localStorage.getItem("color");
    //2 remove active class from all Li
    lis.forEach((li)=>{
        li.classList.remove("active");

    });
    //3- add active class to current color
    document.querySelector(`[data-color="${window.localStorage.getItem("color")}"]`).classList.add("active");
    
}



lis.forEach((li)=>{
    li.addEventListener("click",(e)=>{
        //remove Active class from all lis
         lis.forEach((li)=>{
             li.classList.remove("active");

         });
         // add active class to current element
         e.currentTarget.classList.add("active");
         // add current color to local storage
         window.localStorage.setItem("color",e.currentTarget.dataset.color);
          // change Div background color
          exp.style.backgroundColor= e.currentTarget.dataset.color;
    });
});




                                                                    session storage and use cases



document.querySelector(".name").onblur =function(){
    window.localStorage.setItem("input-name",this.value)
};

     





                                                               video challenge 114

let input = document.querySelector(".input");
let submit = document.querySelector(".add");
let tasksDiv = document.querySelector(".tasks");

// Empty Array To Store The Tasks
let arrayOfTasks = [];

// Check if Theres Tasks In Local Storage
if (localStorage.getItem("tasks")) {
  arrayOfTasks = JSON.parse(localStorage.getItem("tasks"));
}

// Trigger Get Data From Local Storage Function
getDataFromLocalStorage();

// Add Task
submit.onclick = function () {
  if (input.value !== "") {
    addTaskToArray(input.value); // Add Task To Array Of Tasks
    input.value = ""; // Empty Input Field
  }
};

// Click On Task Element
tasksDiv.addEventListener("click", (e) => {
  // Delete Button
  if (e.target.classList.contains("del")) {
    // Remove Task From Local Storage
    deleteTaskWith(e.target.parentElement.getAttribute("data-id"));
    // Remove Element From Page
    e.target.parentElement.remove();
  }
  // Task Element
  if (e.target.classList.contains("task")) {
    // Toggle Completed For The Task
    toggleStatusTaskWith(e.target.getAttribute("data-id"));
    // Toggle Done Class
    e.target.classList.toggle("done");
  }
});

function addTaskToArray(taskText) {
  // Task Data
  const task = {
    id: Date.now(),
    title: taskText,
    completed: false,
  };
  // Push Task To Array Of Tasks
  arrayOfTasks.push(task);
  // Add Tasks To Page
  addElementsToPageFrom(arrayOfTasks);
  // Add Tasks To Local Storage
  addDataToLocalStorageFrom(arrayOfTasks);
}

function addElementsToPageFrom(arrayOfTasks) {
  // Empty Tasks Div
  tasksDiv.innerHTML = "";
  // Looping On Array Of Tasks
  arrayOfTasks.forEach((task) => {
    // Create Main Div
    let div = document.createElement("div");
    div.className = "task";
    // Check If Task is Done
    if (task.completed) {
      div.className = "task done";
    }
    div.setAttribute("data-id", task.id);
    div.appendChild(document.createTextNode(task.title));
    // Create Delete Button
    let span = document.createElement("span");
    span.className = "del";
    span.appendChild(document.createTextNode("Delete"));
    // Append Button To Main Div
    div.appendChild(span);
    // Add Task Div To Tasks Container
    tasksDiv.appendChild(div);
  });
}

function addDataToLocalStorageFrom(arrayOfTasks) {
  window.localStorage.setItem("tasks", JSON.stringify(arrayOfTasks));
}

function getDataFromLocalStorage() {
  let data = window.localStorage.getItem("tasks");
  if (data) {
    let tasks = JSON.parse(data);
    addElementsToPageFrom(tasks);
  }
}

function deleteTaskWith(taskId) {
  // For Explain Only
  // for (let i = 0; i < arrayOfTasks.length; i++) {
  //   console.log(`${arrayOfTasks[i].id} === ${taskId}`);
  // }
  arrayOfTasks = arrayOfTasks.filter((task) => task.id != taskId);
  addDataToLocalStorageFrom(arrayOfTasks);
}

function toggleStatusTaskWith(taskId) {
  for (let i = 0; i < arrayOfTasks.length; i++) {
    if (arrayOfTasks[i].id == taskId) {
      arrayOfTasks[i].completed == false ? (arrayOfTasks[i].completed = true) : (arrayOfTasks[i].completed = false);
    }
  }
  addDataToLocalStorageFrom(arrayOfTasks);
}


*/