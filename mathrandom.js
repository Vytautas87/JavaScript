let x = 10;
let y = 1240;
let random = isvestiRandomNuoXIkiY(x, y);
console.log(random);

function isvestiRandomNuoXIkiY(x, y) {
    return Math.random() * (y - x) + x;
}