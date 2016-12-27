const bs = require('browser-sync');
const config = require('../config');
const { project, styls } = config.paths;
const { min } = config.names;

module.exports = ( gulp, $ ) => {
    gulp.task( 'styls', () => {
        return gulp.src( styls.src )
            .pipe($.stylus({
                use: [typographic(), rupture({ implicit: false })],
                compress: true
            }))
            .pipe($.autoprefixer({
                browsers: ['last 2 versions'],
                cascade: false
            }))
            .pipe($.cleanCss())
            .pipe($.size({ showFiles: true }))
            .pipe(gulp.dest(project))
            .pipe( bs.stream() );
    });
};
