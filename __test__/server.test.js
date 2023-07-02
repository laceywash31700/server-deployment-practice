'use strict';

const supertest = require('supertest');
const app = require('../server');

const request = supertest(app);

describe('making sure the server routes work', () => {
  
  test('request to /wat-up-internet', async () => {
    const response = await request.get('/wat-up-internet');
    expect(response.text).toContain(`it's currently ${Date()}`);
  });

  test('request to /peace  sends message about being safe on the web', async () => {
    const response = await request.get('/peace');
    expect(response.text).toBe(`Safe surfing internet vagabond. Remember not to download or share any personal information from sites that are sketchy.`);
  });

  test('test undefined routes', async () => {
    const response = await request.get('/sandwiches');
    console.log(response);
    expect((response._body.status) && (response._body.message)).toEqual((500) && (`SERVER ERROR: You are not going anywhere my dude this route doesn't exist`) );
  });

});