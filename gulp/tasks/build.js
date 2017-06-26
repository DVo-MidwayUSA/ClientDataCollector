'use strict';

const gulp = require('gulp');
const uglify = require('gulp-uglify');
const babelify = require('babelify');
const browserify = require('browserify');
const buffer = require('vinyl-buffer');
const source = require('vinyl-source-stream');

module.exports = () => {
    return browserify('./src/index.js')
        .transform(babelify)
        .bundle()
        .pipe(source('index.js'))
        .pipe(buffer())
        .pipe(uglify())
        .pipe(gulp.dest('./dist/'));
};
