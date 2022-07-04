### Conceptual Exercise

Answer the following questions below:

- What is a JWT?
  - JSON Web Token - a way to send data between client and server, similar to a cookie, but more secure. The JWT sends:
    - `header` - metadata declaring that it is a JWT, and the signing algorithm used
    - `payload` - the information used in the session
    - `signature` - the header and payload that is signed with a secret key

- What is the signature portion of the JWT?  What does it do?
  - The signature helps to verify the sender and ensures the data wasn't manipulated. It takes the header and payload, and signs it with the secret key via the algorithm declared in the header.

- If a JWT is intercepted, can the attacker see what's inside the payload?
  - Yes, the attacker can see the contents of the JWT as it can be decoded. However, if they don't have the secret key, any attempts to manipulate the data without a matching secret key will result in a incorrect signature, which can then be rejected by the recipient.

- How can you implement authentication with a JWT?  Describe how it works at a high level.
  - Create a JWT that includes the username/password in the payload. The request must also send the secret key. 
  - The algorithm (as declared in the header) will then hash the username and password with the secret, and create a signature.
  - If, when sent to the server, the signature matches, the server then sends back a valid token, indicating the signature matches. 
  - If it doesn't match, it will send back a 401 status code.

- Compare and contrast unit, integration and end-to-end tests.
  - **Unit tests** are isolated tests of a singular function or component
  - **Integration tests** are tests of 2 or more concurrent functions that are interdependent. An example of this is testing a route function that makes a call to the database via a separate model function, which the expectation of a valid return result.
  - **End to End tests** are comprehensive tests of the entire application. An example of this is testing that a user is successfully created, can make successful queries to a database, and view multiple pages in the application.

- What is a mock? What are some things you would mock?
  - Mocks are good ways to test API calls and other third-party dependent functions.

- What is continuous integration?
  - Continuous integration is a way to automate the build and test process whenever a version control change has been made to a certain repo.

- What is an environment variable and what are they used for?
  - An environment variable is a way to store private data as variables, such as tokens and passwords.

- What is TDD? What are some benefits and drawbacks?
  - Test-Driven Development is an approach to writing code that begins with writing tests first, and then writing code that will pass the test.
  - **Benefits**: Code is 
  - **Drawbacks**: 

- What is the value of using JSONSchema for validation?
  - It's a way for us to make sure that the incoming data is of the right type and all required data fields are met. An example is in the use of a form that contains different types of fields, such as integers, strings, and booleans. JSONSchema would then scan the `req.params` object data and make sure it matches with the schema requirements.

- What are some ways to decide which code to test?
  - For unit testing, a good way to start is to write a test for every function. You must test for valid results, invalid results, and edge cases (i.e. extreme examples).
  - Another approach is to use TDD as you write your code, so that you don't have to come back after you've finished an entire block of code.

- What does `RETURNING` do in SQL? When would you use it?
  - `RETURNING` returns a set of columns from the database. This is useful when you need to execute additional functions that are dependent on the returned data. For example, if you need to query your database for a set of user IDs that match a specific criteria, and then you need to map those IDs into a new Javascript object, you need to add `RETURNING id` to your query so that you can save the result to a variable to then be used in concurrent functions.

- What are some differences between Web Sockets and HTTP?
  - With HTTP, connections from a client to a server can only be made when the client initiates a request. Once the initial request is made, the connection is closed. This is unidirectional communication.
  - Web sockets allow for bidirectional communication, so that real-time changes and updates can be sent from a server to a client without the need for the client to initiate the request.
  - A good example of Web sockets would be in the case of a real-time weather app. When a change in weather happens, the update is sent to the client and the clients then renders it on the front-end for the user to get the most up-to-date change.

- Did you prefer using Flask over Express? Why or why not (there is no right
  answer here --- we want to see how you think about technology)?
  - I find testing in Express to be easier! 
  - I also find the separation of routes and components to be more organized in Express. I've learned how to separate models from routes more appropriately, which makes debugging and testing easier.
