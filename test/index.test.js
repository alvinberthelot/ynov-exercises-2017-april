var expect = require('chai').expect;
var index = require('../index');

describe('Sum function', function() {

  it('Two number should return sum', function() {
    expect(index.sum([1, 2])).to.be.equal(3);
  });

  it('Two number and one string should return sum', function() {
    expect(index.sum([1, "test", 7])).to.be.equal(8);
  });

});