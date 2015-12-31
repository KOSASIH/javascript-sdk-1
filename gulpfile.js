'use strict';

var gulp = require('gulp');
var browserSync = require('browser-sync');
var reload = browserSync.reload;

// Serve demo page
gulp.task('demo', function() {
  browserSync({
    port: 5000,
    notify: false,
    logPrefix: 'sdk-demo',
    snippetOptions: {
      rule: {
        match: '<span id="browser-sync-binding"></span>',
        fn: function(snippet) {
          return snippet;
        }
      }
    },
    server: {
      baseDir: 'demo',
      routes: {
        '/scripts': 'src'
      }
    }
  });

  gulp.watch(['src/*'], reload);
  gulp.watch(['demo/*'], reload);

});
