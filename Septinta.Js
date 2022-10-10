
let c = +prompt("Iveskite krastine c:");
let b = +prompt("Iveskite krastine b:");
let rezultatas = formule(b,c);
console.log(rezultatas) 




function formule(c,b){
let rezultatas = (c*2) - (b*2);
return rezultatas * rezultatas;
}

