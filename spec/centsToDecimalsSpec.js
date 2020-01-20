/* 
FOR TEST EXAMPLES AND DIFFERENT MATCHERS (`toEqual`, `toBe`, `not.toBe`, etc):
 https://jasmine.github.io/2.0/introduction
*/

describe("centsToDecimals function", function () { // Describes the suite / group of tests
 
  // Use this test suite as a starting point/reference.
  it("Returns undefined when parameter passed is a string", function () {
    expect(centsToDecimals('abcdef')).toEqual(undefined);
  });

 
 
  // Fix the below test suites:
 
  it("Returns undefined when parameter passed is a string containing number characters", function () {
    // ... complete the below test assertion
    expect(centsToDecimals('1234')).toEqual(undefined);
  });

  it("Returns undefined when NaN value is passed as a parameter", function () {
    expect(centsToDecimals(NaN)).toEqual(undefined);
  });

  it("Returns undefined when undefined value is passed as a parameter", function () {
    // ... complete the below test assertion 
    expect(centsToDecimals(undefined)).toEqual(undefined);    
  });

  it("Returns undefined when parameter is not passed.", function () {
    // ... complete the below test assertion
    expect(centsToDecimals()).toEqual(undefined);    

  });

  it("Returns undefined when parameter is not passed.", function () {
    // ... complete the below test assertion
    expect(centsToDecimals()).toEqual(undefined);    
  });

  it("Should convert a number of cents to a string represenation of a floating point number.", function () {
    // ... complete the below test assertion
    expect(centsToDecimals(12345).slice(0,6)).toEqual('123.45');    // Slicing used to get to six chars (five numbers plus decimal point .)
  });

  it("Should convert a number of cents and return a string represenation of a floating point number.", function () {
    // ... complete the below test assertion
    var test1 = centsToDecimals(123);
    console.log(test1)
    expect(centsToDecimals(123).slice(0,4)).toEqual('1.23');    
  });

  it("Should return a string representation of a number with `$` sign appended at the end.", function () {
    // ... complete the below test assertion
    expect(centsToDecimals(12345)).toEqual('123.45$');    
  });
});
