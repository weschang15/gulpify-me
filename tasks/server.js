const bs = require('browser-sync');
const config = require('../config');
const { php } = config.paths;

module.exports = ( gulp ) => {
    gulp.task( 'serve', ['styls', 'imagemin'], () => {
        bs.init({
            files: php.src,
            proxy: 'localhost:8888',
            notify: true
        });
    });
};
