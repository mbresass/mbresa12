//function printNames(){
    //document.write("John");
   // document.write("<br>");
   // setTimeout(function(){
   //     document.write("Anna");}, 3000); //kodi ekzekutohet mbas 3 sekondave no matter if other code is being excecuted as well.
   // document.write("Bob")
//}

//printNames();

var colors = ['red', 'green', 'blue', 'purple'];

function changeBgColor (){
    document.querySelector('body').style.background = colors [Math.floor(Math.random()*colors.length)]
}

var names = ['John', 'Anna', 'Bob', 'Mark']

function changeNames (){
    document.querySelector('p').innerHTML = names [Math.floor(Math.random()*names.length)];
}

setInterval(changeBgColor, 1000)
setInterval(changeNames, 1000)

//asinkronizimi behet permes timeOut dhe setInterval