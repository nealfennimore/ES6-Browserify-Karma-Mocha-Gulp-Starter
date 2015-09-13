'use strict';

var browserSync = require('browser-sync');

module.exports = function (gulp, $, paths) {
    return function () {
        browserSync({
            server: {
                baseDir: paths.dist
            }
        });
    }
}