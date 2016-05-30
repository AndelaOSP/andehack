(() => {
  'use strict';
  angular.module('sampleApp.components', []);
  angular.module('sampleApp.services', []);
  angular.module('sampleApp.filters', []);

  angular.module('sampleApp', [
    'sampleApp.components',
    'sampleApp.filters',
    'sampleApp.services'
  ]);
  // require components
  require('./components/homeComponent');
  // require filters
  //
  // require services



})();
