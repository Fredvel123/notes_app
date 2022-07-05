import app from '../app.js';
import request from 'supertest';
import { token, user } from './auth.test.js';

describe('GET /api/users/all', () => {
	const url = '/api/users/all';
	it('There are no users added', async () => {
		const res = await request(app).get(url).send();
		expect(res.statusCode).toBe(200);
		expect(res.body.message).toEqual('there are no users yet');
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

describe('DELETE remove the user', () => {
	const deleteUrl = '/api/users/remove';
	it('user deleted successfully', async () => {
		const response = await request(app)
			.delete(deleteUrl)
			.set('access-token', token)
			.send({ password: user.password });
		expect(response.body.isRemoved).toBe(true);
	});

	// it('', async () => {});
});
