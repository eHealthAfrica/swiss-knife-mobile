'use strict';

describe('Controller: DriverslogCtrl', function () {

  // load the controller's module
  beforeEach(module('swissKnifeMobileApp'));

  var DriverslogCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DriverslogCtrl = $controller('DriverslogCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
