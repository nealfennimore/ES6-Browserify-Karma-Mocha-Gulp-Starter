var _root    = __dirname + '/../',
    dist     = _root + 'dist',
    src      = _root + 'src',
    testDir  = _root + 'test',
    gulpDir  = _root + 'gulp',
    bowerDir = _root,
    npmDir   = _root;

module.exports = {
    dist: dist,
    src: src,
    images: {
        dist: dist + '/images/',
        src: src + '/images/'
    },
    scripts: {
        dist: dist + '/scripts/',
        src: src + '/scripts/'
    },
    styles: {
        dist: dist + '/styles/',
        src: src + '/styles/'
    },
    test: testDir,
    gulp: gulpDir,
    bower: bowerDir,
    npm: npmDir
};
