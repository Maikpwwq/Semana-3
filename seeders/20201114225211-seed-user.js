'use strict';

module.exports = {
    up: async(queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('users', [
            {
                name: 'carlos',
                email: 'ejemplo@gmail.com',
                password: '$2y$08$FTP/jKGNASwJf0ero7SBe.kQmUsOSjWYupPZ6/lS6en6RcithXFKO',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'michael',
                email: 'michael@gmail.com',
                password: '$2y$08$v7KTRsDwhrsEqnBmGq3PpeS9sp/UKsf9CI0lCYA49Ur9xy/ZsqOHe',
                createdAt: new Date(),
                updatedAt: new Date()
            }
    ]);
    },

    down: async(queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('users', null, {});

    }
};