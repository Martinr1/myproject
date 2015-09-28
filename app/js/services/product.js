'use strict';

var servicesModule = require('./_index.js');

/**
 * @ngInject
 */
function ProductService( ) {

    var service = {};

    service.newName = '';
    service.newFrequency = '';
    service.newPrice = '';
    service.newPackage = '';

    service.PackageData = [
        {frequency: 'monthly', name: 'Hero', price: 25.0},
        {frequency: 'monthly', name: 'Leader', price: 50.0},
        {frequency: 'monthly', name: 'Champion', price: 100.0},
        {frequency: 'once', name: 'Daisy', price: 2.0},
        {frequency: 'once', name: 'Butterfly', price: 10.0},
        {frequency: 'once', name: 'Honey Bee', price: 25.0},
        {frequency: 'once', name: 'Hummingbird', price: 50.0}
    ];

    service.deletePackage = function (item) {

        var index = service.PackageData.indexOf(item);
        service.PackageData.splice(index, 1);

    };

    service.addPackage = function (newName, newPrice, newFrequency) {

        service.PackageData.push({
            frequency: newFrequency,
            name: newName,
            price: newPrice
        });

    };

    service.getPackageList = function () {

        return service.PackageData;

    };


    return service;

}

servicesModule.service('ProductService', ProductService);
