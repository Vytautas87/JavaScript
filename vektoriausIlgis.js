let x = prompt("Įveskite kordinatę x");
let y = prompt("Įveskite skordinatę y");
let vektoriausIlgis = voriausIlektgioSuradimas(x, y);
alert("Vektoriaus Ilgis yra: " + vektoriausIlgis);

function voriausIlektgioSuradimas(a, b) {
    return Math.sqrt(pakeltiKvadratu(a) + pakeltiKvadratu(b));
}

function pakeltiKvadratu(a) {
    return a * a;
}