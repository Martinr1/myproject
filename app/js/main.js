'use strict';

var angular = require('angular');

// angular modules
require('angular-ui-router');
require('./templates');
require('./controllers/_index');
require('./services/_index');
require('./directives/_index');

// create and bootstrap application
angular.element(document).ready(function() {

  var requires = [
    'ui.router',
    'templates',
    'app.controllers',
    'app.services',
    'app.directives'
  ];

  // mount on window for testing
  window.app = angular.module('app', requires);

  angular.module('app').constant('AppSettings', require('./constants'));

  angular.module('app').config(require('./on_config'));

  angular.module('app').run(require('./on_run'));

  angular.bootstrap(document, ['app']);

  app.controller("MainController", function(){

   this.groups =  [
    {frequency: 'monthly', name: 'Hero', price: 25.0},
    {frequency: 'monthly', name: 'Leader', price: 50.0},
    {frequency: 'monthly', name: 'Champion', price: 100.0},
    {frequency: 'once', name: 'Daisy', price: 2.0},
    {frequency: 'once', name: 'Butterfly', price: 10.0},
    {frequency: 'once', name: 'Honey Bee', price: 25.0},
    {frequency: 'once', name: 'Hummingbird', price: 50.0}
];


  });

});
