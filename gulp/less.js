(() => {
  'use strict';
  const gulp = require('gulp');
  const plugins = require('gulp-load-plugins')();
  const path = require('path');
  const config = require('./config');

  gulp.task('less', () => {
    gulp.src(config.paths.styles)
      .pipe(plugins.less({
        paths: [path.join(__dirname, './app/styles/app.less')]
      }))
      .pipe(plugins.minifyCss())
      .pipe(gulp.dest('./public/css'))
      .pipe(config.sync.stream());
  });
})();
