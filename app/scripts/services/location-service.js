'use strict';

/**
 * @ngdoc service
 * @name swissKnifeMobileApp.locationService
 * @description
 * # locationService
 * Service in the swissKnifeMobileApp.
 */
angular.module('swissKnifeMobileApp')
  .service('locationService', function locationService($q, $window, storageFactory) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    var getGeoLocation = function(){
      var deferred = $q.defer();
      if('geolocation' in $window.navigator){
        var geoLocation = $window.navigator.geolocation;
        deferred.resolve(geoLocation);
      }else{
        deferred.reject('geo-location is not available on this device.');
      }
      return deferred.promise;
    };

    var getCurrentPosition = function () {
      var deferred = $q.defer();

      getGeoLocation()
        .then(function (geoLocation) {
          var onSuccess = function (position) {
            deferred.resolve(position);
          };

          var onError = function (error) {
            deferred.reject(error);
          };

          geoLocation.getCurrentPosition(onSuccess, onError);
        })
        .catch(function (reason) {
          deferred.reject(reason);
        });
      return deferred.promise;
    };

    var getMiniGeoPosition = function(geoPos){
      return {
        latitude: geoPos.coords.latitude,
        longitude: geoPos.coords.longitude,
        accuracy: geoPos.coords.accuracy
      };
    };

    this.sendGeoData = function(eventID, driverID, vehicleID) {
      var deferred = $q.defer();
      getCurrentPosition()
        .then(function (geoLocation) {
          var location = getMiniGeoPosition(geoLocation);
          if(angular.isObject(location)){
            var postData = {
              lat: parseFloat(location.latitude).toFixed(6),
              lon: parseFloat(location.longitude).toFixed(6),
              event_t: eventID,
              driver: driverID,
              timestamp: new Date().toJSON(),
              vehicle: vehicleID
            };

            storageFactory.save('events', postData)
              .then(function(response) {
                deferred.resolve(response);
              })
              .catch(function(reason) {
                deferred.reject(reason);
              });
          }
        })
        .catch(function(reason) {
          deferred.reject(reason);
        });
      return deferred.promise;
    };

    this.NO_GEO_POS = { latitude: NaN, longitude: NaN, accuracy: NaN };

  });
