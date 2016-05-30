(() => {
  'use strict';
  const gulp = require('gulp');
  const files = require('./config').paths.staticFiles;


  gulp.task('static-files', () => {
    return gulp.src(files)
      .pipe(gulp.dest('public/'));
  });

})();
