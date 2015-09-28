'use strict';

var servicesModule = require('./_index.js');

/**
 * @ngInject
 */
function GroupService(productService) {

    var service = {};

    var products = productService.getPackageList();

    service.GroupData = [
        {name: 'group1', product: products[0]},
        {name: 'group2', product: products[1]},
        {name: 'group3', product: products[2]},
        {name: 'group4', product: products[3]},
        {name: 'group5', product: products[4]},
        {name: 'group6', product: products[5]},
        {name: 'group7', product: products[6]}
    ];

    service.deleteGroup = function (item) {

        var index = service.GroupData.indexOf(item);
        service.GroupData.splice(index, 1);

    };

    service.addGroup = function (newName, newProduct) {
        console.log(newName);
        console.log(newProduct);
        service.GroupData.push({
            name: newName,
            product: newProduct
        });

    };

    console.log(service.GroupData);


    service.getGroupList = function () {

        return service.GroupData;

    };

    return service;

}

servicesModule.service('GroupService', ['ProductService', GroupService]);
