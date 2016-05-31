(() => {
  'use strict';
  angular.module('sampleApp.components', []);
  angular.module('sampleApp.services', []);
  angular.module('sampleApp.filters', []);

  // require components
  require('./components/appComponent');
  require('./components/homeComponent');
  // require filters
  //
  // require services

  const app = angular.module('sampleApp', [
    'sampleApp.components',
    'sampleApp.filters',
    'sampleApp.services',
    'ngComponentRouter',
    'ngResource',
    'ngMaterial'
  ]);

  app.value('$routerRootComponent', "app");

})();
