const exchangeRates = {
    CAD: 2.89,
    USD: 4.02,
    EUR: 4.35,
    GBP: 5.22,
    JPY: 0.026
}
const convertToPLN = (amount, currency) =>{
    if(!exchangeRates[currency]){
        throw new Error('Unsupported currency');
    }
    return Math.round(amount * exchangeRates[currency] * 100) / 100;
}
module.exports = {
    convertToPLN,
    exchangeRates
}