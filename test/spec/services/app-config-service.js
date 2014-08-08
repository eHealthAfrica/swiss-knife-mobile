'use strict';

describe('Service: appConfigService', function () {

  // load the service's module
  beforeEach(module('swissKnifeMobileApp'));

  // instantiate service
  var appConfigService;
  beforeEach(inject(function (_appConfigService_) {
    appConfigService = _appConfigService_;
  }));

  it('should do something', function () {
    expect(!!appConfigService).toBe(true);
  });

});
