let skaicius = +prompt("Įveskite skaičių")
isvestiArLyginis(skaicius);


function arLyginis(x) {
    if (x % 5 == 0) {
        return true;
    }
    else {
        return false;
    }
}
function isvestiArLyginis(lyginisArNe, skaicius) {
    if (lyginisArNe == true) {
        console.log(skaicius + " Skaičius yra penketo kartotinis");
    }
    else {
        console.log(skaicius + " Skaičius nėra penketo kartotinis");
    }
}