const celsius = 25;
const fahrenheit = (celsius * 9 / 5) + 32;
console.log(`${celsius}°C equivalen a ${fahrenheit} °F`);

const kilometros = 100;
const millas = kilometros * 0.621371;
console.log(`${kilometros} equivale a ${millas.toFixed(2)}`);

const pesos = 500000;
const tasa = 4000;
const dolares = pesos / tasa;
console.log(`$${pesos} COP equivalen a US$${dolares.toFixed(2)}`);

const pesoKg = 53;
const estaturaMetros = 1.58;
const imc = pesoKg / (estaturaMetros * estaturaMetros);
console.log(`tu IMC es: ${imc.toFixed(2)}`);