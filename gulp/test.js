(() => {
  'use strict';
  const gulp = require('gulp');
  const Server = require('karma').Server;
  const options = {
    tasks: ['test:bend', 'test:fend']
  };

  // Front end testing
  gulp.task('test:fend', (done) => {
    const karma = new Server({
      configFile: __dirname + '/karma.conf.js',
      singleRun: true
    }, done);

    return karma.start();
  });

  // Backend testing

  gulp.task('test:bend', () => {
    return console.log('Not implemented');
  });

  gulp.task('test', ['build'], () => {
    options.tasks.forEach(function (task) {
      gulp.start(task);
    });
  });

})();
