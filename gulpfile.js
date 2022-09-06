// Initialize modules
const { src, dest, watch, series, task } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const babel = require('gulp-babel');
const terser = require('gulp-terser');
const browsersync = require('browser-sync').create();
const imagemin = require('gulp-imagemin');
const gulp = require('gulp')

// Sass Task
function scssTask() {
    return src('app/scss/style.scss', { sourcemaps: true })
        .pipe(sass())
        .pipe(postcss([autoprefixer(), cssnano()]))
        .pipe(dest('dist', { sourcemaps: '.' }));
}

// JavaScript Task
function jsTask() {
    return src('app/js/script.js', { sourcemaps: true })
        .pipe(babel({ presets: ['@babel/preset-env'] }))
        .pipe(terser())
        .pipe(dest('dist', { sourcemaps: '.' }));
}

// Image Task
function imgTask() {
    return src('images/**/*').pipe(imagemin()).pipe(dest('dist/images'));
}

// Browsersync
function browserSyncServe(cb) {
    browsersync.init({
        server: {
            baseDir: '.',
        },
        notify: {
            styles: {
                top: 'auto',
                bottom: '0',
            },
        },
    });
    cb();
}
function browserSyncReload(cb) {
    browsersync.reload();
    cb();
}

task('copy-assets', series(
    function() {
        return src(['index.html']).pipe(dest('dist'));
    },
    function() {
        return src(['app/pages/**/*']).pipe(dest('dist'));
    },
    scssTask,
    jsTask,
    imgTask
));

task('dry', series(
    'copy-assets',
    function() {
        return src(['dist/**/*']).pipe(dest('/Users/ronald/project/digitalx/site/tmp'));
    }
));

task('deploy', series(
    'copy-assets',
    function() {
        return src(['dist/**/*']).pipe(dest('/var/www/digital-x-sarl.com/html'));
    }
));



// Watch Task
function watchTask() {
    watch('*.html', browserSyncReload);
    watch(
        ['app/scss/**/*.scss', 'app/**/*.js', 'images/*'],
        series(scssTask, jsTask, imgTask, browserSyncReload)
    );
}

// Default Gulp Task
exports.default = series(scssTask, jsTask, imgTask, browserSyncServe, watchTask);
