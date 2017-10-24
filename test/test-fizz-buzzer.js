const should = require('chai').should();

const fizzBuzzer = require('../fizzBuzzer');

describe('fizzBuzzer', function() {

  it('replace certain numbers with words', function() {

    const normalCases = [
      {num: 3, expected: "fizz"},
      {num: 5, expected: "buzz"},
      {num: 15, expected: "fizz-buzz"}
    ];

    normalCases.forEach(function(input) {
      const answer = fizzBuzzer(input.num);
      answer.should.equal(input.expected);
    });
  });

  it('should raise error if args not numbers', function() {

    const badInputs = [
      ['a'],
      ['1'],
      ['fizz']
    ];

    badInputs.forEach(function(input) {
      (function() {
          fizzBuzzer(input[0])
      }).should.throw(Error);
    });
  });
});