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
      })
      .state('user-profile', {
        parent: 'root.index',
        url: '/user-profile',
        data: {
          label: 'user Profile Page'
        },
        templateUrl: 'views/home/user-profile.html',
        controller: 'UserProfileCtrl'
      })
      .state('login', {
        parent: 'root.index',
        url: '/login',
        data: {
          label: 'Login Page'
        },
        templateUrl: 'views/home/login.html',
        controller: 'LoginCtrl'
      });
  })
  .controller('HomeCtrl', function ($scope, $state ,growl, alertFactory) {

    var alertQueue = alertFactory.getAll();
    for (var i in alertQueue) {
      var alert = alertQueue[i];
      growl.success(alert.msg);
      alertFactory.remove(alert.id);
    }
    if (!$scope.userLoggedIn) {
      $state.go('login');
    }
  })
  .controller('UserProfileCtrl', function($scope, userService) {
    $scope.userProfile = userService.getUser();
  })
  .controller('LoginCtrl', function($scope, userService, $state, $rootScope, alertFactory, growl) {
    $scope.phone = '08093082558';

    $scope.loginUserIn = function() {
      if($scope.phone === ''){
        $scope.errMsg = true;
      } else{
        userService.getUserFromServer($scope.phone)
          .then(function(userDetails) {
            if(userDetails.length > 0){
              $rootScope.userLoggedIn = true;
              alertFactory.success('you have successfully logged in');
              $state.go('home');
            } else{
              growl.error('Invalid phone number or account does not exists');
            }
          })
          .catch(function(reason) {
            console.error(reason);
          });
      }


    };

  });
