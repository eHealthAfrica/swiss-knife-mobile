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
  .controller('DriversLogCtrl', function ($scope, vehicleService, driversLogService, userService) {
    var user = userService.getUser();

    $scope.buttonState = undefined;
    $scope.selectedVehicle = '';

    vehicleService.getVehicleList()
      .then(function(vehicleList) {
        $scope.vehicleList = vehicleList;
      })
      .catch(function(reason) {
        console.log(reason);
      });

    $scope.selectVehicle = function() {
      if ($scope.selectedVehicle === '') {
        $scope.buttonState = false;
      }
    };

    var eventsID = {
      start: 'http://54.220.157.69/rest/event-types/1/',
      stop: 'http://54.220.157.69/rest/event-types/2/'
    };

    $scope.toggleButton = function() {
      if($scope.buttonState === undefined || $scope.buttonState === false){
        driversLogService.sendGeoData(eventsID.start, user.url, $scope.selectedVehicle.url)
          .then(function(response) {
            console.info(response);
          })
          .catch(function(reason) {
            console.error(reason);
          });
        $scope.buttonState = true;
      }
      else{
        driversLogService.sendGeoData(eventsID.stop, user.url, $scope.selectedVehicle.url)
          .then(function(response) {
            console.info(response);
          })
          .catch(function(reason) {
            console.error(reason);
          });
        $scope.buttonState = false;
      }
    };


  });
