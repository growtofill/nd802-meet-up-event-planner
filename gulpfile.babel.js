import gulp from 'gulp';
import concatCss from 'gulp-concat-css';
import babel from 'gulp-babel';
import webpack from 'webpack-stream';

let { src, dest } = gulp;

gulp.task('copy-html', () => (
    src('src/*.html')
        .pipe(dest('dist'))
));

gulp.task('compile-css', () => (
    src('src/css/index.css')
        .pipe(concatCss('app.bundle.css'))
        .pipe(dest('dist'))
));

gulp.task('compile-js', () => (
    src('src/js/index.js')
        .pipe(webpack({
            output: {
                filename: 'app.bundle.js'
            },
            module: {
                loaders: [{
                    test: /\.jsx?$/,
                    exclude: /node_modules/,
                    loader: 'babel-loader'
                }]
            }
        }))
        .pipe(dest('dist'))
));

gulp.task('watch', () => {
    gulp.watch('src/*.html', ['copy-html']);
    gulp.watch('src/css/**/*.css', ['compile-css']);
    gulp.watch('src/js/**/*.jsx', ['compile-js']);
});

gulp.task('default', ['copy-html', 'compile-css', 'compile-js']);
