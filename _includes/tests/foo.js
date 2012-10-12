// Chai BDD.
// @see http://chaijs.com/api/bdd/
var expect = chai.expect;

describe('foo', function() {
    var foo = 'bar';
    it('should be "bar"', function() {
        expect(foo).to.be.a('string');
        expect(foo).to.equal('bar');
    });
});
