(() => {
  'use strict';
  // require gulp tasks and modules
  require('require-dir')('./gulp');
  const gulp = require('gulp');
  const options = {
    build: {
      tasks:['jade', 'less', 'static-files', 'images', 'browserify', 'bower'],
      destination: 'public'
    }
  };


  // -------------------------------------
  //   Task: Build
  // -------------------------------------

  gulp.task( 'build', function() {

    options.build.tasks.forEach( function( task ) {
      gulp.start( task );
    } );

  });



})();
