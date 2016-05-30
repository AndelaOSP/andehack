(function () {
  'use strict';
  // require the testing modules
  const chai = require('chai');
  const expect = chai.expect;
  const assert = chai.assert;

  // tests
  describe('Home component', function() {
    context('When The app is Bootstaped', function() {
      it('Should retur true', function() {
        expect(true).to.be.eq(true);
      });
    });
  });
})();
