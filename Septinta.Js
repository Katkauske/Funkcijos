
let c = +prompt("Iveskite krastine c:");
let b = +prompt("Iveskite krastine b:");
let rezultatas = formule(b,c);
let rezultatoSaknis = ilgioRadimas(c,b);
console.log("krastines ilgio kvadratas " + rezultatas) 
console.log("krastines ilgis " + rezultatoSaknis)


function ilgioRadimas(c,b)  {
    return Math.sqrt(formule(c,b));
}


function formule(c,b){
let rezultatas = (c*2) - (b*2);
return rezultatas * rezultatas;
}

