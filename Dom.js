/*                                        Get set elements content and attributes


let myelements=document.querySelector(".js");
console.log(myelements.innerHTML); //output: javascript<span>Div</span>&lt;span&gt; 
console.log(myelements.textContent); //output:javascriptDiv<span> 

myelements.innerHTML ="Text From <span>Dom.js</span> File";
// output: Text From Dom.js File
// Google

document.images[0].src="https.google.com";
document.images[0].alt="Alternate";
let mylink= document.querySelector('.link');
console.log(mylink.getAttribute("class"));
console.log(mylink.getAttribute("href"));

/*output:

javascript<span>Div</span>&lt;span&gt; 
javascriptDiv<span> 
link
 #
https.google.com:1          GET http://127.0.0.1:5500/https.google.com 404 (Not Found)



mylink.setAttribute("href","https://twitter.com");
 output:
 ------
 <a class="link" href="https://twitter.com">Google</a>


                                     Check Attributes and examples



console.log(document.getElementsByTagName("P")[0].attributes);
output:
-------
NamedNodeMap {0: class, 1: title, 2: data-src, class: class, title: title, data-src: data-src, length: 3}


----------------------------------


let myP= document.getElementsByTagName("p")[0];
if(myP.hasAttribute("data-src")){
    if(myP.getAttribute("data-src")===""){
        myP.removeAttribute("data-src");
    }
    else{
        myP.setAttribute("data-src","New Value");
    }
    
}else{
    console.log("Not Found");
}

output:
------
before: <p class="para" title="paragraph" data-src="">Paragraph</p>
after : <p class="para" title="paragraph">Paragraph</p>


                                         Create and appends elements



let myElement= document.createElement("div");
console.log(myElement);

output: <div></div>

------------------------

let myElement= document.createElement("div");
myElement.className="product";
console.log(myElement);
output:  <div class="product"></div>

---------------------------


let myElement= document.createElement("div");
let myAttribute=document.createAttribute("data-custom");
let myText= document.createTextNode("Product One");
let myComment =document.createComment("This Is Div");
myElement.className="product";
myElement.setAttributeNode(myAttribute);
myElement.setAttribute("data-test","testing");

// Append text to element
myElement.appendChild(myText);

// Appent comment to element
myElement.appendChild(myComment);

//Appenf element to body
document.body.appendChild(myElement);

console.log(myElement);

                                 Product with Title and Description Practice


for(i=0;i<100;i++){
    let elements =document.createElement("div");
    let heading=document.createElement("h3");
    let myParagraph =document.createElement("p");
    
    let myheadingtext = document.createTextNode("Product Title");
    let myParagtext = document.createTextNode("Product Description");
    elements.className="products";
    
    // add  heading text
    heading.appendChild(myheadingtext);
    
    // add heading to elements
    elements.appendChild(heading);
    
    
    
    // add paragraph text 
    myParagraph.appendChild(myParagtext);
    
    elements.appendChild(myParagraph);
    
    document.body.appendChild(elements);
    
   
}

                                                 Deal with children's
                                                 

  
                                                 let myElement=document.querySelector("div");
console.log(myElement.children);
console.log(myElement.children[0]);
console.log(myElement.childNodes);
console.log(myElement.childNodes[0]);
console.log(myElement.firstChild);
console.log(myElement.lastChild);


output:
-------
HTMLCollection(2) [p, span]
p
NodeList(5) [text, p, span, comment, text]
"Hello Div"
"Hello Div"
" Hello"


                                                          Dom events

   let myBtn= document.getElementById("btn");
    myBtn.oncontextmenu= function(){
        console.log("clicked");
    }

    output: !! if we clicked on the button 
    -------
    clicked




                                                    
                                                 Validate Form and Prevent Default
                                                    


let userInput= document.querySelector("[name='username']");
let ageInput= document.querySelector("[name='age']");

 document.forms[0].onsubmit= function(e){
     let userValid= false;
     let ageValid = false;


    if(userInput.value !== "" && userInput.value.length <=10){
            userValid=true;

    }
    if(ageInput.value !==""){
            ageValid=true;
    }


     if( userValid === false || ageValid=== false){
         e.preventDefault();
     }
    };

document.links[0].onclick = function(event){
    console.log(event);
    event.preventDefault();
};



                                                          Event simulation-click focus Blur

let one =document.querySelector(".one");
let two =document.querySelector(".two");


window.onload = function(){
    two.focus();
};
one.onblur= function(){
     document.links[0].click();
};



                                                    Class list object and methods


let element = document.getElementById("my-div");
console.log(element.classList);
console.log(typeof element.classList);
console.log(element.classList.contains("moemen"));
console.log(element.classList.contains("show"));
console.log(element.classList.item("3"));

element.onclick= function(){
     element.classList.add("add-one","add-two");
};

element.onclick= function(){
    element.classList.remove("one","two");
};

element.onclick= function(){
    element.classList.toggle("osama");
};



                                              Css styling and Stylesheets


let element= document.getElementById("my-div");

element.style.color="red";
element.style.fontWeight="bold";

element.style.cssText="font-weight:bold; color:green; opacity:0.9";

element.style.removeProperty("color");
element.style.setProperty("font-size","40px");

document.styleSheets[0].rules[0].style.removeProperty("line-height");



                                                before,after,prepend,append,remove   



 let element= document.getElementById("my-div");
 let createdPa= document.createElement("p");
 element.before("Hello From Js");

output:

Hello From Js
Div Has Span



let element= document.getElementById("my-div");
 let createdPa= document.createElement("p");
 element.after("Hello From Js");

output:
-------
Div Has Span
Hello From Js



append/prepend work through the div
before/after   doesnt work through the div, it's work before div of after it
 

 
                                                Dom Traversing



let span= document.querySelector(".two");

console.log(span.nextSibling); // output: comment
console.log(span.nextElementSibling); //output: <span class="three">Three</span>

console.log(span.previousSibling); //output comment
console.log(span.previousElementSibling);  //output : <span class="one">One</span>



let span= document.querySelector(".two");

console.log(span.parentElement);

span.onclick = function(){
    span.parentElement.remove();
}


                                                              Dom Cloning

take a copy of an element without changing the ancient element

let myP= document.querySelector("p").cloneNode();
let myDiv= document.querySelector("div");

myDiv.appendChild(myP);


                                                            AddEventListener





let myP= document.querySelector("p");

myP.onclick = function(){
    let newP =myP.cloneNode(true);
    newP.className="clone";
    document.body.appendChild(newP);
}

  Error
let cloned =document.querySelector(".clone");
cloned.onclick= function(){
    console.log("I am cloned");
}



document.addEventListener("click",function(e){
    if(e.target){
               console.log(e.target);
    }
})




                                                   Dom challenge 101 elzero web school


let navList=["Home","About","Service","Contact"];

let header= document.createElement("header");
header.classList.add("website-head");
document.body.appendChild(header);
let logo =document.createElement("span");
logo.classList.add("logo");
logo.style.cssText="font-weight:bold; color:green ; font-family:sans-serif";
let myText= document.createTextNode("Elzero");
logo.appendChild(myText);
header.appendChild(logo);


let UnorderList = document.createElement("div");
UnorderList.classList.add("topnav");
UnorderList.style.cssText="overflow: hidden; background-Color:white;margin-top:-40px";



for(i=0;i<4;i++)
{
    let link = document.createElement('a');
      link.style.cssText=" text-align:center;padding: 14px 16px;text-decoration: none; font-size: 17px;float:right;font-family:sans-serif";
    link.classList.add("href");
    UnorderList.appendChild(link);
    myListText= document.createTextNode(navList[i]);
    link.appendChild(myListText);
 
}
header.appendChild(UnorderList);

let bodyDiv= document.createElement("div");
bodyDiv.classList.add("flex-container");
bodyDiv.style.cssText=" display: flex;height: 560px;flex-wrap: wrap;align-content: space-between;background-color:#f1f1f1";

for(i=1;i<16;i++){

    let flexDiv= document.createElement("div");
    flexDiv.style.cssText="width: 260px;margin: 10px;text-align: center;line-height: 90px;font-size: 20px;background-color:white";
    let text =  document.createTextNode([i]);
    let text1=document.createTextNode("Product");
    flexDiv.appendChild(text);
     flexDiv.appendChild(text1);
     bodyDiv.appendChild(flexDiv);

 }
document.body.appendChild(bodyDiv);

let footer =document.createElement("div");
let end= document.createTextNode("Copyright 2021");
footer.appendChild(end);
footer.style.cssText="width:100%; height:40px;background-color:green;text-align:center; font-size:15px;padding-top:6px;color:white;font-family:sans-serif";


document.body.appendChild(footer);


*/







