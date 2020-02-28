const gulp = require('gulp');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const browserSync = require('browser-sync').create();


function css(done) {
  gulp.src('styles/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest("src/css"))
    .pipe(browserSync.stream());
  done();
}

function js(done) {
  gulp.src(['node_modules/bootstrap/dist/js/bootstrap.min.js', 'node_modules/jquery/dist/jquery.min.js'])
    .pipe(gulp.dest("src/js"))
    .pipe(browserSync.stream());
  done();
}

function watcher(done) {
  // gulp.series(
  // gulp.parallel(
  //   bs,
  // gulp.series(
  gulp.watch(['styles/**/*.scss'], css),
    gulp.watch("src/*.html").on('change', browserSync.reload),
    gulp.watch("src/css/*.css").on('change', browserSync.reload),
    gulp.watch("src/js/*.js").on('change', browserSync.reload),
    // )
    // )
    // )
    done();
}

function bs() {
  browserSync.init({
    server: {
      baseDir: "./src"
    }
  })
}

gulp.task('sass', css);

gulp.task('js', js);

gulp.task('serve', watcher);

gulp.task('watch', bs)

gulp.task('default',
  gulp.parallel(
    js,
    css,
    watcher,
    bs
  )
);
