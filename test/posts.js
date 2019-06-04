const app = require('./../app'),
 	  chai = require('chai'),
 	  chaiHttp = require('chai-http'),
 	  expect = chai.expect;

const Post = require('../models/post'),
	  server = require('../app');

chai.should()
chai.use(chaiHttp)

describe('Posts', () => {
	const agent = chai.request.agent(server)

	const newPost = {
		title: 'post title',
		url: 'https://www.google.com',
		summary: 'post summary'
	}

	it('should create with valid attributes at POST /posts/new', (done) => {
		Post.estimatedDocumentCount()
		.then((initialDocCount) => {
			chai
			.request(app)
			.post('/posts/new')
			.set("content-type", "application/x-www-form-urlencoded")

			.send(newPost)
			.then((res) => {
				Post.estimatedDocumentCount()
				.then((newDocCount) => {
					expect(res).to.have.status(200) // CRASH
					expect(newDocCount).to.be.equal(initialDocCount + 1)
					done()
				})
				.catch((err) => {
					done(err)
				})
			})
			.catch((err) => {
			done(err)
			})
		})
		.catch((err) => {
			done(err)
		})
	})

	after(() => {
	  Post.findOneAndDelete(newPost);
	});
})