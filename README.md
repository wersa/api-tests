# API testing via  axios and jest
https://restful-booker.herokuapp.com/ 


Project structure:
- Inside the folder test (src/test): `booking.test.js` file with test scenarios.

- Inside the folder util (src/util): `variables.js` file with all variables that are required for tests.

- Inside the folder httpMethods (src/httpMethods"): files for all axios requests. One request=one file with a function.

- Inside the folder bodies (src/bodies"): `preRequest.js` file for variables which used in body.

- Inside the folder bodies (src/bodies"): `bookingBody.js` file where are initialized all bodies which needed for scenarios. Data for bodies is generated or taken from the varibles file.
