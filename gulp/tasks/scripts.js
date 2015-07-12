'use strict';

var gulp = require('gulp'),
    config = require('../config'),
    notifier = require('../utils/notifier'),
    packages = require('../utils/packages'),
    plumber = require('gulp-plumber'),
    browserify = require('browserify'),
    browserSync = require('browser-sync'),
    source = require('vinyl-source-stream'),
    buffer = require('vinyl-buffer'),
    gutil = require('gulp-util'),
    babelify = require('babelify'),
    sourcemaps = require('gulp-sourcemaps'),
    uglify = require('gulp-uglify');



gulp.task('scripts', function() {
    var externals = [];

    packages.bower().forEach(function (lib) {
        externals.push(lib);
    });

  browserify([config.src.scripts + 'app.js'], {
        basedir: config.src.scripts,
        debug: true
    })
    .external(externals)
    .transform(babelify)
    .bundle()
    .on('error', gutil.log.bind(gutil, 'Browserify Error'))
    .pipe( plumber(notifier.error()) )
    .pipe(source('bundle.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(uglify())
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(config.dist.scripts))
    .pipe(browserSync.reload({
        stream: true
    }))
    .pipe(notifier.success('Scripts done.'));
});
