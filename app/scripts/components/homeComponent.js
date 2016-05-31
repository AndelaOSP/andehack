(() => {
  'use strict';
  const module = angular.module('sampleApp.components');

  module.component('movieList', {
    templateUrl: '/templates/homeComponent.html',
    controllerAs: 'model',
    controller: function () {
      this.message = "This is the first Nyambati homeComponent";
    }
  });

})();
