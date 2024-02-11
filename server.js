/*
I am assuming that you want me to complete this challenge using nodejs and not use any of Node.js's frameworks. I hope I am right.
*/

// Structure
// 1. Define a local port for the server
// 2. create an http server
// 2. b) handlle routing in createServer callback
// 3. start the server

const http = require("http");

const PORT = 8181;

const server = http.createServer((req, res) => {
  // log each request method and url
  console.log(`${req.method} ${req.url}`);

  if (req.url === "/") {
    // handle root route logic
    res.writeHead(200), { "Content-Type": "text/plain" };
    res.end("This is the homepage!");
  } else if (req.url === "/about") {
    // handle /about route logic
    res.writeHead(200), { "Content-Type": "text/plain" };
    res.end("This is the about page!");
  } else {
    // handle non-existent route logic for error handling
    res.writeHead(404);
    res.end("404 not found");
  }
});

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
