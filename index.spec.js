const { describeAll } = require('npm/lib/utils/config');
const fizzBuzz = require('./index');

describe('Calling fizzBuzz', () => {

    const testWithExpectation = (input, expectaion) => {
        test(`with ${input} should return "${expectaion}"`, () => {
            expect(fizzBuzz(input)).toBe(expectaion);
        });
    };

    const testWithExpectations = (inputs, expectaion) => {
        const tests = inputs.map(input => [input, expectaion]);
        it.each(tests)('with %p should return "%p"', (input, result) => {
            expect(fizzBuzz(input)).toBe(result);
        });
    };

    testWithExpectations([3, 6, 9, 12], 'Fizz');
    testWithExpectations([5, 10, 20, 25], 'Buzz');
    testWithExpectations([15, 30, 45, 60], 'FizzBuzz');
    testWithExpectation(1, '1');
    testWithExpectation(2, '2');
    testWithExpectation(4, '4');
    testWithExpectation(7, '7');
});
