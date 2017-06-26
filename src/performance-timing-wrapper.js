'use strict';

export default class PerformanceTimingWrapper {
    constructor(timings) {
        if (!timings) {
            throw new Error();
        }

        this.timings = timings;
    }

    connectEnd() {
        return this.timings.connectEnd;
    }

    connectStart() {
        return this.timings.connectStart;
    }

    domComplete() {
        return this.timings.domComplete;
    }

    domContentLoadedEventStart() {
        return this.timings.domContentLoadedEventStart;
    }

    domContentLoadedEventEnd() {
                return this.timings.domContentLoadedEventEnd;
    }

    domInteractive() {
        return this.timings.domInteractive;
    }

    domLoading() {
        return this.timings.domLoading;
    }

    domainLookupEnd() {
        return this.timings.domainLookupEnd;
    }

    domainLookupStart() {
        return this.timings.domainLookupStart;
    }

    fetchStart() {
        return this.timings.fetchStart;
    }

    loadEventEnd() {
        return this.timings.loadEventEnd;
    }

    loadEventStart() {
        return this.timings.loadEventStart;
    }

    navigationStart() {
        return this.timings.navigationStart;
    }

    redirectEnd() {
        return this.timings.redirectEnd;
    }

    redirectStart() {
        return this.timings.redirectStart;
    }

    requestStart() {
        return this.timings.requestStart;
    }

    responseEnd() {
        return this.timings.responseEnd;
    }

    responseStart() {
        return this.timings.responseStart;
    }

    secureConnectionStart() {
        return this.timings.secureConnectionStart;
    }

    unloadEventEnd() {
        return this.timings.unloadEventEnd;
    }

    unloadEventStart() {
        return this.timings.unloadEventStart;
    }
}
