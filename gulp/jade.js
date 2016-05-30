(() => {
  'use strict';
  const gulp = require('gulp');
  const config = require('./config');
  const jade = require('gulp-load-plugins')().jade;

  gulp.task('jade', () => {
    gulp.src(config.paths.jade)
      .pipe(jade())
      .pipe(gulp.dest('./public/'))
      .pipe(config.sync.reload({
        stream: true
      }));
  });

})();
