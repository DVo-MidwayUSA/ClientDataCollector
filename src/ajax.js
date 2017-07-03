'use strict';

export default class Ajax {
    constructor() {
        this.setXhr();
    }

    setXhr() {
        let isActiveX = !!window.ActiveXObject;
        if (isActiveX) {
            this.xhr = new window.ActiveXObject('Microsoft.XMLHTTP');
            return;
        }

        this.xhr = new XMLHttpRequest();
    }

    request(url, method, data, success, failure) {
        if (success || failure) {
            this.processResponse(success, failure);
        }
        this.xhr.open(method, url, true);
        this.xhr.send(data);
    }

    processResponse(success, failure) {
        let isCompleteReadyState = this.xhr.readyState === 4;
        let isOkStatus = this.xhr.status === 200;
        let responseText = this.xhr.responseText;

        this.xhr.onreadystatechange = () => {
            if (!isCompleteReadyState) {
                return;
            }
            if (isCompleteReadyState && isOkStatus) {
                let response = JSON.parse(responseText);
                success(response);
                return;
            }
            failure();
        };
    }
}
