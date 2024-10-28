const Currency = require('./currency2.js');
const currency1 = require('./currency1.js');

const amounts = [100, 200, 300, 400, 500];
const currencies = ['CAD', 'USD', 'EUR', 'GBP', 'JPY'];
console.log('\n currency1.js:');
currencies.forEach((currency, index) => {
    console.log(`${amounts[index]} ${currency} = ${currency1.convertToPLN(amounts[index], currency)} PLN`);
});



// Podejscie obiektowe
let cad = new Currency('Canadian Dollar', 10, 2.89);
let usd = new Currency('US Dollar', 10, 4.02);
let euro = new Currency('Euro', 10, 4.35);
let gbp = new Currency('British Pound', 10, 5.22);
let jpy = new Currency('Japanese Yen', 10, 0.026);

console.log('\n currency2.js:');
console.log(`Converted ${cad.amount} CAD to: ${cad.canadianToZloty()} PLN`);
console.log(`Converted ${usd.amount} USD to: ${usd.usdToZloty()} PLN`);
console.log(`Converted ${euro.amount} EURO to: ${euro.euroToZloty()} PLN`);
console.log(`Converted ${gbp.amount} GBP to: ${gbp.gbpToZloty()} PLN`);
console.log(`Converted ${jpy.amount} JPY to: ${jpy.jpyToZloty()} PLN`);


//Zad 2


const math1 = require('./myMathModule1');
console.log('Zad 2');
console.log('Using myMathModule1:');
console.log(`Add: 5 + 3 = ${math1.add(5, 3)}`);
console.log(`Subtract: 5 - 3 = ${math1.subtract(5, 3)}`);
console.log(`Multiply: 5 * 3 = ${math1.multiply(5, 3)}`);
console.log(`Divide: 5 / 3 = ${math1.divide(5, 3)}`);
console.log(`Power: 5 ^ 3 = ${math1.power(5, 3)}`);

const MyMathModule = require('./myMathModule2');
const math2 = new MyMathModule();

console.log('Using myMathModule2:');
console.log(`Add: 5 + 3 = ${math2.add(5, 3)}`);
console.log(`Subtract: 5 - 3 = ${math2.subtract(5, 3)}`);
console.log(`Multiply: 5 * 3 = ${math2.multiply(5, 3)}`);
console.log(`Divide: 5 / 3 = ${math2.divide(5, 3)}`);
console.log(`Power: 5 ^ 3 = ${math2.power(5, 3)}`);