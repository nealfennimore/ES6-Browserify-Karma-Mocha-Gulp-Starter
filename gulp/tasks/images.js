'use strict';

module.exports = function (gulp, $, paths, u) {
    return function(){
        gulp.src(paths.images.src + '**/*')
            .pipe($.cache(
                $.imagemin({
                    optimizationLevel: 3,
                    progressive: true,
                    interlaced: true
                })
            ))
            .pipe(gulp.dest(paths.images.dist))
            .pipe(u.notifier.success('Images done.'));
    }
}
