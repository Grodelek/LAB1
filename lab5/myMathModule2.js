class MyMathModule2{
    add(a, b){
        return a + b;
    }

    subtract(a, b) {
        return a - b;
    }

    multiply(a, b) {
        return a * b;
    }

    divide(a, b) {
        if (b === 0) throw new Error("Cannot divide by zero");
        return a / b;
    }

    power(base, exponent) {
        return Math.pow(base, exponent);
    }
}
module.exports = MyMathModule2;