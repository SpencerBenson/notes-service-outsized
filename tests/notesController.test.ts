import request from 'supertest';
import mongoose from 'mongoose';
import app from '../src/app';
import Note from '../src/models/Note';
import 'dotenv/config';
import dbConnection from '../src/db/config'
import {server} from '../src/app';



beforeAll(async () => {

  try {
    // MongoDB Connection
    await dbConnection;
    
  } catch (error) {
    console.error('Error setting up the database:', error);
  }

});

afterEach(async () => {
  await Note.deleteMany({});
});

afterAll(async () => {
  try {
    await mongoose.disconnect();
    server.close();
    mongoose.connection.close();
  } catch (error) {
    console.error('Error disconnecting from the database:', error);
  }
});


describe('Notes API', () => {
  test('should create a new note', async () => {
    const response = await request(app)
      .post('/api/notes')
      .send({ title: 'Test Note', content: 'Test Content', tags: ['test'] });

    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty('title', 'Test Note');
    expect(response.body).toHaveProperty('content', 'Test Content');
    expect(response.body).toHaveProperty('tags', ['test']);
  });

  test('should get all notes', async () => {
    await Note.create({ title: 'Note 1', content: 'Content 1', tags: ['tag1'] });
    await Note.create({ title: 'Note 2', content: 'Content 2', tags: ['tag2'] });

    const response = await request(app).get('/api/notes');

    expect(response.status).toBe(200);
    expect(response.body).toHaveLength(2);
  });

  test('should get a specific note by ID', async () => {
    const note = await Note.create({ title: 'Test Note', content: 'Test Content', tags: ['test'] });

    const response = await request(app).get(`/api/notes/${note._id}`);

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('title', 'Test Note');
    expect(response.body).toHaveProperty('content', 'Test Content');
    expect(response.body).toHaveProperty('tags', ['test']);
  });

  test('should update a note by ID', async () => {
    const note = await Note.create({ title: 'Test Note', content: 'Test Content', tags: ['test'] });

    const response = await request(app)
      .put(`/api/notes/${note._id}`)
      .send({ title: 'Updated Note', content: 'Updated Content', tags: ['updated'] });

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('title', 'Updated Note');
    expect(response.body).toHaveProperty('content', 'Updated Content');
    expect(response.body).toHaveProperty('tags', ['updated']);
  });

  test('should delete a note by ID', async () => {
    const note = await Note.create({ title: 'Test Note', content: 'Test Content', tags: ['test'] });

    const response = await request(app).delete(`/api/notes/${note._id}`);

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('title', 'Test Note');

    const deletedNote = await Note.findById(note._id);
    expect(deletedNote).toBeNull();
  });
});
