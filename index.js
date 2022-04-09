const fizzBuzz = (number) => {
    const divisibleBy3 = number % 3 === 0;
    const divisibleBy5 = number % 5 === 0;

    if (divisibleBy3 && divisibleBy5) {
        return "FizzBuzz";
    } else if (divisibleBy3) {
        return "Fizz";
    } else if (divisibleBy5) {
        return "Buzz";
    } else {
        return number.toString();
    }
}

module.exports = fizzBuzz;