'use strict';

var _ = require('lodash'),
    config = require('../config');

function getBowerPackageIds() {
    // read bower.json and get dependencies' package ids
    var bowerManifest = {};
    try {
        bowerManifest = require(config.bower.path + 'bower.json');
    } catch (e) {
        console.error(e);
    }
    return _.keys(bowerManifest.dependencies) || [];

}


function getNPMPackageIds() {
    // read package.json and get dependencies' package ids
    var packageManifest = {};
    try {
        packageManifest = require(config.npm.path + 'package.json');
    } catch (e) {
        console.error(e);
    }
    return _.keys(packageManifest.dependencies) || [];
}

module.exports = {
    npm: getNPMPackageIds,
    bower: getBowerPackageIds
};