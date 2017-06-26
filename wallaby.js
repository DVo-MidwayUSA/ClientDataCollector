'use strict';

const wallabify = require('wallabify');
const wallabyPostprocessor = wallabify({});

module.exports = () => {
    const config = {
        files: [
            {pattern: 'src/*.js', load: false},
        ],
        tests: [
            {pattern: 'test/**/*.js', load: false},
        ],
        testFramework: 'jasmine',
        postProcessor: wallabyPostprocessor,
        setup: () => {
            window.__moduleBundler.loadTests();
        },
    };

    return config;
};
