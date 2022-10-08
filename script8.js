let a = prompt("Įveskite krastines a ilgi");
let b = prompt("Įveskite krastines b ilgi");
let c = prompt("Įveskite krastines c ilgi");
let pavirsiausPlotas = staciakampiogretasieniopavirsiausPlotas(a, b, c)
console.log(pavirsiausPlotas);

function staciakampiogretasieniopavirsiausPlotas(a, b, c) {
    let pavirsiausPlotas = 2 * (a * b) + 2 * (a * c) + 2 * (b * c);
return pavirsiausPlotas
}