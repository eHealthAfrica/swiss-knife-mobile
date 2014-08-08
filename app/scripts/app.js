'use strict';

angular.module('swissKnifeMobileApp', [
    'ui.bootstrap',
    'ui.router',
    'config',
    'ngAnimate',
    'db'
  ])
  .config(function($compileProvider) {
    // to bypass Chrome app CSP for images.
    $compileProvider.imgSrcSanitizationWhitelist(/^\s*(chrome-extension):/);
  })
  .run(function($rootScope, $state){
    $rootScope.pageTitle = 'CouchDB Console';
    $rootScope.$on('$stateChangeSuccess', function () {
      if(angular.isDefined($state.$current.self.data)){
        $rootScope.pageTitle =
          angular.isDefined($state.$current.self.data.label) ? $state.$current.self.data.label : $rootScope.pageTitle;
      }
    });
  });
