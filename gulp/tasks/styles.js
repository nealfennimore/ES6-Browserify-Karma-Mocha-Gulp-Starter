'use strict';

var autoprefixer = require('autoprefixer'),
    browserSync  = require('browser-sync');

module.exports = function (gulp, $, paths, u) {
    return function(){
        gulp.src([paths.styles.src + '**/*.scss'])
            .pipe( $.plumber(u.notifier.error()) )
            .pipe( $.sass() )
            .pipe(
                $.postcss([ autoprefixer({ browsers: ['last 2 versions'] }) ])
            )
            .pipe(gulp.dest(paths.styles.dist))
            .pipe(browserSync.reload({
                stream: true
            }))
            .pipe(u.notifier.success('Styles done.'));
    }
};