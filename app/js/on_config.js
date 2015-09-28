'use strict';

/**
 * @ngInject
 */
function OnConfig($stateProvider, $locationProvider, $urlRouterProvider) {

  $locationProvider.html5Mode(true);

  $stateProvider
  .state('Home', {
    url: '/',
    controller: 'HomeController as home',
    templateUrl: 'home.html',
    title: 'Home'
  })
  .state('Product', {
    url: '/product',
    controller: 'ProductController as products',
    templateUrl: 'product.html',
    title: 'Product'
  })
  .state('Group', {
    url: '/group',
    controller: 'GroupController as groups',
    templateUrl: 'group.html',
    title: 'Group'
  });

  $urlRouterProvider.otherwise('/');

}

module.exports = OnConfig;
