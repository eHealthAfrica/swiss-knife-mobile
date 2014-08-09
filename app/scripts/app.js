'use strict';

angular.module('swissKnifeMobileApp', [
    'ngResource',
    'ui.bootstrap',
    'ui.router',
    'angular-growl',
    'config',
    'ngAnimate',
    'db'
  ])
  .config(function($compileProvider) {
    // to bypass Chrome app CSP for images.
    $compileProvider.imgSrcSanitizationWhitelist(/^\s*(chrome-extension):/);
  })
  .run(function($rootScope, $state, userService){
    $rootScope.pageTitle = 'Swiss Knife Mobile';
    $rootScope.$on('$stateChangeSuccess', function () {
      if(angular.isDefined($state.$current.self.data)){
        $rootScope.pageTitle =
          angular.isDefined($state.$current.self.data.label) ? $state.$current.self.data.label : $rootScope.pageTitle;
      }
    });

    if(angular.isUndefined(userService.getUser())){
      $rootScope.userLoggedIn = false;
    }
  })
  .config(function(growlProvider) {
    growlProvider.globalTimeToLive({
      success: 2000,
      error: 5000,
      warning: 2000,
      info: 2000
    });
  });
