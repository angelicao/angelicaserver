var http = require('http');

var server = http.createServer(function(request, response) {
    response.write('Tulpaner är fina');
    response.end();
});


server.listen(3000);