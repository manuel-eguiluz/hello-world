import request from 'supertest';
import { app } from '../server';

describe('Test HomeController', () => {
  it('Request / should return Hello World!', async () => {
    const result = await request(app).get('/').send();

    expect(result.status).toBe(200);
    expect(result.body.data).toBe('Hello World!');
  });
});
