// import appConfig from './config/app.config';
angular.module('hackit.components', []);
angular.module('hackit.services', []);
angular.module('hackit.filters', []);

// require components

require('./components/appComponent');
require('./components/home/homeComponent');
require('./services/AuthService');
// require filters
// end of document ready

// require services

const app = angular.module('hackit', [
  'hackit.components',
  'hackit.filters',
  'hackit.services',
  'ngComponentRouter',
  'ngResource',
  'ngMaterial'
]);

var config = {
  apiKey: "AIzaSyAxqTx7xNPDQI98q8o2ANGrcTHn92qNR5s",
  authDomain: "andehack-e166c.firebaseapp.com",
  databaseURL: "https://andehack-e166c.firebaseio.com",
  storageBucket: "andehack-e166c.appspot.com",
  messagingSenderId: "499416012914"
};

firebase.initializeApp(config);

app.value('$routerRootComponent', "app");

app.run(['$rootScope', function($rootScope) {
  console.log('currentUser', $rootScope.currentUser)
}])
