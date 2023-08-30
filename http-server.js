// HTTP
let http = require('http');
let fs = require('fs')

http.createServer(function(req,res){
    // The request is a get request
    if  (req.method == "GET"){
        if  (req.url == "/"){
            // 
            res.writeHead(200, {'content-type' : 'text/html'})
            // 'res.write' is To keep sending data continously
            let index = fs.readFileSync('index.html');
            let content = '<i> All is well </i>';
            res.write(index)
            // Only 1 response.end should exist
            res.end()
        }
        if  (req.url == "/contact"){
            
        }
    }
    // Request is a post request
    if  (req.method == "POST"){

    }
}).listen(5000)
// We use listen method to pick a port to run the server.
console.log('App running on port http://localhost:5000')
