(() => {
  'use strict';
  const module = angular.module('sampleApp.components');

  function AppController() {
    this.title = "sampleApp";
  }

  module.component('app', {
    controllerAs: 'model',
    templateUrl: '/templates/appComponent.html',
    $routeConfig: [{
      path: '/',
      component: 'movieList',
      name: 'List'
    }],
    controller: AppController
  });
})();
