'use strict';

describe('Service: vehicleService', function () {

  // load the service's module
  beforeEach(module('swissKnifeMobileApp'));

  // instantiate service
  var vehicleService;
  beforeEach(inject(function (_vehicleService_) {
    vehicleService = _vehicleService_;
  }));

  it('should do something', function () {
    expect(!!vehicleService).toBe(true);
  });

});
