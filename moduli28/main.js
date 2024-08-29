var input = document.getElementById('input_id')
var button = document.getElementById('btn_id')
var text = document.getElementById("teksti_id")

button.onclick = function(){
    text.innerHTML = input.value
}

//1- after how many characters is the word located
var text1 = "The best school is Digital School."
var result1 = text1.search("Digital School")
document.getElementById("rez1").innerHTML = result1

//another way to write the previous code- insted of writing "", you can write the /
var text2 = "The best school is Digital School."
var result2 = text2.search(/Digital School/)
document.getElementById("rez2").innerHTML = result2

//2- replacing one word with another
var text3 = "The best school is Digital School."
var result3 = text3.replace(/Digital School/, "Another School")
document.getElementById("rez3").innerHTML = result3

//3- is there any of the "abcdef" in the word-- true if yes, false if no
var text4 = "abcdef"
var regex = new RegExp('abc')
document.getElementById('rez4').innerHTML = regex.test(text4)

//4- is the word school in the sentence-- if yes the word appears, if not it doesn't say anything
var text5 = "The best school is Digital School."
var regex1 = /school/g;
document.getElementById('rez5').innerHTML = text5.match(regex1)

//5- it tells all the abc in this sentence
var text6 = "The best school is Digital School."
var regex2 = /[abc]/g
document.getElementById('rez6').innerHTML = text6.match(regex2)

//6- it tells all the numbers between 0-9
var text7 = "Upenn is in top 10 best schools in the world."
var regex3 = /[0-9]/g;
document.getElementById('rez6').innerHTML = text7.match(regex3)

//another way to write the 6th code
var text8 = "100 percent"
var regex4 = /\d/g; //d stands for digits
document.getElementById('rez9').innerHTML = text8.match(regex4)

//how many times is a letter repeated
var text9 = "hello. helloo, hellooo, helloooo"
var regex5 = /o{3,5}/g
document.getElementById('rez10').innerHTML = text9.match(regex5)

var text10 = "bestfriend, girlfriend, boyfriend"
var regex6 = /end$/g
document.getElementById('rez11').innerHTML = text10.match(regex6)

var text11 = "cat, catalog, category"
var regex7 = /^cat/g 
document.getElementById('rez12').innerHTML = text11.match(regex7)

