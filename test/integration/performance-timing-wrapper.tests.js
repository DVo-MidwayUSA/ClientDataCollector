'use strict';

import PerformanceTimingWrapper from '../../src/performance-timing-wrapper';

describe('Performance Timing Wrapper Tests', () => {
    let sut;
    let timings;

    let arrange = () => {
        timings = window.performance.timing;
    };

    let act = () => {
        sut = new PerformanceTimingWrapper(timings);
    };

    beforeEach(() => {
        arrange();
        act();
    });

    it('Should wrap "Connect End" timing', () => {
        expect(sut.connectEnd()).toBe(timings.connectEnd);
        expect(sut.connectEnd()).toEqual(jasmine.any(Number));
    });

    it('Should wrap "Connect Start" timing', () => {
        expect(sut.connectStart()).toBe(timings.connectStart);
        expect(sut.connectStart()).toEqual(jasmine.any(Number));
    });

    it('Should wrap "DOM Complete" timing', () => {
        expect(sut.domComplete()).toBe(timings.domComplete);
        expect(sut.domComplete()).toEqual(jasmine.any(Number));
    });

    it('Should wrap "DOM Content Loaded Event End" timing', () => {
        expect(sut.domContentLoadedEventEnd()).toBe(timings.domContentLoadedEventEnd);
        expect(sut.domContentLoadedEventEnd()).toEqual(jasmine.any(Number));
    });

    it('Should wrap "DOM Content Loaded Event Start" timing', () => {
        expect(sut.domContentLoadedEventStart()).toBe(timings.domContentLoadedEventStart);
        expect(sut.domContentLoadedEventStart()).toEqual(jasmine.any(Number));
    });

    it('Should wrap "DOM Interactive" timing', () => {
        expect(sut.domInteractive()).toBe(timings.domInteractive);
        expect(sut.domInteractive()).toEqual(jasmine.any(Number));
    });

    it('Should wrap "DOM Loading" timing', () => {
        expect(sut.domLoading()).toBe(timings.domLoading);
        expect(sut.domLoading()).toEqual(jasmine.any(Number));
    });

    it('Should wrap "Domain Lookup End" timing', () => {
        expect(sut.domainLookupEnd()).toBe(timings.domainLookupEnd);
        expect(sut.domainLookupEnd()).toEqual(jasmine.any(Number));
    });

    it('Should wrap "Domain Lookup Start" timing', () => {
        expect(sut.domainLookupStart()).toBe(timings.domainLookupStart);
        expect(sut.domainLookupStart()).toEqual(jasmine.any(Number));
    });

    it('Should wrap "Fetch Start" timing', () => {
        expect(sut.fetchStart()).toBe(timings.fetchStart);
        expect(sut.fetchStart()).toEqual(jasmine.any(Number));
    });

    it('Should wrap "Load Event End" timing', () => {
        expect(sut.loadEventEnd()).toBe(timings.loadEventEnd);
        expect(sut.loadEventEnd()).toEqual(jasmine.any(Number));
    });

    it('Should wrap "Load Event Start" timing', () => {
        expect(sut.loadEventStart()).toBe(timings.loadEventStart);
        expect(sut.loadEventStart()).toEqual(jasmine.any(Number));
    });

    it('Should wrap "Navigation Start" timing', () => {
        expect(sut.navigationStart()).toBe(timings.navigationStart);
        expect(sut.navigationStart()).toEqual(jasmine.any(Number));
    });

    it('Should wrap "Redirect End" timing', () => {
        expect(sut.redirectEnd()).toBe(timings.redirectEnd);
        expect(sut.redirectEnd()).toEqual(jasmine.any(Number));
    });

    it('Should wrap "Redirect Start" timing', () => {
        expect(sut.redirectStart()).toBe(timings.redirectStart);
        expect(sut.redirectStart()).toEqual(jasmine.any(Number));
    });

    it('Should wrap "Request Start" timing', () => {
        expect(sut.requestStart()).toBe(timings.requestStart);
        expect(sut.requestStart()).toEqual(jasmine.any(Number));
    });

    it('Should wrap "Response End" timing', () => {
        expect(sut.responseEnd()).toBe(timings.responseEnd);
        expect(sut.responseEnd()).toEqual(jasmine.any(Number));
    });

    it('Should wrap "Response Start" timing', () => {
        expect(sut.responseStart()).toBe(timings.responseStart);
        expect(sut.responseStart()).toEqual(jasmine.any(Number));
    });

    it('Should wrap "Secure Connection Start" timing', () => {
        expect(sut.secureConnectionStart()).toBe(timings.secureConnectionStart);
        expect(sut.secureConnectionStart()).toEqual(jasmine.any(Number));
    });

    it('Should wrap "Unload Event End" timing', () => {
        expect(sut.unloadEventEnd()).toBe(timings.unloadEventEnd);
        expect(sut.unloadEventEnd()).toEqual(jasmine.any(Number));
    });

    it('Should wrap "Unload Event Start" timing', () => {
        expect(sut.unloadEventStart()).toBe(timings.unloadEventStart);
        expect(sut.unloadEventStart()).toEqual(jasmine.any(Number));
    });

    it('Should throw an Error if "window.performance.timing" is not available', () => {
        expect(() => {
            new PerformanceTimingWrapper();
        }).toThrow(new Error());
        expect(() => {
            new PerformanceTimingWrapper(null);
        }).toThrow(new Error());
        expect(() => {
            new PerformanceTimingWrapper(undefined);
        }).toThrow(new Error());
    });
});
