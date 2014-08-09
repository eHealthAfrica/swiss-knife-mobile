'use strict';

/**
 * @ngdoc service
 * @name swissKnifeMobileApp.utility
 * @description
 * # utility
 * Service in the swissKnifeMobileApp.
 */
angular.module('swissKnifeMobileApp')
  .service('utility', function utility() {
    // AngularJS will instantiate a singleton by calling "new" on this function
    this.castArrayToObject = function(array, key, callback){
      var newObject = {};
      key = angular.isUndefined(key) ? 'id' : key;
      if(angular.isArray(array)) {
        for (var i = 0; i < array.length; i++) {
          if (angular.isDefined(callback) && angular.isFunction(callback)){
            key = callback(array[i]);
            newObject[key] = array[i]
          } else {
            newObject[array[i][key]] = array[i];
          }
        }
      }
      return newObject;
    };

    this.removeFromArray = function (needle, haystack) {
      if(angular.isArray(haystack)){
        var index = haystack.indexOf(needle);
        return index !== -1 ? haystack.splice(index, 1) : haystack;
      }
      return haystack;
    };

    this.has = function(obj, key) {
      return obj != null && hasOwnProperty.call(obj, key);
    };

  });
