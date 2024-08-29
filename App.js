const express = require('express');

//TODO: This line imports the Express module, which is a web application framework for Node.js. It simplifies the process of creating a web server.

const app = express();

/*TODO: This line creates an instance of an Express application. The app object is used to define routes and middleware for the web server.*/

const port = 3000;

/*TODO:This line defines a constant port and assigns it the value 3000. This is the port number on which the server will listen for incoming requests.*/

app.get('/', (req, res) => {
    res.send('Hello World!');
});

/*TODO:This line sets up a route handler for GET requests to the root URL ('/'). When a GET request is made to the root URL, the callback function is executed. req is the request object, which contains information about the HTTP request. res is the response object, which is used to send a response back to the client. res.send('Hello World!') sends the string 'Hello World!' as the response to the client.*/

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})

/*TODO:This line sets up a route handler for GET requests to the root URL ('/'). When a GET request is made to the root URL, the callback function is executed.req is the request object, which contains information about the HTTP request. res is the response object, which is used to send a response back to the client. res.send('Hello World!') sends the string 'Hello World!' as the response to the client.*/
