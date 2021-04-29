var serve = require('http')

serve.createServer(function(req,res){
 var host = req.headers.host
 if (host == "shorn.network"){
    res.end(host)
 }
 res.end('Not for hacker')
}).listen(1000)

