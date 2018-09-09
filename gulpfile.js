var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

// utils
var livereload = require('gulp-livereload');
var zip = require('gulp-zip');

var nodemonServerInit = function () {
    livereload.listen(1234);
};

gulp.task('build', ['sass'], function (/* cb */) {
    return nodemonServerInit();
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
    return gulp.src(['node_modules/bulma/bulma.sass', 'assets/sass/*.sass'])
        .pipe(sass())
        .pipe(gulp.dest('assets/built/'))
        .pipe(browserSync.stream());
});

// gulp.task('css', function () {
//     var processors = [
//         easyimport,
//         customProperties,
//         colorFunction(),
//         autoprefixer({browsers: ['last 2 versions']}),
//         cssnano()
//     ];
//
//     return gulp.src('assets/css/*.css')
//         .on('error', swallowError)
//         .pipe(sourcemaps.init())
//         .pipe(postcss(processors))
//         .pipe(sourcemaps.write('.'))
//         .pipe(gulp.dest('assets/built/'))
//         .pipe(livereload());
// });

gulp.task('watch', function () {
    gulp.watch('assets/sass/**', ['sass']);
});

gulp.task('zip', ['sass'], function () {
    var targetDir = 'dist/';
    var themeName = require('./package.json').name;
    var filename = themeName + '.zip';

    return gulp.src([
        '**',
        '!node_modules', '!node_modules/**',
        '!dist', '!dist/**'
    ])
        .pipe(zip(filename))
        .pipe(gulp.dest(targetDir));
});

gulp.task('default', ['build'], function () {
    gulp.start('watch');
});
