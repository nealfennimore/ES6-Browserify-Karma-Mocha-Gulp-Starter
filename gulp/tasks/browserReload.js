'use strict';

var browserSync = require('browser-sync');

module.exports = function () {
    return function () {
        browserSync.reload();
    }
}