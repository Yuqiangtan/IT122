console.log('Hello from index')
const http = require("http");
http.createServer(
    (req,res) => {
    var path = req.url.toLowerCase();
    console.log(path)
    switch(path) {
        case '/':
            res.writeHead(200, {'Content-Type': 'text/plain'});
            res.end('Home page');
            break;
        case '/about':
            res.writeHead(200, {'Content-Type': 'text/plain'});
            res.end('About page:I am Yuqiang Tan');
            break;
        default:
            res.writeHead(404, {'Content-Type': 'text/plain'});
            res.end('404 Not found');
            break;
    }
    }).listen(process.env.PORT || 3000);