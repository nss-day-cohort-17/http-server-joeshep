const { readFile } = require('fs');
const { createServer } = require('http');
const server = createServer();

server.on('request', (req, res) => {
  console.log("request method", req.method);
  console.log("request url", req.url);
  console.log("request headers", req.headers);

  // respond with a simple message
  // res.writeHead(200, {"useless-message": "Howdy, Cohort 17"});
  // res.write('Hello,');
  // res.end(" Dad!");

  // or...
  // respond with an html file
  readFile('index.html', (err, buff) => {
    res.end(buff);
  });

  // or...
  // Respond with a file using a read stream
  const readStream = createReadStream('index.html');
    readStream
    .on('error', (err) => {
      res.end(error);
    })
    .on('open', () => {
      readStream.pipe(res)
      // res.end() not needed
    });

  // or...
  // respond with any file (like: http-server)
  // 404 if no file exists
  // const path = url.slice(-1) === '/' 
  // ? url.slice(1).concat('index.html') 
  // : url.slice(1)

  // console.log("Request received for: ", path);

  // readFile(path, (err, buff) => {
  //   if (err) {
  //     res.statusCode = 404;
  //     console.log("response", res);
  //     return res.end('not found, mon\n')
  //   }
  //   res.end(buff);
  // })
});

server.listen(8080);

