const request = require("supertest");
const app = require('../../src/app');
const connection = require('../../src/database/connection');

describe('Profile', () => {
    var ongId;

    beforeAll(async () => {
        const response = await request(app).get("/ongs");
        ongId = response.body[0].id;
    })

    afterAll(async () => {
        await connection.destroy();
    });

    it('Should be able to list incidents related to an ONG', async () => {
        const response = await request(app)
            .get('/profile')
            .set('authorization', ongId);
            
        console.log(response.body[0]);

        expect(response.body[0]).toHaveProperty('id');
        expect(response.body[0]).toHaveProperty('title');
        expect(response.body[0]).toHaveProperty('descripition');
        expect(response.body[0]).toHaveProperty('value');
        expect(response.body[0]).toHaveProperty('ong_id');
    })
})