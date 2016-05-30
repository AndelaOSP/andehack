(() => {
  'use strict';
  const gulp = require('gulp');
  const nodemon = require('gulp-load-plugins')().nodemon;
  const env = process.env.NODE_ENV || 'development';

  if (env === 'development') {
    require('dotenv').load();
  }

  gulp.task('nodemon', () => {
    return nodemon({
          script: 'index.js',
          ext: 'js',
          ignore: ['public/**', 'app/', 'node_modules/']
        })
        .on('change', ['lint'])
        .on('restart', () => {
          console.log('>> node restart');
        });
  });
})();
