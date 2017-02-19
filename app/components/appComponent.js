'use strict';
const module = angular.module('hackit.components');

class AppController {
  constructor() {
    this.title = "sampleApp";
  }
}

module.component('app', {
  controllerAs: 'model',
  templateUrl: '/components/appComponent.html',
  $routeConfig: [{
    path: '/',
    component: 'homePage',
    name: 'Home'
  }],
  controller: AppController
});
