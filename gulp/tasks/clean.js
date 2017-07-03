'use strict';

const del = require('del');

module.exports = () => {
    del('dist');
};
