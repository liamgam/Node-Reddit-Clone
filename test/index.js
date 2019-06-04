const app = require('./../app'),
	  chai = require('chai'),
	  chaiHttp = require('chai-http'),
	  should = chai.should();

chai.use(chaiHttp);

describe('site', () => {
	it('should have home page', (done) => {
		chai
		.request(app)
		.get('/')
		.end((err, res) => {
			if (err) {
				return done(err)
			}
			res.status.should.be.equal(200)
			return done()
		})
	})
})