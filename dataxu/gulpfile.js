
var gulp =   require('gulp');
var sass =   require('gulp-sass');
var concat = require('gulp-concat');
var coffee = require('gulp-coffee');

var src = {
  html: './src/*.html',
  scss: './src/stylesheets/app.scss',
  jsApp: './src/scripts/**/*.js',
  jsVendor: './node_modules/angular/angular.js',
  coffee: './src/scripts/**/*.coffee'
};

var dist = {
  html: './dist',
  css: './dist/stylesheets/',
  js: './dist/js'    
};



gulp.task('views', function() {
  gulp.src([src.html])
    .pipe(gulp.dest(dist.html))
});

gulp.task('stylesheets', function() {
  gulp.src([src.scss])
    .pipe(sass())
    .pipe(gulp.dest(dist.css))
});

gulp.task('scripts', function() {
   gulp.src([src.jsVendor, src.jsApp])
    .pipe(concat('application.js'))
    .pipe(gulp.dest(dist.js))   
});

gulp.task('coffee', function() {
  gulp.src([src.coffee])
      .pipe(coffee())
      .pipe(gulp.dest(dist.js))
});

gulp.task('build', ['views', 'stylesheets', 'scripts', 'coffee']);

gulp.task('watch', function() {
  gulp.watch([src.scss], ['stylesheets']);
  gulp.watch([src.html], ['views']);
  gulp.watch([src.jsApp], ['scripts']);
  gulp.watch([src.jsVendor], ['scripts']);
  gulp.watch([src.coffee], ['coffee']);
});

gulp.task('default', ['build', 'watch']);
