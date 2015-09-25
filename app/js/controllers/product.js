'use strict';

var controllersModule = require('./_index');

/**
 * @ngInject
 */
function ProductController(productService) {

  // ViewModel
  var vm = this;

  vm.title = 'AngularJS, Gulp, and Browserify!';
  vm.number = 1234;

  vm.newName = '';
  vm.newFrequency = '';
  vm.newPrice = '';
  vm.newPackage = '';

  vm.PackageData =  productService.getPackageList();

  vm.addPackage = function(){

      productService.addPackage(vm.newName,vm.newPrice,vm.newFrequency);
      vm.clearFields();

  };

  vm.clearFields = function(){

      vm.newName = "";
      vm.newPrice = "";
      vm.newFrequency = "";

  };

  vm.buttonEnabled = function(){

      if (vm.newName !== "" && vm.newPrice !=="" && vm.newFrequency !=="") {
        return true;
      }

  };

  vm.deletePackage = function(item){

      productService.deletePackage(item);

  };

}

controllersModule.controller('ProductController',["ProductService", ProductController]);
