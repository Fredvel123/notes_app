import app from '../app.js';
import request  from 'supertest';

describe('POST Create user', () => {
    const signUrl = '/api/auth/signup';
    const user = {
        username: 'admin_user', 
        email: 'admin@gmail.com',
        password: "admin123"
    }

    it('no email - missing email', async () => {
        user.email = ''
        const response = await request(app).post(signUrl).send(user)
        expect(response.body.message).toBe('No email. Please add your email to register your account')
        expect(response.body.status).toBe(500)
    });
    // it('email already exists', async () => {});
    // it('', async () => {});
    // it('', async () => {});
});