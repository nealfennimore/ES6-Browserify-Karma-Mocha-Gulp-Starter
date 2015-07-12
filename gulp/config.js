var _root    = __dirname + '/../',
    dist     = _root + 'dist',
    src      = _root + 'src',
    testDir  = _root + 'test',
    gulpDir  = _root + 'gulp',
    bowerDir = _root,
    npmDir   = _root;

module.exports = {
    dist: {
        path: dist,
        scripts: dist + '/scripts/',
        images: dist + '/images/',
        styles: dist + '/styles/'
    },
    src: {
        path: src,
        scripts: src + '/scripts/',
        images: src + '/images/',
        styles: src + '/styles/'
    },
    test: {
        path: testDir
    },
    gulp: {
        path: gulpDir
    },
    bower: {
        path: bowerDir
    },
    npm: {
        path: npmDir
    }
};
