'use strict';

const gulp = require('gulp');

module.exports = () => {
    gulp.watch('./src/*.*', ['broswerify']);
};
