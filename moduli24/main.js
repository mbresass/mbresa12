var button2 = document.getElementById('btn2');
var button3 = document.getElementById('btn3');
var button4 = document.getElementById('btn4');

var v_button = document.getElementById("btn1")

var btnhide = document.getElementById("btnhide");

btnhide.onclick = function(){
    btnhide.setAttribute("class", "test2")
}

v_button.onclick = function(){

v_button.setAttribute("class", "test");
}
   


v_button.setAttribute("class", "test");
    
   

button3.onmouseleave = function(){
    alert("I am button 3");
}

button4.onmouseenter = function(){
    alert("I am button 4");
}


