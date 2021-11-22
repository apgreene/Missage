// import chai from 'chai'
// import mocha from 'mocha';
// import router from '../router.js'
// import request from 'request'
// import chaiHttp from 'chai-http';
// import {
//   expect
// } from 'chai'
// import {
//   should
// } from 'chai'
// import {
//   assert
// } from 'chai'

// import mongoose from 'mongoose'
// import Note from '../models/note.model.js'

// chai.use(chaiHttp);

// before(function (done) {
//   mongoose.connect('mongodb://localhost:27017', done);
// });

// describe.skip('Testing HTTP Requests', () => {

//   describe('Basic tests to check file is working', () => {
  
//     it.skip('should find index of 2 at 1', () => {
//       assert.equal([1, 2, 3,].indexOf(2), 1)
//     })

//     it.skip('should return -1 when index sought for number not in array', () => {
//       assert.equal([1,2,3,].indexOf(5), -1)
//     })
  
//   })

//   describe.skip('Test database', () => {

//     it('should create a document', (done) => {
//       const note = new Note({
//         audio: {
//           name: "619bb1f37c22f32c518262ff.wav",
//           data: 'GkXfo59ChoEBQveBAULygQRC8'
//         },
//         text: "text here",
//         userID: "1"
//       });
      
//       note.save()
//         .then(() => {
//           assert(!note.isNew)
//           done()
//         })

//     })


//   })



// })
//   // describe('Creating a document', () => {
//   //   it('should create a document/file', (done) => {
//   //     const note = new Note({
//   //       audio: {
//   //         name: "619bb1f37c22f32c518262ff.wav",
//   //         data: 'GkXfo59ChoEBQveBAULygQRC8'
//   //       },
//   //       text: "text here",
//   //       userID: "1"
//   //     });
//   //     note.save()
//   //       .then(() => {
//   //         assert(!note.isNew);
//   //         done();
//   //       })
//   //   })
//   // })

//   // get all notes
//   // describe('Get Notes', () => {

//   //   it('1. test GET note status response', function (done) {
//   //     chai.request('http://localhost:3001')
//   //       .get('/note')
//   //       .end(function (err, res) {
//   //         expect(res).to.have.status(200);
//   //         done();
//   //       });
//   //   });
//   // })

//   //  GET by ID
//   //  describe.ignore('individual note test', () => {
//   //   it('2. test GET specific note while DB is empty, expect error status response', function(done) { 
//   //     chai.request('http://localhost:3001')
//   //     .get('/note/:2')
//   //     .end(function(err, res) {
//   //       expect(res).to.have.status(200);
//   //       done();                               
//   //     });
//   //   });
//   // })

//   // DELETE 
//   // describe('Delete Notes', () => {

//   //   it('3. tests DELETE note status response', function (done) {
//   //     chai.request('http://localhost:3001')
//   //       .delete('/note')
//   //       .end(function (err, res) {
//   //         expect(res).to.have.status(204);
//   //         done();
//   //       });
//   //   });

//   // })


//   // post

//   // describe('/POST book', () => {
//   //   it('post note', async function(){

//   //     let note = {
//   //       audio: {
//   //         name: "619bb1f37c22f32c518262ff.wav",
//   //         data: "Binary('GkXfo59ChoEBQveBAULygQRC84EIQoKEd2VibUKHgQRChYECGFOAZwHCGQ2hyb21lV0GGQ2hy...', 0)"
//   //       },
//   //       text: "text here",
//   //       userID: "1"
//   //     }
//   //     const postResponse = await chai.request('http://localhost:3001')
//   //       .post('/note')
//   //       .send(note)
//   //       .end((res, err) => {
//   //         if (err) done(err);
//   //         expect(res).to.have.status(201);
//   //         done()
//   //       }).catch(err => console.log(err))

//   //   });

//   // });