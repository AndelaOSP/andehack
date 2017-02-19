'use strict';
const module = angular.module('hackit.components');

module.component('homePage', {
  templateUrl: '/components/home/homeComponent.html',
  controllerAs: 'model',
  controller: function() {
    this.message = "This is the first Nyambati homeComponent";
  }
});
