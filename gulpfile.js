'use strict';

var gulp = require('gulp'),
    config = require('./gulp/config'),
    requireDir = require('require-dir');

requireDir('./gulp/tasks', { recurse: true });

/**
 * Default Tasks
 */

gulp.task('default', ['browserSync'], function() {
    gulp.watch(config.src.styles + '**/*.scss', ['styles']);
    gulp.watch([config.src.scripts + '**/*.js'], ['scripts', 'test']);
    gulp.watch([config.test.path + '**/*.js'], ['test']);
    gulp.watch(['bower.json'], ['scripts:vendor']);
    gulp.watch('**/*.html', ['browserReload']);
});