'use strict';

describe('Service: driversLogService', function () {

  // load the service's module
  beforeEach(module('swissKnifeMobileApp'));

  // instantiate service
  var driversLogService;
  beforeEach(inject(function (_driversLogService_) {
    driversLogService = _driversLogService_;
  }));

  it('should do something', function () {
    expect(!!driversLogService).toBe(true);
  });

});
