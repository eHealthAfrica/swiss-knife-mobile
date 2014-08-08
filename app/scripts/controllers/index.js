'use strict';

angular.module('swissKnifeMobileApp')
  .config(function($stateProvider, $locationProvider){
    //$locationProvider.html5Mode(true);
    $stateProvider
      .state('root', {
        url: '',
        abstract: true,
        templateUrl: 'views/index/index.html'
      })
      .state('root.index', {
        abstract: true,
        views: {
          'header': {
            templateUrl: 'views/index/header.html',
            controller: function($scope, $state){
              $scope.state = $state;
            }
          },
          'content': {}
        }
      });
  });