import chai from 'chai'
import mocha from 'mocha';
import router from '../router.js'
import request from 'request'
import chaiHttp from 'chai-http';
import {
  expect
} from 'chai'
import {
  should
} from 'chai'
import {
  assert
} from 'chai'

import mongoose from 'mongoose'
import Note from '../models/note.model.js'

chai.use(chaiHttp);

describe('Testing HTTP Requests', () => {


  // maybe do something cool and crazy here 
  before(function (done) {
    mongoose.connect('mongodb://localhost:27017', done);
  });
  //especially here
  after(async () => {
    await mongoose.disconnect()
  })

  describe('Creating a document', () => {
    it('should create a document/file', (done) => {
      const note = new Note({
        audio: {
          name: "619bb1f37c22f32c518262ff.wav",
          data: 'GkXfo59ChoEBQveBAULygQRC8'
        },
        text: "text here",
        userID: "1"
      });
      note.save()
        .then(() => {
          assert(!note.isNew);
          done();
        })
    })
  })

  // get all notes
  describe('Get Notes', () => {

    it('1. test GET note status response', function (done) {
      chai.request('http://localhost:3001')
        .get('/note')
        .end(function (err, res) {
          expect(res).to.have.status(200);
          done();
        });
    });
  })

  //  GET by ID
  //  describe.ignore('individual note test', () => {
  //   it('2. test GET specific note while DB is empty, expect error status response', function(done) { 
  //     chai.request('http://localhost:3001')
  //     .get('/note/:2')
  //     .end(function(err, res) {
  //       expect(res).to.have.status(200);
  //       done();                               
  //     });
  //   });
  // })

  // DELETE 
  describe('Delete Notes', () => {

    it('3. tests DELETE note status response', function (done) {
      chai.request('http://localhost:3001')
        .delete('/note')
        .end(function (err, res) {
          expect(res).to.have.status(204);
          done();
        });
    });

  })


  // post

  describe('/POST book', () => {
    it('Post Note', function (done) {
      const requested = chai.request('http://localhost:3001');
      requested
        .post('/note')
        .send({
          audio: {
            name: "619bb1f37c22f32c518262ff.wav",
            data: "Binary('GkXfo59ChoEBQveBAULygQRC84EIQoKEd2VibUKHgQRChYECGFOAZwHCGQ2hyb21lV0GGQ2hy...', 0)"
          },
          text: "text here",
          userID: "1"
        })
        .then(function (res) {
          requested.close()
        })
      done()

    })
  });
})