const request = require("supertest");
const app = require('../../src/app');
const connection = require('../../src/database/connection');

describe('ONG', () => {
    var ongId;

    beforeAll(async () => {
        await connection.migrate.rollback();
        await connection.migrate.latest();
    })

    afterAll(async () => {
        await connection.destroy();
    })

    it('should be able to create a new ONG', async () => {
        const response = await request(app)
            .post("/ongs")
            .send({
                name: "Cantinho dos gatos",
                email: "gatos@gmail.com",
                whatsapp: "847109371",
                city: "Sofalas",
                uf: "SF",
            });

        expect(response.body).toHaveProperty('id');
        expect(response.body.id).toHaveLength(8);
    });

    it('Should be able to List ONGs', async () => {
        const response = await request(app).get("/ongs");

        expect(response.body[0]).toHaveProperty('id');
        expect(response.body[0]).toHaveProperty('name', 'Cantinho dos gatos');
        expect(response.body[0]).toHaveProperty('email', 'gatos@gmail.com');
        expect(response.body[0]).toHaveProperty('whatsapp', '847109371');
        expect(response.body[0]).toHaveProperty('city', 'Sofalas');
        expect(response.body[0]).toHaveProperty('uf', 'SF');

        ongId = response.body[0].id;
    });

    it('should be able to create a session', async () => {
        const response = await request(app)
            .post('/session')
            .send({
                id: ongId
            });

        expect(response.body).toHaveProperty('name', 'Cantinho dos gatos');
    });
})