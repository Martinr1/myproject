'use strict';

var controllersModule = require('./_index');

/**
 * @ngInject
 */
function GroupController(groupService, productService) {

    // ViewModel
    var vm = this;

    vm.groupData = groupService.getGroupList();
    vm.packageData = productService.getPackageList();
    vm.newName = "";
    vm.newProduct = "";
    vm.isButtonEnabled = false;


    vm.showButton = function () {

        vm.isButtonEnabled = true;

    };

    vm.addGroup = function () {

        groupService.addGroup(vm.newName, vm.newProduct);
        vm.clearFields();

    };

    vm.clearFields = function () {

        vm.newName = "";
        vm.newProduct = "";

    };

    vm.buttonEnabled = function () {

        if (vm.newName !== "" && vm.newProduct !== "") {
            return true;
        }

    };

    vm.deleteGroup = function (item) {

        groupService.deleteGroup(item);

    };

}

controllersModule.controller('GroupController', ["GroupService", "ProductService", GroupController]);
