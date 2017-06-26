'use strict';

let tasks = [
    'build',
    'watch',
];

const gulp = require('./gulp')(tasks);
gulp.task('default', ['build', 'watch']);
