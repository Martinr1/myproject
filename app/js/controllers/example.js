'use strict';

var controllersModule = require('./_index');

/**
 * @ngInject
 */
function ExampleCtrl() {

  // ViewModel
  var vm = this;

  vm.title = 'AngularJS, Gulp, and Browserify!';
  vm.number = 1234;

  vm.newName = '';
  vm.newFrequency = '';
  vm.newPrice = '';
  vm.newPackage = '';

  vm.PackageData = [
    {frequency: 'monthly', name: 'Hero', price: 25.0},
    {frequency: 'monthly', name: 'Leader', price: 50.0},
    {frequency: 'monthly', name: 'Champion', price: 100.0},
    {frequency: 'once', name: 'Daisy', price: 2.0},
    {frequency: 'once', name: 'Butterfly', price: 10.0},
    {frequency: 'once', name: 'Honey Bee', price: 25.0},
    {frequency: 'once', name: 'Hummingbird', price: 50.0}
  ];

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

      if (vm.newName != "" && vm.newPrice !="" && vm.newFrequency !="") {
        return true;
  }


    };

    vm.deletePackage = function(item){


    var index =vm.PackageData.indexOf(item);
    vm.PackageData.splice(index,1);

    };

}

controllersModule.controller('ExampleCtrl', ExampleCtrl);
