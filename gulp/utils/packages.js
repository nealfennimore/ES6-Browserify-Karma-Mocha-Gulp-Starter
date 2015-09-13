'use strict';

var _ = require('lodash');

module.exports = function (gulp, $, paths){

    function getNPM() {
        var packageManifest = {};
        try {
            packageManifest = require(paths.npm + 'package.json');
        } catch (e) {
            console.error(e);
        }
        return _.keys(packageManifest.dependencies) || [];
    }

    function getBrowser() {
        var packageManifest = {};
        try {
            packageManifest = require(paths.npm + 'package.json');
        } catch (e) {
            console.error(e);
        }
        return packageManifest.browser || {};
    }

    function getBower() {
        var bowerManifest = {};
        try {
            bowerManifest = require(paths.bower + 'bower.json');
        } catch (e) {
            console.error(e);
        }
        return _.keys(bowerManifest.dependencies) || [];
    }

    return {
        npm: getNPM,
        bower: getBower,
        browser: getBrowser
    };
}