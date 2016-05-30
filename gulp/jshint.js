(()=> {
  'use strict';
  const gulp = require('gulp');
  const paths = require('./config').paths;
  const jshint = require('gulp-load-plugins')().jshint;

  gulp.task('lint', ()=> {
    return gulp.src(paths.scripts)
      .pipe(jshint())
      .pipe(jshint.reporter('jshint-stylish', { verbose: true }));
  });
})();
