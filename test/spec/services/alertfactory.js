'use strict';

describe('Service: alertFactory', function () {

  // load the service's module
  beforeEach(module('swissKnifeMobileApp'));

  // instantiate service
  var alertFactory;
  beforeEach(inject(function (_alertFactory_) {
    alertFactory = _alertFactory_;
  }));

  it('should do something', function () {
    expect(!!alertFactory).toBe(true);
  });

});
