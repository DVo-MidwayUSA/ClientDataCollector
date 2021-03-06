'use strict';

import ClientDataCollector from '../../../src/client-data-collector';

describe('Client Data Collection Tests', () => {
    let sut;
    let result;

    it('Should get account number from universal variable user id', () => {
        // Arrange
        let universalVariable = {
            user: {
                user_id: 'id',
            },
        };

        sut = new ClientDataCollector(universalVariable);

        // Act
        result = sut.getUserData();

        // Assert
        expect(result).toEqual({a: universalVariable.user.user_id});
    });
});
