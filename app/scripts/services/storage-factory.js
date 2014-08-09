'use strict';

/**
 * @ngdoc service
 * @name swissKnifeMobileApp.storageFactory
 * @description
 * # storageFactory
 * Factory in the swissKnifeMobileApp.
 */
angular.module('swissKnifeMobileApp')
  .factory('storageFactory', function ($q, config, $http) {
    var apiUrl = config.api.url+'/rest';
    var getAll = function(model, configParams) {
      configParams = angular.isDefined(configParams) ? configParams : {};

      var deferred = $q.defer();
      $http.get(apiUrl+'/'+model+'/', configParams)
        .success(function(response) {
          deferred.resolve(response);
        })
        .error(function(reason) {
          deferred.reject(reason);
        });
      return deferred.promise;
    };

    var insert = function(model, data) {
      var deferred = $q.defer();
      $http.post(apiUrl+'/'+model+'/', data)
        .success(function(response) {
          deferred.resolve(response);
        })
        .error(function(reason) {
          deferred.reject(reason);
        });
      return deferred.promise;
    };

    var update = function(model, data, id) {
      var deferred = $q.defer();
      $http.put(apiUrl+'/'+model+'/'+id, data)
        .success(function(response) {
          deferred.resolve(response);
        })
        .error(function(reason) {
          deferred.reject(reason);
        });
      return deferred.promise;
    };

    var save = function(model, data, id) {
      if (angular.isDefined(id)) {
        return update(model, data, id);
      } else {
        return insert(model, data)
      }
    };

    return {
      all: getAll,
      save: save
    };
  });
