var gulp = require('gulp'),
    gutil = require('gulp-util'),
    notify = require('gulp-notify'),
    notifier = require('node-notifier'),
    gulpif = require('gulp-if'),
    del = require('del');
    ts = require('gulp-typescript');
    tsProject = ts.createProject('tsconfig.json', {typescript: require('typescript')});
    path = require('path'),
    concat = require('gulp-concat'),
    //CSS compiler libraries
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    autoprefixer = require('gulp-autoprefixer'),
    cleanCSS = require('gulp-clean-css'),
    //Image OPT libraries
    imageop = require('gulp-image-optimization'),
    //Dev-Server (browser-sync) libraries
    sequencer = require('run-sequence'),
    browserSync = require('browser-sync').create();

//config
var SRC_DIR = './app',
    BUILD_DIR = './build';
    SASS_OPTIONS = {
       errLogToConsole: true,
       outputStyle: 'compressed'
    };

// create a default task and just log a message
gulp.task('default', function() {
  return gutil.log('Gulp is running!')
});

// Static server
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});


gulp.task('clean', function(){
     del([BUILD_DIR + '/modules/**/templates/*'], {force: true})
     del([BUILD_DIR + '/public/*'], {force: true})
});

gulp.task('tscCompiler', function(){
  var tsResult = tsProject.src()     
      .pipe(tsProject());
  return tsResult.js.pipe(gulp.dest('build/')).pipe(browserSync.stream());
});


gulp.task('copyHtml', function () {
         gulp.src(SRC_DIR + '/**/*.html')
             .pipe(gulp.dest(BUILD_DIR + '/'))
             .pipe(gulpif(false, notify({ message: 'Template build completed.', onLast: true })))
             .pipe(browserSync.stream()); 
});




gulp.task('sassCompiler', function(){
  gulp
    .src(SRC_DIR + '/modules/**/style/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass(SASS_OPTIONS).on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(concat('style.min.css'))
    .pipe(cleanCSS()) 
    .pipe(gulp.dest(BUILD_DIR + '/public'))
    .pipe(browserSync.stream());

});

gulp.task('copyFonts', function () {
         gulp.src(SRC_DIR + '/modules/**/assets/fonts/*')
             .pipe(gulp.dest(BUILD_DIR + '/public'))
             .pipe(gulpif(false, notify({ message: 'Fonts build completed.', onLast: true }))); 
});


gulp.task('optimizeImg', function(cb) {
    gulp.src([SRC_DIR + '/modules/**/assets/images/*.png', SRC_DIR + '/modules/**/assets/images/*.jpg', SRC_DIR + '/modules/**/assets/images/*.gif', SRC_DIR + '/modules/**/assets/images/*.jpeg'])
    .pipe(imageop({
        optimizationLevel: 5,
        progressive: true,
        interlaced: true
    }))
    .pipe(gulp.dest(BUILD_DIR + '/public').on('end', cb).on('error', cb));
});



gulp.task('assetsCompiler', ['copyFonts', 'optimizeImg']);


gulp.task('build', function() {

   sequencer('tscCompiler', 'copyHtml', 'sassCompiler', 'assetsCompiler', 'browser-sync', 'watch', function() {

        notifier.notify({
           title: 'Gulp Build Notification',
           message: 'Build completed.',
           icon: path.join(__dirname, 'node_modules', 'gulp-notify', 'assets', 'gulp.png')
        });

   });

});


gulp.task('watch', function() {
   gulp.watch(SRC_DIR + '/modules/**/typescript/**/*.ts', ['tscCompiler']);
   gulp.watch(SRC_DIR + '/modules/**/style/*.scss', ['sassCompiler']);
});
