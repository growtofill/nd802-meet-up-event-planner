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
    src('src/css/app.css')
        .pipe(concatCss('app.bundle.css'))
        .pipe(dest('dist'))
));

gulp.task('compile-js', () => (
    src('src/js/app.js')
        .pipe(webpack({
            entry: {
                app: './src/js/app.js'
            },
            output: {
                filename: '[name].bundle.js'
            },
            module: {
              loaders: [
                { test: /\.jsx?$/, exclude: /node_modules/, loader: "babel-loader"}
              ]
            }
        }))
        .pipe(dest('dist'))
));

gulp.task('default', ['copy-html', 'compile-css', 'compile-js']);
