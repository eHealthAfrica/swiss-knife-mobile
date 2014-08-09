'use strict';

/**
 * @ngdoc service
 * @name swissKnifeMobileApp.incidenceService
 * @description
 * # incidenceService
 * Service in the swissKnifeMobileApp.
 */
angular.module('swissKnifeMobileApp')
  .service('incidenceService', function incidenceService($q, storageFactory, utility, locationService) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    var MODEL = 'event-types';
    this.getEventTypeList = function() {
      var deferred = $q.defer();
      storageFactory.all(MODEL)
        .then(function(eventTypes) {
          deferred.resolve(utility.castArrayToObject(eventTypes, 'url'));
        })
        .catch(function(reason) {
          deferred.reject(reason);
        });
      return deferred.promise;
    };

    this.sendGeoData = function(eventID, driverID, vehicleID) {
      return locationService.sendGeoData(eventID, driverID, vehicleID);
    };

  });
