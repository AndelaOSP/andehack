(() => {
  'use strict';
  const gulp = require('gulp');
  const build = {
    tasks: ['jade', 'less', 'static-files', 'images', 'browserify', 'bower']
  };


  // -------------------------------------
  //   Task: Build
  // -------------------------------------

  gulp.task('build', function () {

    build.tasks.forEach(function (task) {
      gulp.start(task);
    });

  });

})();
