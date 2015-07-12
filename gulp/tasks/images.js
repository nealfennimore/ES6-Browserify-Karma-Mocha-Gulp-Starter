'use strict';

var gulp     = require('gulp'),
    config   = require('../config'),
    notifier = require('../utils/notifier'),
    imagemin = require('gulp-imagemin'),
    cache    = require('gulp-cache');

gulp.task('images', function() {
    gulp.src(config.src.images + '**/*')
        .pipe(cache(imagemin({
            optimizationLevel: 3,
            progressive: true,
            interlaced: true
        })))
        .pipe(gulp.dest(config.dist.images))
        .pipe(notifier.success('Images done.'));
});
