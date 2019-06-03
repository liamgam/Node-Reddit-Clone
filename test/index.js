const app = require('./../app'),
	  chai = require('chai'),
	  chaiHttp = require('chai-http'),
	  should = chai.should();

chai.use(chaiHttp);

describe('site', function() {
	it('should have home page', function(done) {
		chai
		.request(app)
		.get('/')
		// use function keyword???
		.end((err, res) => {
			if (err) {
				return done(err)
			}
			res.status.should.be.equal(200)
			return done()
		})
	})
})