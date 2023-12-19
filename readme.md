This is the readme for elearing  app.

Running without docker: 
1. Please move to the root folder of the application.
2. run command:  npm install to install necessary dependencies
3. run command: npm run dev to run the project in dev environment. You should get APIs in localhost:8081/

APIs are: 
1. localhost:8081/courses get request
2. localhost:8081/course/id get request
3. localhost:8081/create-course post request with body
{
    "title": "test",
    "description" : "test description",
    "instructor": "test instructor",
    "duration": 1200,
    "price": 10.0 
}

4. localhost:8081/filter-courses post request with body:
{
    "instructor": "test instructor",
    "duration": 200,
    "price": 1000
}
5. localhost:8081/enrollment post request with body
{
    "name": "test",
    "courseId": 1,
    "enrollmentDate": null
}



4. For testing: 
Go to the root folder and run: 
npx mocha test/enrollmentController.test.js
npx mocha test/courseController.test.js