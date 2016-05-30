(() => {
  'use strict';
  // require gulp tasks and modules
  require('require-dir')('./gulp');
  const gulp = require('gulp');
  const sync = require('./gulp/config').sync;

  gulp.task('default', ['build', 'nodemon'], () => {
    sync.init(null, {
      proxy: 'http://localhost:3000',
      files: ['public/**/*.*'],
      browser: 'google chrome',
      port: 3001,
    });
  });

})();
