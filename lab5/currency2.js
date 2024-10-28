class Currency {
    constructor(name, amount, exchangeRate) {
        this.name = name;
        this.amount = amount;
        this.exchangeRate = exchangeRate;
    }

    roundTwoDecimals(amount) {
        return Math.round(amount * 100) / 100;
    }
    exchange(){
        return this.roundTwoDecimals(this.exchangeRate * this.amount);
    }
    canadianToZloty() {
        return this.roundTwoDecimals(this.amount * this.exchangeRate);
    }

    usdToZloty() {
        return this.roundTwoDecimals(this.amount * this.exchangeRate);
    }
    euroToZloty() {
        return this.roundTwoDecimals(this.amount * this.exchangeRate);
    }

    gbpToZloty() {
        return this.roundTwoDecimals(this.amount * this.exchangeRate);
    }
    jpyToZloty() {
        return this.roundTwoDecimals(this.amount * this.exchangeRate);
    }

    toString() {
        return `${this.amount} (${this.name})`;
    }
}

module.exports = Currency;
