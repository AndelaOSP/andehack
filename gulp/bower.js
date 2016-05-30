(() => {
  'use strict';
  const gulp = require('gulp');
  const bower = require('gulp-load-plugins')().bower;

  gulp.task('bower', () => {
    return bower({ interactive: false })
      .pipe(gulp.dest('public/lib/'));
  });
})();
