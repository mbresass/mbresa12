// fucntions

function showMessage(){
    alert("This message is isndie a function")
}

showMessage()

function sum (number1, number2){
    return number1 + number2
}

console.log(sum(30, 45))

function toCelcius(f){
    return(5/9) * (f-32)
}

console.log("54 Fahrenheit is equal to " + toCelcius)

var result = toCelcius(54)

console.log("54 Fahrenheit ")

function ds(){
    var localvar = "Digital School"
    alert(localVar)
}

ds()

//alert (localVar) - e deklarume brenda funskionit

function toSeconds(minutes){
    return minutes * 60
}

console.log(toSeconds(60))

function triangle(length, height){
    return 0.5 * length + height
}

console.log(triangle(5,7))


//objects

var car = {
    name: "BMW",
    color: "black",
    year: 2024,
    km: 0,
    startEngine: function(){
        alert("Vroom!")
    },
    get getKm(){
        return this.km;
    },
    set getKm(k){
        this.km = k
    }
}

console.log(car.getKm)

alert

car.setKm = 100

console.log(car.getKim)

var school = {
    name: "Digital School",
    subjects: "Programming",
    students: 1500,
    year: 2019
}

console.log(school.name)