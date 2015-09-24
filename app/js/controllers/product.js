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

  vm.PackageData =  productService.getPackage();
console.log(productService);



  vm.addPackage = function(){

    vm.PackageData.push({
           frequency: vm.newFrequency,
           name: vm.newName,
           price: vm.newPrice
    });

    vm.newName = "";
    vm.newPrice = "";
    vm.newFrequency = "";

  };

  vm.buttonDisable = function(){

      if (vm.newName !== "" && vm.newPrice !=="" && vm.newFrequency !=="") {
        return true;
      }

  };

  vm.deletePackage = function(item){

    var index =vm.PackageData.indexOf(item);
    vm.PackageData.splice(index,1);

    };

}

controllersModule.controller('ProductController',["ProductService", ProductController]);
