'use strict';

var karma  = require('karma');

module.exports = function () {
    return function(done) {
        karma.server.start({
            configFile: process.cwd() + '/karma.config.js',
            singleRun: true
        }, done);
    }
}