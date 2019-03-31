var http = require('http');
var fs = require('fs');

var server = http.createServer();
server.on('request', function (request, response) {
    response.setHeader("Content-Type", "text/html; charset=utf-8");
    if (request.method === 'GET' && request.url === '/index') {

        fs.readFile('./index.html', 'utf-8', function(err, data) {
            if (err) throw err;
            response.write(data);
            response.end();
        });
            
    } else {
            response.statusCode = 404;
            response.setHeader("Content-Type", "image/jpg;");

            fs.readFile('./404.png', function(err, data) {
                if (err) throw err;
                response.write(data);
                response.end();
            });
    }
});
server.listen(3000);