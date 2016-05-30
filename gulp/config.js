(() => {
  'use strict';
  const ENV = process.env.NODE_ENV || 'development';
  const browserSync = require('browser-sync').create();

  if (ENV === 'development') {
    require('dotenv').load();
  }

  module.exports = {
    source: require('vinyl-source-stream'),
    browserify: require('browserify'),
    jshint: require('jshint'),
    buffer: require('vinyl-buffer'),
    sync: browserSync,
    paths: {
      public: 'public/**',
      jade: ['!app/shared/**', 'app/**/*.jade'],
      scripts: 'app/**/*.js',
      styles: 'app/styles/*.+(less|css)',
      images: 'app/images/**/*',
      staticFiles: [
        '!app/**/*.+(less|css|js|jade)',
        '!app/images/**/*',
        'app/**/*.*'
      ]
    }
  };
})();
