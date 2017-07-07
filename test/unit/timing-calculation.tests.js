'use strict';

import NavTimingCollector from '../../src/nav-timing-collector';
import PerformanceTimingWrapper from '../../src/performance-timing-wrapper';

describe('Timing Calculation Tests', () => {
    let sut;
    let result;

    let arrange = (callback) => {
        let timings = new PerformanceTimingWrapper(jasmine.any(Object));

        callback({
            connectEndSpy: spyOn(timings, 'connectEnd'),
            connectStartSpy: spyOn(timings, 'connectStart'),
            domCompleteSpy: spyOn(timings, 'domComplete'),
            domContentLoadedEventStartSpy: spyOn(timings, 'domContentLoadedEventStart'),
            domContentLoadedEventEndSpy: spyOn(timings, 'domContentLoadedEventEnd'),
            domLoadingSpy: spyOn(timings, 'domLoading'),
            domInteractiveSpy: spyOn(timings, 'domInteractive'),
            domainLookupStartSpy: spyOn(timings, 'domainLookupStart'),
            fetchStartSpy: spyOn(timings, 'fetchStart'),
            loadEventEndSpy: spyOn(timings, 'loadEventEnd'),
            navigationStartSpy: spyOn(timings, 'navigationStart'),
            requestStartSpy: spyOn(timings, 'requestStart'),
            responseStartSpy: spyOn(timings, 'responseStart'),
            secureConnectionStartSpy: spyOn(timings, 'secureConnectionStart'),
        });

        sut = new NavTimingCollector(timings);
    };

    let act = () => {
        result = sut.calculate();
    };

    it('Should determine App Cache Complete time by subtracting "Domain Lookup Start" from "Navigation Start" timings', () => {
        let domainLookupStartValue = 2;
        let navigationStartValue = 1;

        arrange((timings) => {
            timings.domainLookupStartSpy.and.returnValue(domainLookupStartValue);
            timings.navigationStartSpy.and.returnValue(navigationStartValue);
        });

        act();

        expect(result.appCacheComplete).toBe(domainLookupStartValue - navigationStartValue);
    });

    it('Should determine DOM Complete time by subtracting "DOM Complete" from "Navigation Start" timings', () => {
        let domCompleteValue = 2;
        let navigationStartValue = 1;

        arrange((timings) => {
            timings.domCompleteSpy.and.returnValue(domCompleteValue);
            timings.navigationStartSpy.and.returnValue(navigationStartValue);
        });

        act();

        expect(result.domComplete).toBe(domCompleteValue - navigationStartValue);
    });

    it('Should determine DOM Content Loaded Event Start time by subtracting "DOM Content Loaded Event Start" from "Navigation Start" timings', () => {
        let domContentLoadedEventStart = 2;
        let navigationStartValue = 1;

        arrange((timings) => {
            timings.domContentLoadedEventStartSpy.and.returnValue(domContentLoadedEventStart);
            timings.navigationStartSpy.and.returnValue(navigationStartValue);
        });

        act();

        expect(result.domContentLoadedEventStart).toBe(domContentLoadedEventStart - navigationStartValue);
    });

    it('Should determine DOM Content Loaded Event End time by subtracting "DOM Content Loaded Event End" from "Navigation Start" timings', () => {
        let domContentLoadedEventEndValue = 2;
        let navigationStartValue = 1;

        arrange((timings) => {
            timings.domContentLoadedEventEndSpy.and.returnValue(domContentLoadedEventEndValue);
            timings.navigationStartSpy.and.returnValue(navigationStartValue);
        });

        act();

        expect(result.domContentLoadedEventEnd).toBe(domContentLoadedEventEndValue - navigationStartValue);
    });

    it('Should determine DOM Loading time by subtracting "DOM Loading" from "Navigation Start" timings', () => {
        let domLoadingValue = 2;
        let navigationStartValue = 1;

        arrange((timings) => {
            timings.domLoadingSpy.and.returnValue(domLoadingValue);
            timings.navigationStartSpy.and.returnValue(navigationStartValue);
        });

        act();

        expect(result.domLoading).toBe(domLoadingValue - navigationStartValue);
    });

    it('Should determine Page Complete time by subtracting "Load Event End" from "Navigation Start" timings', () => {
        let loadEventEndValue = 2;
        let navigationStartValue = 1;

        arrange((timings) => {
            timings.loadEventEndSpy.and.returnValue(loadEventEndValue);
            timings.navigationStartSpy.and.returnValue(navigationStartValue);
        });

        act();

        expect(result.pageComplete).toBe(loadEventEndValue - navigationStartValue);
    });

    it('Should determine First Byte time by subtracting "Response Start" from "Request Start" timings', () => {
        let responseStartValue = 2;
        let requestStartValue = 1;

        arrange((timings) => {
            timings.responseStartSpy.and.returnValue(responseStartValue);
            timings.requestStartSpy.and.returnValue(requestStartValue);
        });

        act();

        expect(result.firstByte).toBe(responseStartValue - requestStartValue);
    });

    it('Should determine Domain Lookup Start time by subtracting "Domain Lookup Start" from "Navigation Start" timings', () => {
        let domainLookupStartValue = 2;
        let navigationStartValue = 1;

        arrange((timings) => {
            timings.domainLookupStartSpy.and.returnValue(domainLookupStartValue);
            timings.navigationStartSpy.and.returnValue(navigationStartValue);
        });

        act();

        expect(result.domainLookupStart).toBe(domainLookupStartValue - navigationStartValue);
    });

    it('Should determine Connection Start time by subtracting "Connect Start" from "Navigation Start" timings', () => {
        let connectStartValue = 2;
        let navigationStartValue = 1;

        arrange((timings) => {
            timings.connectStartSpy.and.returnValue(connectStartValue);
            timings.navigationStartSpy.and.returnValue(navigationStartValue);
        });

        act();

        expect(result.connectionStart).toBe(connectStartValue - navigationStartValue);
    });

    it('Should determine Connection End time by subtracting "Connect End" from "Navigation Start" timings', () => {
        let connectEndValue = 2;
        let navigationStartValue = 1;

        arrange((timings) => {
            timings.connectEndSpy.and.returnValue(connectEndValue);
            timings.navigationStartSpy.and.returnValue(navigationStartValue);
        });

        act();

        expect(result.connectionEnd).toBe(connectEndValue - navigationStartValue);
    });

    it('Should determine Secure Connection Start time by subtracting "Secure Connnection Start" from "Navigation Start" timings', () => {
        let secureConnectionStartValue = 2;
        let navigationStartValue = 1;

        arrange((timings) => {
            timings.secureConnectionStartSpy.and.returnValue(secureConnectionStartValue);
            timings.navigationStartSpy.and.returnValue(navigationStartValue);
        });

        act();

        expect(result.secureConnectionStart).toBe(secureConnectionStartValue - navigationStartValue);
    });

    it('Should determine DOM Interactive time by substracting "DOM Interactive" from "DOM Loading" timings', () => {
        let domInteractiveValue = 2;
        let domLoadingValue = 1;

        arrange((timings) => {
            timings.domInteractiveSpy.and.returnValue(domInteractiveValue);
            timings.domLoadingSpy.and.returnValue(domLoadingValue);
        });

        act();

        expect(result.domInteractive).toBe(domInteractiveValue - domLoadingValue);
    });
});
