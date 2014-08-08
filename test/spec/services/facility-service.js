'use strict';

describe('Service: facilityService', function () {

  // load the service's module
  beforeEach(module('swissKnifeMobileApp'));

  // instantiate service
  var facilityService;
  beforeEach(inject(function (_facilityService_) {
    facilityService = _facilityService_;
  }));

  it('should do something', function () {
    expect(!!facilityService).toBe(true);
  });

});
