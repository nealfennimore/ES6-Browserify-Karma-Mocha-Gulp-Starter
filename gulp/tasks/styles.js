'use strict';

var gulp         = require('gulp'),
    config       = require('../config'),
    notifier     = require('../utils/notifier'),
    browserSync  = require('browser-sync'),
    plumber      = require('gulp-plumber'),
    sass         = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer');

gulp.task('styles', function() {
    gulp.src([config.src.styles + '**/*.scss'])
        .pipe(plumber(notifier.error()))
        .pipe(sass())
        .pipe(autoprefixer('last 2 versions'))
        .pipe(gulp.dest(config.dist.styles))
        .pipe(browserSync.reload({
            stream: true
        }))
        .pipe(notifier.success('Styles done.'));
});