'use strict';

var gulp = require('gulp'),
    paths = require('./gulp/paths'),
    plugins = require('gulp-load-plugins')();

var utils = {
    notifier: require('./gulp/utils/notifier')(gulp, plugins, paths),
    packages: require('./gulp/utils/packages')(gulp, plugins, paths)
}

function getTask(task) {
    return require('./gulp/tasks/' + task)(gulp, plugins, paths, utils);
}

gulp.task('browserReload', getTask('browserReload'));
gulp.task('browserSync', getTask('browserSync'));
gulp.task('images', getTask('images'));
gulp.task('scripts', getTask('scripts'));
gulp.task('scripts:vendor', getTask('scripts:vendor'));
gulp.task('styles', getTask('styles'));
gulp.task('test', getTask('test'));

gulp.task('default', ['browserSync'], function() {
    gulp.watch(paths.styles.src + '**/*.scss', ['styles']);
    gulp.watch([paths.scripts.src + '**/*.js'], ['scripts', 'test']);
    gulp.watch([paths.test + '**/*.js'], ['test']);
    gulp.watch(['bower.json'], ['scripts:vendor']);
    gulp.watch('**/*.html', ['browserReload']);
});