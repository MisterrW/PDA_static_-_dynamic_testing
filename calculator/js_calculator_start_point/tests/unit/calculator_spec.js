var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."

  it('can add', function(){
    calculator.add(2)
    calculator.operatorClick('=')
    calculator.add(5)
    assert.equal(7, calculator.runningTotal)
  })

  it('can subtract', function(){
    calculator.add(2)
    calculator.operatorClick('=')
    calculator.subtract(5)
    assert.equal(-3, calculator.runningTotal)
  })


  it('can multiply', function(){
    calculator.add(2)
    calculator.operatorClick('=')
    calculator.multiply(5)
    assert.equal(10, calculator.runningTotal)
  })

  it('can divide', function(){
    calculator.add(2)
    calculator.operatorClick('=')
    calculator.divide(5)
    assert.equal(0.4, calculator.runningTotal)
  })

  it('maintains a running total', function(){
    calculator.numberClick(2)
    calculator.numberClick(5)
    calculator.numberClick(3)
    calculator.numberClick(6)
    assert.equal(2536, calculator.runningTotal)
  })

  it('has functioning operator keys', function(){
    calculator.runningTotal = 1
    calculator.operatorClick('+')
    calculator.runningTotal = 3
    calculator.operatorClick('=')
    assert.equal(4, calculator.runningTotal)

    calculator.runningTotal = 1
    calculator.operatorClick('-')
    calculator.runningTotal = 3
    calculator.operatorClick('=')
    assert.equal(-2, calculator.runningTotal)

    calculator.runningTotal = 2
    calculator.operatorClick('*')
    calculator.runningTotal = 3
    calculator.operatorClick('=')
    assert.equal(6, calculator.runningTotal)

    calculator.runningTotal = 3
    calculator.operatorClick('/')
    calculator.runningTotal = 2
    calculator.operatorClick('=')
    assert.equal(1.5, calculator.runningTotal)
  })

  it('can clear running total', function(){
    calculator.runningTotal = 1
    assert.equal(1, calculator.runningTotal)
    calculator.clearClick()
    assert.equal(0, calculator.runningTotal)
  })

});
