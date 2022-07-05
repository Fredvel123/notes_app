import app from '../app.js';
import request from 'supertest';
// import sequelize from '../config/database/db.connection.js';

export let user = {
	username: 'admin_user',
	email: 'admin@gmail.com',
	password: 'admin123',
};
export let token = '';

describe('POST Create user', () => {
	const signUrl = '/api/auth/signup';
	it('no email - missing email', async () => {
		const response = await request(app).post(signUrl).send({
			username: user.username,
			email: '',
			password: user.password,
		});
		expect(response.body.message).toBe(
			'No email. Please add your email to register your account'
		);
		expect(response.body.isCreated).toBe(false);
		expect(response.body.status).toBe(500);
	});
	it('password incorrect - password length', async () => {
		const response = await request(app).post(signUrl).send({
			username: user.username,
			email: user.email,
			password: '1234',
		});
		expect(response.body.message).toBe(
			'Your password must be greater than 5 and less than 25 characteres'
		);
		expect(response.body.isCreated).toBe(false);
	});
	it('username incorrect - username length', async () => {
		const response = await request(app).post(signUrl).send({
			username: 'user',
			email: user.email,
			password: user.password,
		});
		expect(response.body.message).toBe(
			'Username must be greater than 5 and less than 30 characteres'
		);
		expect(response.body.isCreated).toBe(false);
	});
	it('user craeted successfully', async () => {
		const response = await request(app).post(signUrl).send(user);
		expect(response.body.message).toBe(
			'Your account was created successfully'
		);
		expect(response.body.isCreated).toBe(true);
	});
	it('email already exists', async () => {
		const response = await request(app).post(signUrl).send(user);
		expect(response.body.message).toBe(
			'The email is already used, please add a new email'
		);
		expect(response.body.isCreated).toBe(false);
	});
});
describe('POST Create user', () => {
	const logInUrl = '/api/auth/login';

	it('logIn successfully', async () => {
		const response = await request(app).post(logInUrl).send({
			password: user.password,
			email: user.email,
		});
		expect(response.body.auth).toBe(true);
		token = response.body.token;
	});
	// it('', async () => {});
	// it('', async () => {});
	// it('', async () => {});
	// it('', async () => {});
});
