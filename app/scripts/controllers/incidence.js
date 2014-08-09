'use strict';

/**
 * @ngdoc function
 * @name swissKnifeMobileApp.controller:IncidenceCtrl
 * @description
 * # IncidenceCtrl
 * Controller of the swissKnifeMobileApp
 */
angular.module('swissKnifeMobileApp')
  .config(function($stateProvider) {
    $stateProvider
      .state('incidence-log', {
        parent: 'root.index',
        url: '/incidence-log',
        data: {
          label: 'Incidence Log Page'
        },
        templateUrl: 'views/incidence-log/index.html',
        controller: 'IncidenceCtrl'
      })
  })
  .controller('IncidenceCtrl', function ($scope, incidenceService, $state, userService, growl) {
    var user = userService.getUser();

    incidenceService.getEventTypeList()
      .then(function(eventTypes) {
        $scope.evenTypeList = eventTypes;
      })
      .catch(function(reason) {
        console.error(reason);
      });

    $scope.sendEvent = function(eventID) {
      growl.success('sending geo data and message');
      var eventCode = parseInt(eventID.code, 10);
      if ([0, 1].indexOf(eventCode) !== -1) {
        $state.go('drivers-log');
      } else {
        incidenceService.sendGeoData(eventID.url, user.url)
          .then(function(response) {
            growl.success('data sent');
            console.log(response);
          })
          .catch(function(reason) {
            console.log(reason);
          });
      }
    };
  });

