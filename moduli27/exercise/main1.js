//var shtetet = ['Kosova', 'Gjermania', 'Japonia', 'Kina', 'Irlanda']

//var text = '';

//var k;

//for(k in shtetet){
//    text += shtetet[k];
//}
//console.log(text);

//2. Try to create an input in index.html that adds names in the array and show them all in the index.html



var students = ["Sam", "Monica", "John"];

var names_input = document.getElementById("name_input");
var btnAdd = document.getElementById("btnAdd");
var btnShows = document.getElementById("btnShow");

btnAdd.onclick= function(){
    students.push(names_input.value);
}

btnShow.onclick = function(){
    for(i=0; i<students.length; i++){
    document.write(students[i] + '<br>');
    }

}



