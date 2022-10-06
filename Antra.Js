//Pagrindine
let ilgis;
let plotis;
ilgis = 3;
plotis = 8;
let plotas = staciakampioPlotas(ilgis, plotis)
console.log(plotas)
ilgis = 25;
plotis = 7;
plotas = staciakampioPlotas(ilgis, plotis)
console.log(plotas)
ilgis = 3.148;
plotis = 3.5456;
plotas = staciakampioPlotas(ilgis, plotis)
console.log(plotas)



//Funkcijos
function staciakampioPlotas(ilgis, plotis){
    let plotas = ilgis * plotis;
    return plotas;
}
