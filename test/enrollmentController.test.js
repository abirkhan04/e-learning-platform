const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../server'); // Adjust the path based on your project structure
const enrollmentService = require('../app/services/enrollment.service'); // Adjust the path

chai.use(chaiHttp);
const expect = chai.expect;

describe('Enrollment Controller Tests', () => {
  it('should create a new enrollment', async () => {
    const enrollmentData = {
      name: 'John Doe',
      courseId: 2,
      enrollmentDate: '2023-01-01',
    };

    const response = await chai
      .request(app)
      .post('/enrollment')
      .send(enrollmentData);
    
    expect(response).to.have.status(200);
    expect(response.body).to.have.property('enrollmentDate');
    expect(response.body).to.have.property('name').to.equal(enrollmentData.name); 
  });
  it('should return a validation error if required fields are missing', async () => {
    const enrollmentData = {
      name: "test",
      courseId: '123',
      enrollmentDate: '2023-01-01',
    };

    const response = await chai
      .request(app)
      .post('/enrollment')
      .send(enrollmentData);

    expect(response).to.have.status(400); // Assuming you respond with HTTP 400 for validation error
    expect(response.body).to.deep.equal({ body: 'Course is not found' });
    // Add more assertions based on your validation error response structure
  });
  it('should return a validation error if required fields are missing', async () => {
    const enrollmentData = {
      courseId: '123',
      enrollmentDate: '2023-01-01',
    };

    const response = await chai
      .request(app)
      .post('/enrollment')
      .send(enrollmentData);

    expect(response).to.have.status(400); // Assuming you respond with HTTP 400 for validation error
    // expect(response.body).to.have.property('error').to.equal('Validation error');
    // Add more assertions based on your validation error response structure
  });
});