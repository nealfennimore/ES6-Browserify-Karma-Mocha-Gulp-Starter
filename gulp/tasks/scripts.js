'use strict';

var browserify  = require('browserify'),
    browserSync = require('browser-sync'),
    source      = require('vinyl-source-stream'),
    buffer      = require('vinyl-buffer'),
    babelify    = require('babelify');

module.exports = function (gulp, $, paths, u){
    return function() {
        var externals = [];

        u.packages.bower().forEach(function (lib) {
            externals.push(lib);
        });

        browserify([paths.scripts.src + 'app.js'], {
                basedir: paths.scripts.src,
                debug: true
            })
            .external(externals)
            .transform(babelify)
            .bundle()
            .on('error', $.util.log.bind($.util, 'Browserify Error'))
            .pipe( $.plumber(u.notifier.error()) )
            .pipe(source('bundle.js'))
            .pipe(buffer())
            .pipe($.sourcemaps.init({loadMaps: true}))
            .pipe($.uglify())
            .pipe($.sourcemaps.write('./'))
            .pipe(gulp.dest(paths.scripts.dist))
            .pipe(browserSync.reload({
                stream: true
            }))
            .pipe(u.notifier.success('Scripts done.'));
    }
}

