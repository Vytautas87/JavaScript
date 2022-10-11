let a = prompt("Įveskite staciakampio kraštinės a ilgį");
let b = prompt("Įveskite staciakampio kraštinės b ilgį");
let c = staciakampioPlotas(a, b);
console.log(c);

function staciakampioPlotas(a, b) {
    return teigiamasSkaicius(a) * teigiamasSkaicius(b);
}

function teigiamasSkaicius(a) {
    return Math.abs(a);
}