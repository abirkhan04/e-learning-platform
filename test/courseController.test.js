const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../server');
const courseController = require('../app/controllers/course.controller');
const {expect} = chai;
chai.use(chaiHttp);

describe('Course Controller Tests', () => {
  let server;

  before((done) => {
    server = app.listen(done);
  });

  after((done) => {
    server.close(done);
  });

  it('should create a new course', async () => {
    const courseData = {
      title: 'Test Course',
      description: 'This is a test course.',
      instructor: 'Test Instructor',
      duration: 10,
      price: 99.99,
    };

    const response = await chai
      .request(app)
      .post('/create-course')
      .send(courseData);

    
    expect(response).to.have.status(200);
    expect(response.body).to.have.property('duration');
    expect(response.body).to.have.property('title').to.equal(courseData.title);
    
  });
});