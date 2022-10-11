let spindulioIlgis = +prompt("Įveskite apskritimo spindulį norėdami sužinoti apskritimo plotą");
let pir2 = apskritimoPlotas(spindulioIlgis);
console.log("Apskritimo plotas yra:" + pir2);

function apskritimoPlotas(a) {
    return Math.PI * a ** 2;
}