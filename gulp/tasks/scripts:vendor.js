'use strict';

var browserify   = require('browserify'),
    bowerResolve = require('bower-resolve'),
    source       = require('vinyl-source-stream');

module.exports = function (gulp, $, paths, u){
    return function() {
        var bundler  = browserify(),
            packages = u.packages.browser();

        for (var lib in packages) {
            if (packages.hasOwnProperty(lib)) {
                bundler.require(lib);
            }
        }

        bundler.bundle()
            .on('error', $.util.log.bind($.util, 'Browserify Error'))
            .pipe($.plumber(u.notifier.error()))
            .pipe(source('vendor.js'))
            .pipe($.streamify(
                $.uglify()
            ))
            .pipe(gulp.dest(paths.scripts.dist))
            .pipe(u.notifier.success('Vendor scripts done.'));
    }
}
