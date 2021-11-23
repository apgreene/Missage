const chai = require('chai')
const mocha =require ('mocha');

const request =require ('request');
const chaiHttp =require ('chai-http');
const {
  expect
} =require('chai')
const {
  should
} =require('chai')
const {
  assert
} =require('chai')

const mongoose = require('mongoose')
const Note =  require('../ServerJS/models/note.model.js')

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
    it('2. Response should be an Object', function (done) {
      chai.request('http://localhost:3001')
        .get('/note')
        .end(function (err, res) {
          expect(res).to.be.a('Object');
          done();
        });
    });

    it('3. res.body should be an array', function (done) {
      chai.request('http://localhost:3001')
        .get('/note')
        .end(function (err, res) {
          expect(res.body).to.be.a('Array');
          done();
        });
    });

    it.skip('4. Should update the icon', function (done) {
      chai.request('http://localhost:3001')
        .put('/note/:???')
        // alter .icon or title property
        .end(function (err, res) {
          expect(res).to.be.a('Object');
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