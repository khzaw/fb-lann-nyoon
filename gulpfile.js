'use strict';
var gulp = require('gulp'),
    bower = require('gulp-bower'),
    mainBowerFiles = require('gulp-main-bower-files'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify');

var paths = {
  bowerJson: 'bower.json',
  bowerComponents: 'bower_components',
  libs: 'libs'
};

gulp.task('bower', function() {
  return bower()
    .pipe(gulp.dest(config.bowerDir))
});

gulp.task('bower-override', function() {
  return gulp.src(paths.bowerJson)
    .pipe(mainBowerFiles({
      overrides: {
        'schema-ui': {
          main: [
            './dist/css/*.min.*',
            './dist/js/global.js',
            './dist/js/jquery-1.11.1.min.js',
            './dist/fonts/*/*.*'
          ]
        }
      }
    }))
    // .pipe(uglify())
    .pipe(gulp.dest('libs'));
});
