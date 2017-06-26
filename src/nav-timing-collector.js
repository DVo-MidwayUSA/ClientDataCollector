'use strict';

export default class NavTimingCollector {
    constructor(timings) {
        this.timings = timings;
    }

    calculate() {
        var navigationStart = this.timings.navigationStart();

        return {
            appCacheComplete: this.timings.domainLookupStart() - navigationStart,
            domContentLoadedEventEnd: this.timings.domContentLoadedEventEnd() - navigationStart,
            domContentLoadedEventStart: this.timings.domContentLoadedEventStart() - navigationStart,
            domComplete: this.timings.domComplete() - navigationStart,
            domLoading: this.timings.domLoading() - navigationStart,
            domainLookupStart: this.timings.domainLookupStart() - navigationStart,
            firstByte: this.timings.responseStart() - this.timings.requestStart(),
            pageComplete: this.timings.loadEventEnd() - navigationStart,
            connectionEnd: this.timings.connectEnd() - navigationStart,
            connectionStart: this.timings.connectStart() - navigationStart,
        };
    }
}
