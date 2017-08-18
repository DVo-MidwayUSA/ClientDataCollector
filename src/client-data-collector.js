'use strict';

export default class ClientDataCollector {
    constructor(universalVariable) {
        this.universalVariable = universalVariable;
    }
    getUserData(universalVariable) {
        return {a: this.universalVariable.user.user_id};
    }
}
