'use strict';

import PerformanceTimingWrapper from './performance-timing-wrapper';
import NavTimingCollector from './nav-timing-collector';
import Ajax from './ajax';

const performanceTimingWrapper = new PerformanceTimingWrapper(window.performance.timing);
const navTimingCollector = new NavTimingCollector(performanceTimingWrapper);

const timings = navTimingCollector.calculate();

let query = '';

for (let key in timings) {
    if (!timings.hasOwnProperty(key)) {
        break;
    }

    let value = timings[key];
    query += `${key}=${value}&`;
}

query = query.slice(0, -1);

console.log(query);

const ajax = new Ajax();
ajax.request(`/log?${query}`, 'GET');
