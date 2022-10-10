let istrizainec = prompt("Įveskite stačiojo trikampio įstrižainės ilgį");
let statinisb = prompt("Įveskite stačiojo trikampio statinio ilgį");
let statinisa = statinioradimas(statinisb, istrizainec);
console.log("statinis a " + statinisa);

// Papildomos funkcijos
function statinioradimas(a, b) {
    return Math.sqrt(pakeltiKvadratu(a) - pakeltiKvadratu(b));
}

function pakeltiKvadratu(a) {
    return a * a;
}