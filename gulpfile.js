(() => {
  'use strict';
  // require gulp tasks and modules
  require('require-dir')('./gulp');
  const gulp = require('gulp');
  const sync = require('./gulp/config').sync;

  gulp.task('default', ['build', 'nodemon', 'watch'], () => {
    sync.init({
      server: './public',
    });
  });

})();
