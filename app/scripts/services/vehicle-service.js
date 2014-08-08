'use strict';

/**
 * @ngdoc service
 * @name swissKnifeMobileApp.vehicleService
 * @description
 * # vehicleService
 * Service in the swissKnifeMobileApp.
 */
angular.module('swissKnifeMobileApp')
  .service('vehicleService', function vehicleService(utility) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    this.getVehicleList = function() {
      var vehicleList = [
        {
          id: 1,
          license: 'XA 1204 KJA'
        },
        {
          id: 2,
          license: 'XK 4404 AKD'
        },
        {
          id: 3,
          license: 'XV 1103 ZRA'
        }
      ];
      return utility.castArrayToObject(vehicleList);
    };

  });
