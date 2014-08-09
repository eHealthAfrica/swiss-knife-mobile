'use strict';

/**
 * @ngdoc service
 * @name swissKnifeMobileApp.vehicleService
 * @description
 * # vehicleService
 * Service in the swissKnifeMobileApp.
 */
angular.module('swissKnifeMobileApp')
  .service('vehicleService', function vehicleService($q, utility, storageFactory) {
    // AngularJS will instantiate a singleton by calling "new" on this function

    this.getVehicleList = function() {
      var deferred = $q.defer();
      storageFactory.all('vehicles')
        .then(function(vehicleList) {
          vehicleList = utility.castArrayToObject(vehicleList, 'url');
          deferred.resolve(vehicleList);
        })
        .catch(function(reason) {
          deferred.reject(reason);
        });
      return deferred.promise;
    };
  });
