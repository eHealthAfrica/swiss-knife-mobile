'use strict';

angular.module('swissKnifeMobileApp')
  .config(function($stateProvider) {
    $stateProvider
      .state('drivers-log', {
        parent: 'root.index',
        url: '/drivers-log',
        data: {
          label: 'Drivers Log Page'
        },
        templateUrl: 'views/drivers-log/index.html',
        controller: 'DriversLogCtrl'
      })
  })
  .controller('DriversLogCtrl', function ($scope, vehicleService) {

    $scope.buttonState = false;
    $scope.selectedVehicle = '';
    $scope.vehicleList = vehicleService.getVehicleList();
    $scope.selectVehicle = function() {
      if ($scope.selectedVehicle === '') {
        $scope.buttonState = false;
      }
    };
  });
