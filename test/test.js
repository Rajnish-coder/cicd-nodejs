let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../app');
let should = chai.should();

chai.use(chaiHttp);

describe('/ compose route', () => {
  it('it should check the compose page', (done) => {
    chai.request(server)
        .get('/compose')
        .end((err, res) => {
              res.should.have.status(200);
          done();
        });
  });
});
