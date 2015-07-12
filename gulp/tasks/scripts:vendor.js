'use strict';

var gulp = require('gulp'),
    config = require('../config'),
    notifier = require('../utils/notifier'),
    packages = require('../utils/packages'),
    plumber = require('gulp-plumber'),
    browserify = require('browserify'),
    bowerResolve = require('bower-resolve'),
    source = require('vinyl-source-stream'),
    streamify  = require('gulp-streamify'),
    gutil = require('gulp-util'),
    uglify = require('gulp-uglify');


gulp.task('scripts:vendor', function() {
    var bundler = browserify();

    packages.bower().forEach(function(id) {
        var resolvedPath = bowerResolve.fastReadSync(id);
        bundler.require(resolvedPath, {
            expose: id
        });
    });

    bundler.bundle()
        .on('error', gutil.log.bind(gutil, 'Browserify Error'))
        .pipe(plumber(notifier.error()))
        .pipe(source('vendor.js'))
        .pipe(streamify(uglify()))
        .pipe(gulp.dest(config.dist.scripts))
        .pipe(notifier.success('Vendor scripts done.'));
});