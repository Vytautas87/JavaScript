let skaicius = +prompt("Įveskite skaičių")
isvestiArLyginis(skaicius);


function arLyginis(x) {
    if (x % 2 == 0) {
        return true;
    }
    else {
        return false;
    }
}
function isvestiArLyginis(lyginisArNe, skaicius) {
    if (lyginisArNe == true) {
        console.log(skaicius + " Skaičius yra lyginis");
    }
    else {
        console.log(skaicius + " Skaičius nėra lyginis");
    }
}