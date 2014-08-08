'use strict';

describe('Service: cacheService', function () {

  // load the service's module
  beforeEach(module('swissKnifeMobileApp'));

  // instantiate service
  var cacheService;
  beforeEach(inject(function (_cacheService_) {
    cacheService = _cacheService_;
  }));

  it('should do something', function () {
    expect(!!cacheService).toBe(true);
  });

});
