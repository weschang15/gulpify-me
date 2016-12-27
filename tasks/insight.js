const ngrok       = require('ngrok');
const psi         = require('psi');
const sequence    = require('run-sequence');

module.exports = ( gulp ) => {

    // Initialize const for ngrok url
    var site = '';

    gulp.task( 'psi:url', ( cb ) => {
        return ngrok.connect(8888, (err, url) => {
            site = url;
            console.log( `Serving your tunnel from: ${site}`);
            cb();
        });
    });

    gulp.task( 'psi:desktop', ( cb ) => {
        psi( site, {
            nokey: 'true',
            strategy: 'desktop'
        }, cb ).then(data => {
            console.log('Speed score: ' + data.ruleGroups.SPEED.score);
            console.log(data.pageStats);
        });
    });

    gulp.task( 'psi', ( cb ) => {
        sequence( 'psi:url', 'psi:desktop', cb );
    });
};
