let a;
let b;
a = +prompt ("Iveskite staciakampio ilgi:");
b = +prompt ("Iveskite staciakampio ploti:");
let perimetras = staciakampioPerimetras(a, b);
alert (perimetras)
a = 14;
b = 8;
perimetras = staciakampioPerimetras(a, b);
console.log(perimetras);
a = 5.678;
b = 12126.63;
perimetras = staciakampioPerimetras(a, b);
console.log(perimetras);

function staciakampioPerimetras(a, b){
let perimetras = 2 * (a + b);
return perimetras;
}