const app = require('../app');
const request = require('supertest');
const AuthorModel = require('../src/model/AuthorModel');

jest.setTimeout(30000);

let id='';

beforeAll(async () => {
  await AuthorModel.deleteMany();
});

test('should insert a new Author', async () => {
  await request(app).post('/author/addAuthor').send({
    firstName: "James",
    lastName: "Chadwick",
    nationality: "American"
  }).expect(200).then(response => {
    id = response.body._id;
  });
});