const request = require("supertest");
const app = require('../../src/app');
const connection = require('../../src/database/connection');

describe('Incident', () => {
    var ongId;

    beforeAll(async () => {
        const response = await request(app).get("/ongs");
        ongId = response.body[0].id;
    })

    afterAll(async () => {
        await connection.destroy();
    });

    it('should be able to create 2 new incidents', async () => {
        for (let index = 0; index < 10; index++) {
            const response = await request(app)
                .post('/incidents')
                .set('authorization', ongId)
                .send({
                    "title": "cancer de perna",
                    "descripition": "ddd",
                    "value": 100.00
                });

            expect(response.body).toHaveProperty('id');
            expect(response.body.id).not.toBeNaN();   
        }
    });

    it('Should be able to list Incidents', async () => {
        const response = await request(app).get('/incidents');

        expect(response.body[0]).toHaveProperty('id');
        expect(response.body[0]).toHaveProperty('title');
        expect(response.body[0]).toHaveProperty('descripition');
        expect(response.body[0]).toHaveProperty('value');
        expect(response.body[0]).toHaveProperty('ong_id');
        expect(response.body[0]).toHaveProperty('name');
        expect(response.body[0]).toHaveProperty('email');
        expect(response.body[0]).toHaveProperty('whatsapp');
        expect(response.body[0]).toHaveProperty('city');
        expect(response.body[0]).toHaveProperty('uf');
    })

    it('Should be able to delete an incident with id == 1', async () => {
        await request(app)
            .delete('/incidents/1')
            .set('authorization', ongId)
            .expect(204);
    })


})