/*Sukurkite funkciją, kuri suranda aritmetinės progresijos n-ąjį narį. 
Aritmetinė progresija, tai skaičių seka, kur skaičiai didėja vis tuo pačiu skirtumu, pvz. 5, 7, 9, 11, 13.
 Rasti n-ąjį narį formulė yra an = a1 + (n-1)d, kur n yra kelinto skaičiaus ieškome,
  o d yra skirtumas tarp kiekvieno nario, tai yra per kiek vis didėja. 
  Panaudokite tą funkciją pagrindinėje programoje pirmą kartą su 5, 7, 9, 11, 13 seka, jog rastumėte jos 26-ą narį.
 Bei po to panaudokite vėl funkciją su kita seka: 17, 11, 5, -1, jog rastumėte 37-ą narį.*/
let n = 26;
let d = 2;
let a = 5;
console.log("Pirmosios sekos 26-narys " + nNarys(n,d,a))
n = 37;
d = -6;
a = 17;
console.log("Antrosios sekos 37-narys " + nNarys(n,d,a))

 function nNarys(n,d){
    let an = a*1 + (n-1) * d;
    return an;
}