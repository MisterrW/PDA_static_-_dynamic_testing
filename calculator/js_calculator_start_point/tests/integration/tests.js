var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;

describe('calculator functionality', function() {
  beforeEach(function() {
    browser.ignoreSynchronization = true;
    browser.get('http://localhost:3000');
  });

  // write integration tests here in the form of "it should do something..."
  it('should have working number buttons', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number2')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('2')
  })

  it('should update displayed running total as numbers are pressed', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number1')).click();
    element(by.css('#number7')).click();
    element(by.css('#number0')).click();
    element(by.css('#number1')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('1701')
  })

  it('should update displayed running total as numbers are pressed', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number1')).click();
    element(by.css('#number7')).click();
    element(by.css('#number0')).click();
    element(by.css('#number1')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('1701')
  })

  it('display operation results correctly - add', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number7')).click();
    element(by.css('#operator_add')).click();
    element(by.css('#number6')).click();
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('13')
  })

  it('display operation results correctly - subtract', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number7')).click();
    element(by.css('#operator_subtract')).click();
    element(by.css('#number6')).click();
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('1')
  })

  it('display operation results correctly - multiply', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number7')).click();
    element(by.css('#operator_multiply')).click();
    element(by.css('#number6')).click();
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('42')
  })

  it('display operation results correctly - divide', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number7')).click();
    element(by.css('#operator_multiply')).click();
    element(by.css('#number6')).click();
    element(by.css('#operator_divide')).click();
    element(by.css('#number2')).click();
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('21')
  })

  it('manages large, negative and decimal numbers correctly', function(){
    running_total = element(by.css('#running_total'))

    element(by.css('#number6')).click();
    element(by.css('#operator_subtract')).click();
    element(by.css('#number9')).click();
    element(by.css('#operator_equals')).click();
    element(by.css('#operator_divide')).click();
    element(by.css('#number2')).click();

    element(by.css('#operator_equals')).click();

    element(by.css('#operator_multiply')).click();

    element(by.css('#number7')).click();
    element(by.css('#number0')).click();
    element(by.css('#number0')).click();
    element(by.css('#number0')).click();
    element(by.css('#number0')).click();
    element(by.css('#number0')).click();

    element(by.css('#operator_equals')).click();

    expect(running_total.getAttribute('value')).to.eventually.equal('-1050000')
  })

  it('will not divide by 0', function(){

    element(by.css('#number2')).click();
    element(by.css('#operator_divide')).click();
    element(by.css('#number0')).click();
    element(by.css('#operator_equals')).click();

    expect(running_total.getAttribute('value')).to.eventually.equal('error, not a number')
  })
});
