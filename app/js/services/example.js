'use strict';

var servicesModule = require('./_index.js');

/**
 * @ngInject
 */
function ProductService($q, $http) {

  var service = {};

  PackageData = [
    {frequency: 'monthly', name: 'Hero', price: 25.0},
    {frequency: 'monthly', name: 'Leader', price: 50.0},
    {frequency: 'monthly', name: 'Champion', price: 100.0},
    {frequency: 'once', name: 'Daisy', price: 2.0},
    {frequency: 'once', name: 'Butterfly', price: 10.0},
    {frequency: 'once', name: 'Honey Bee', price: 25.0},
    {frequency: 'once', name: 'Hummingbird', price: 50.0}
  ];

  service.get = function() {
    var deferred = $q.defer();

    $http.get('apiPath').success(function(data) {
        deferred.resolve(data);
    }).error(function(err, status) {
        deferred.reject(err, status);
    });

    return deferred.promise;
  };

  return service;

}

servicesModule.service('ProductService', ProductService);
