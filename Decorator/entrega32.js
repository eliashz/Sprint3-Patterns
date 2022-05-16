//Nivell 2: Decorator

const data = require ('./currency_conversions.json')

console.log(data.USD_EUR);

module.exports = Decorator;

let Multiply = (...args) => {
  console.log(...args);
  return args.reduce((a, b) => a * b)
}

// validated integers

const Validator = (fn) => {
  return function(...args) {
    const validArgs = args.every(arg => Number.isInteger(arg));
    if (!validArgs) {
      throw new TypeError('Argument cannot be a non-integer');
    }
    return fn(...args);
  }
}

//decorated multiply function that only multiplies integers
MultiplyValidArgs = Validator(Multiply);
MultiplyValidArgs(6, 8, 2, 10);