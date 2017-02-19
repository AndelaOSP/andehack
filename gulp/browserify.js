(() => {
  'use strict';
  const gulp = require('gulp');
  const plugins = require('gulp-load-plugins')();
  const config = require('./config');
  gulp.task('browserify', () => {
    return config.browserify('./app/app.js')
      .transform("babelify", { presets: ["es2015"] })
      .bundle()
      .pipe(config.source('app.js'))
      .pipe(config.buffer())
      .pipe(plugins.sourcemaps.init())
      .pipe(plugins.uglify())
      .pipe(
        plugins
        .sourcemaps
        .write('./maps')
      )
      .pipe(gulp.dest('./public/js/'))
      .pipe(config.sync.stream());
  });
})();
