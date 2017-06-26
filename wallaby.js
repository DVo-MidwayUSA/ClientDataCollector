'use strict';

const wallabify = require('wallabify');
const wallabyPostprocessor = wallabify({});

module.exports = (wallaby) => {
    const config = {
        files: [
            {pattern: 'src/*.js', load: false},
        ],
        tests: [
            {pattern: 'test/**/*.js', load: false},
        ],
        compilers: {
            '**/*.js': wallaby.compilers.babel(),
        },
        postprocessor: wallabyPostprocessor,
        setup: () => {
            window.__moduleBundler.loadTests();
        },
    };

    return config;
};
