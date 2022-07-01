import app from '../app.js';
import request  from 'supertest';
export const user = {
    username: 'admin_user', 
    email: 'admin@gmail.com',
    password: "admin123"
}
export let token = '';

describe('POST Create user', () => {
    const signUrl = '/api/auth/signup'; 
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