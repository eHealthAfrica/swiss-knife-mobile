'use strict';

angular.module('swissKnifeMobileApp')
  .config(function($urlRouterProvider, $stateProvider) {
    // Initial state
    $urlRouterProvider.otherwise('/');
    $stateProvider
      .state('home', {
        parent: 'root.index',
        url: '/',
        data: {
          label: 'Home Page'
        },
        templateUrl: 'views/home/index.html',
        controller: 'HomeCtrl'
      });
  })
  .controller('HomeCtrl', function ($scope) {

  });
