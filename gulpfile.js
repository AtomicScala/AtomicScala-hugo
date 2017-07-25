
// Load plugins
var gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    cssnano = require('gulp-cssnano'),
    rename = require('gulp-rename'),
    notify = require('gulp-notify'),
    del = require('del'),
    plumber = require('gulp-plumber'),
    browserSync = require('browser-sync'),
    changed = require('gulp-changed');


// Styles
gulp.task('styles', function() {
  return gulp.src('themes/atomic/static/scss/main.scss', { style: 'expanded' })
    .pipe(sass().on('error', sass.logError))
    .pipe(plumber())
    .pipe(autoprefixer({browsers: ['last 2 version']}))
    .pipe(gulp.dest('themes/atomic/static/css/'))
    .pipe(rename({ suffix: '.min' }))
    .pipe(cssnano())
    .pipe(gulp.dest('themes/atomic/static/css/'))
    .pipe(notify({ message: 'Styles task complete' }));
});


// Static server
gulp.task('browser-sync', function() {
    browserSync.init([
      "themes/atomic/static/css/*.css",
      "themes/atomic/static/js/*.js",
      'themes/atomic/**/*.html'], {
        proxy:  "http://localhost:1313"
    });
});

// Watch
gulp.task('watch', ['browser-sync'], function() {
  gulp.watch('themes/atomic/static/scss/main.scss', ['styles']);
});

// Default task
gulp.task('default', ['browser-sync'], function() {
    gulp.start('styles');
    gulp.start('watch');
});
