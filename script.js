var button=document.getElementById("enter");
var input=document.getElementById("userinput");
var ul=document.querySelector("ul");
var color1=document.querySelector(".color1");
var color2=document.querySelector(".color2");
var body=document.getElementById("main");

function inputlength(){
    return input.value.length;
}

function listcreateElement(){
    var li=document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value="";
}


input.addEventListener("keypress",function(event){
    if(inputlength()>0 && event.keyCode===13) {
     listcreateElement();
    }
})

// background
button.addEventListener("click",function(){
if(inputlength()>0) {
    
    listcreateElement();
}
})

function color(){
    body.style.background="linear-gradient(to right,"
    + color1.value
    + ", "
    + color2.value
    + ")";
}

color1.addEventListener("input", color);

color2.addEventListener("input", color);
