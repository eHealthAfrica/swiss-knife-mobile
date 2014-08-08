'use strict';

describe('Service: locationService', function () {

  // load the service's module
  beforeEach(module('swissKnifeMobileApp'));

  // instantiate service
  var locationService;
  beforeEach(inject(function (_locationService_) {
    locationService = _locationService_;
  }));

  it('should do something', function () {
    expect(!!locationService).toBe(true);
  });

});
