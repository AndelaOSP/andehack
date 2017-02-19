// import appConfig from './config/app.config';
angular.module('hackit.components', []);
angular.module('hackit.services', []);
angular.module('hackit.filters', []);

// require components
require('./components/appComponent');
require('./components/home/homeComponent');
// require filters
//
// require services

const app = angular.module('hackit', [
  'hackit.components',
  'hackit.filters',
  'hackit.services',
  'ngComponentRouter',
  'ngResource',
  'ngMaterial'
]);

app.value('$routerRootComponent', "app");
