let krastine1 = prompt("Įveskite stačiojo trikampio pirmo statinio ilgį");
let krastine2 = prompt("Įveskite stačiojo trikampio antro statinio ilgį");
let krastine3 = izambinesRadimas(krastine1, krastine2);
console.log("Įžambinės ilgis yra:" + krastine3);

// Papildomos funkcijos
function izambinesRadimas(a, b) {
    return Math.sqrt(pakeltiKvadratu(a) + pakeltiKvadratu(b));
}

function pakeltiKvadratu(a) {
    return a * a;
}