'use strict';

/**
 * @ngdoc service
 * @name swissKnifeMobileApp.cacheService
 * @description
 * # cacheService
 * Service in the swissKnifeMobileApp.
 */
angular.module('swissKnifeMobileApp')
  .service('cacheService', function cacheService($cacheFactory) {
    this.cache = function (cacheID, config) {
      config = angular.isDefined(config) ? config : {};
      var cache = $cacheFactory.get(cacheID);
      return angular.isDefined(cache) ? cache : $cacheFactory(cacheID, config);
    };

    this.updateCachedCopy = function (cacheServiceInstance, key, value) {
      cacheServiceInstance.put(key, value);
    }
  });
