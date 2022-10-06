
let skaicius = prompt("Iveskite skaiciu, kuri norite pakelti kubu:");
let kubas = skaiciausKubas(skaicius);
console.log("Skaiciaus kubas yra:" + kubas)



function skaiciausKubas(a){
    let kubas = skaicius * skaicius * skaicius;
    return kubas;
}



