'use strict';

/**
 * @ngInject
 */
function OnConfig($stateProvider, $locationProvider, $urlRouterProvider) {

  $locationProvider.html5Mode(true);

  $stateProvider
  .state('Home', {
    url: '/',
    controller: 'ProductController as products',
    templateUrl: 'product.html',
    title: 'Home'
  });

  $urlRouterProvider.otherwise('/');

}

module.exports = OnConfig;
