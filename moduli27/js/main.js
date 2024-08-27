for(var i = 0; i<5; i++){
    console.log("Vlera e i=së është:" + i);
}

console.log("------------------");

var personat = {emri: "Mbresa", mbiemri: "Simnica", mosha: 17};

var text = '';

var z;


for(z in personat){
    text += personat[z];
}
console.log(text);

console.log("------------------");

var emrat = ['Altina', 'Andi', 'Anila'];

var y;

for(y of emrat){
    console.log(y)
}

console.log("------------------")
var f = 0;

do{
    f=f+1
    console.log(f);
}while(f<5);
