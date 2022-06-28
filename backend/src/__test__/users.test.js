import app from '../app.js';
import request from 'supertest';

describe('GET /api/users/all', () => {
    const url = '/api/users/all'
    it('There are no users added', async () => {
        const res = await request(app)
            .get(url)
            .send()
        expect(res.statusCode).toBe(200)
        expect(res.body.message).toEqual('there are no users yet')
    });
    // it('There are users', async () => {
    //     const res = await request(app)
    //         .get(url)
    //         .send()
    //     expect(res.body).toEqual([]);
    // });
    // it('', async () => {});
    // it('', async () => {});
    // it('', async () => {});
    // it('', async () => {});
    // it('', async () => {});
});

