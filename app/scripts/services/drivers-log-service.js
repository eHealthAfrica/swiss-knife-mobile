'use strict';

/**
 * @ngdoc service
 * @name swissKnifeMobileApp.driversLogService
 * @description
 * # driversLogService
 * Service in the swissKnifeMobileApp.
 */
angular.module('swissKnifeMobileApp')
  .service('driversLogService', function driversLogService($q, locationService, storageFactory) {
    // AngularJS will instantiate a singleton by calling "new" on this function

    this.sendGeoData = function(eventID, driverID, vehicleID, model) {
      return locationService.sendGeoData(eventID, driverID, vehicleID, model);
    };

  });
