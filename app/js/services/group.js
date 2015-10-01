'use strict';

var servicesModule = require('./_index.js');

/**
 * @ngInject
 */
function GroupService(productService) {

    var service = {};

    var products = productService.getPackageList();

    service.groupData = [
        {name: 'group1', product: products[0]},
        {name: 'group2', product: products[1]},
        {name: 'group3', product: products[2]},
        {name: 'group4', product: products[3]},
        {name: 'group5', product: products[4]},
        {name: 'group6', product: products[5]},
        {name: 'group7', product: products[6]}
    ];

    service.callHandleData  = [
        {"reject_busy": 'Reject with busy signal'},
        {"forward": 'forward to administrators'}

    ];
    service.modeData = [
        {mode: 'chat'},
        {mode: 'broadcast'}

    ];
    service.promptsData = [
        {name: 'group1', product: products[0]},
        {name: 'group2', product: products[1]},
        {name: 'group3', product: products[2]},
        {name: 'group4', product: products[3]},
        {name: 'group5', product: products[4]},
        {name: 'group6', product: products[5]},
        {name: 'group7', product: products[6]}
    ];

    service.deleteGroup = function (item) {

        var index = service.groupData.indexOf(item);
        service.groupData.splice(index, 1);

    };

    service.addGroup = function (newName, newProduct) {
        console.log(newName);
        console.log(newProduct);
        service.groupData.push({
            name: newName,
            product: newProduct
        });

    };

    console.log(service.GroupData);


    service.getGroupList = function () {

        return service.groupData;

    };

    service.getCallHandleList = function () {

        return service.callHandleData;

    };

    service.getModeList = function () {

        return service.modeData;

    };

    return service;

}

servicesModule.service('GroupService', ['ProductService', GroupService]);
