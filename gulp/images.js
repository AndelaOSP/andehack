(() => {
  'use strict';
  const gulp = require('gulp');
  const imagemin = require('gulp-load-plugins')().imagemin;
  const paths = require('./config').paths;

  gulp.task('images', () => {
    gulp.src(paths.images)
      .pipe(imagemin({
        optimizationLevel: 3,
        progressive: true,
        interlaced: true
      }))
      .pipe(gulp.dest('./public/images/'));
  });

})();
