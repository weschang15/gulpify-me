module.exports = {
    paths: {

        css: {
            src: ['assets/css/critical/*.css', '!assets/css/critical/*.min.*'],
            dest: 'assets/css/critical/'
        },

        project: './',

        styls: {
            all: 'styls/**/*.styl',
            dest: 'assets/css',
            src: 'styls/style.styl'
        },

        js: {
            src: 'src/js/scripts.js',
            dest: 'assets/js'
        },

        images: {
            src: 'src/img/**',
            dest: 'assets/img'
        },

        php: {
            src: '**/*.php'
        }
    },
    names: {
        min: '.min',
        base: '.php',
        html: '.html'
    }
};
