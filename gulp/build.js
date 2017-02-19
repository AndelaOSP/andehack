(() => {
  'use strict';
  const gulp = require('gulp');
  const build = {
    tasks: ['bower', 'jade', 'less', 'static-files', 'images', 'browserify']
  };


  // -------------------------------------
  //   Task: Build
  // -------------------------------------

  gulp.task('build', function() {

    build.tasks.forEach(function(task) {
      gulp.start(task);
    });

  });

})();
