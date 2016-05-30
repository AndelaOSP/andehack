(() => {
  'use strict';
  const gulp = require('gulp');
  const util = require('gulp-load-plugins')().util;
  const config = require('./config');


  gulp.task('browserify', () => {
    return config.browserify('./app/scripts/app.js').bundle()
      .on('success', util.log.bind(util, 'Browserify Rebundled'))
      .on('error', util.log.bind(util, 'Browserify ' +
        'Error: in browserify gulp task'))
      // vinyl-source-stream makes the bundle compatible with gulp
      .pipe(config.source('app.js')) // Desired filename
      // Output the file
      .pipe(gulp.dest('./public/js/'))
      .pipe(config.sync.stream());
  });
})();
