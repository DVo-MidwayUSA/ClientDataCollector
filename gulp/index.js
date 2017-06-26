'use strict';

const gulp = require('gulp');

module.exports = (tasks) => {
    tasks.forEach((task) => {
        gulp.task(task, require(`./tasks/${task}`));
    });

    return gulp;
};
