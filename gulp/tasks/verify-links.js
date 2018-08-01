/*jslint node: true, stupid: true */
module.exports = function (gulp, plugins, current_config) {
    'use strict';
    gulp.task('verify:links', function () {

        return gulp.src([current_config.distDir + '/*.html'])
            .pipe(plugins.exec(
                'htmlproofer --check-html --check-sri' +
                    ' --url-ignore "/github.com/cloudbees/training-*/,/localhost:/,/127.0.0.1:/,/cjmaster1:/,/jenkins:/,/www.virtualbox.org/" ' +
                    ' "<%= file.path %>"',
                { pipeStdout: false}
            ))
            .pipe(plugins.exec.reporter());
    });
};