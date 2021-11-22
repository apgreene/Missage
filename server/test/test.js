import * as chai from 'chai';
import mocha from 'mocha';
import router from '../router.js'
import request from 'request'
// import router from '../router';

// chai.use(chaiHttp);

// describe('should get true', () => {
//   it('should return true', () => {
//     // (true).assert.equal(true)
//     chai.expect([1, 2, 3].indexOf(5)).to.equal(-1);
//     chai.expect(2).to.equal(2);
//   } )
// })

describe('Testing HTTP Requests', () => {
  // Test GET request
  describe('Test GET', () => {
    it('Should return 200', (done) => {
      request('http://localhost:3001/note', (error, response, body) => {
        chai.expect(response.statusCode).to.equal(200);
        done()
      })

    })
  })
})