'use strict';

/**
 * @ngdoc service
 * @name swissKnifeMobileApp.userService
 * @description
 * # userService
 * Service in the swissKnifeMobileApp.
 */
angular.module('swissKnifeMobileApp')
  .service('userService', function userService($q, storageFactory, cacheService) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    var MODEL = 'user';

    this.getUser = function() {
      var cache = cacheService.cache(MODEL);
      return cache.get(MODEL);
    };

    this.getUserFromServer = function(phone){
      var deferred = $q.defer();
      var cache = cacheService.cache(MODEL);
      storageFactory.all('drivers', {params: {phone: phone}})
        .then(function(driverDetails) {
          if(driverDetails.length > 0){
            cache.put(MODEL, driverDetails[0]);
          }
          deferred.resolve(driverDetails);
        })
        .catch(function(reason) {
          deferred.reject(reason);
        });
      return deferred.promise;
    }

  });
