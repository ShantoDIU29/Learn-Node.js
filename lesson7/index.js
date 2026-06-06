const http = require('http');
const fs = require('fs');
const path = require('path');

const port = process.env.PORT || 3000;
const hostname = '127.0.0.1';

const server = http.createServer((req, res) => {
  const handlerReadFile = (statusCode, fileName) => {
    const fileLocation = path.join(__dirname, "views", fileName);

    fs.readFile(fileLocation, (err, data) => {
      if (err) {
        res.writeHead(500, { "Content-Type": "text/plain" });
        res.end("Server error");
        return;
      }

      res.writeHead(statusCode, { "Content-Type": "text/html" });
      res.end(data);
    });
  };

  if (req.url === "/") {
    handlerReadFile(200, "index.html");
  }

  else if (req.url === "/about") {
    handlerReadFile(200, "about.html");
  }

  else if (req.url === "/contact") {
    handlerReadFile(200, "contact.html");
  }

  else {
    handlerReadFile(404, "error.html");
  }
});

server.listen(port, hostname, () => {
  console.log(`server is running at http://${hostname}:${port}`);
});
