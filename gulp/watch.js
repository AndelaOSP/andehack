(() => {
  'use strict';
  const gulp = require('gulp');
  const paths = require('./config').paths;
  //reload = plugins.browserSync.reload;
  gulp.task('watch', () => {
    gulp.watch(paths.jade, ['jade']);
    gulp.watch(paths.styles, ['less']);
    gulp.watch(paths.scripts, ['lint', 'browserify']);
    //gulp.watch(paths.public).on('change', reload);
  });
})();
