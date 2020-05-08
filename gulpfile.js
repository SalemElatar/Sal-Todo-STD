/*global require*/
var gulp = require('gulp');
var concat = require('gulp-concat');
var prefixer = require('gulp-autoprefixer');
var sass = require('gulp-sass');
var pug = require('gulp-pug');
var sourcemaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglify');
var livereload = require('gulp-livereload');
//var zip = require('gulp-zip'); //Used in watch task


//HTML Task
gulp.task('html', function () {
  "use strict";
  return gulp.src('stage/html/*.pug')
          .pipe(pug({pretty: true}))
          .pipe(gulp.dest('dist'))
          .pipe(livereload()); //You have to add -livereload.listen()- at the beggining of watch task
});



//CSS Task
gulp.task('css', function () {
  "use strict";
  return gulp.src(['stage/css/**/*.css', 'stage/css/**/*.scss'])
            .pipe(sourcemaps.init())
            .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
            .pipe(prefixer())
            .pipe(concat('main.css'))
            .pipe(sourcemaps.write('.'))
            .pipe(gulp.dest('dist/css'))
            .pipe(livereload());
});

//


//JS Task
gulp.task('js', function () {
  "use strict";
  return gulp.src('stage/js/*.js')
          .pipe(concat('main.js'))
          .pipe(uglify())
          .pipe(gulp.dest('dist/js'))
          .pipe(livereload()); //You have to add -livereload.listen()- at the beggining of watch task
});





//  ===== Waaatch task =====
gulp.task('watch', function () {
  "use strict";
  require('./server.js');
  livereload.listen();
  gulp.watch("stage/**/*.pug", gulp.series('html'));
  gulp.watch("stage/css/**/*.scss", gulp.series('css'));
  gulp.watch("stage/css/**/*.css", gulp.series('css'));
  gulp.watch("stage/js/*.js", gulp.series('js'));
});











