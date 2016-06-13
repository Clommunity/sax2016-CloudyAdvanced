var gulp    = require('gulp');
var sass    = require('gulp-sass');
var bs      = require('browser-sync').create('server');


gulp.task('server', function() {
    bs.init({
        server: {
            baseDir: "./"
        }
    });

    gulp.watch("./index.html").on("change", bs.reload);
});

gulp.task('default', [ 'server' ]);
