//Nível Iniciante para Intermediário
//1.
let arrayDeLetras = Array.from("HELLO");
console.log(arrayDeLetras);

//2.
let pares = Array.from({ comprimento: 5 }, (v, i) => (i + 1) * 2);
console.log(pares);

//3.
let mix = Array.of(42, "Hello", true);
console.log(mix);

mix.forEach(elemento => {
console.log(typeof elemento);
});

