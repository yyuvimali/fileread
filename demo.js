
var http=require('http')
const fs=require ('fs')
http.createServer(function(req,res){
const url=req.url;
const method=req.method;
if (url==='/'){
res.write('<html>')
res.write('<head><title>Enter Message</title></head>');
res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">add</button></form></body>');
res.write('</html>');
return res.end();
}if (url==='/message' && method==='POST'){
    fs.writeFileSync('message.txt','DUMMY');
    res.statusCode=302
    res.setHeader('location','/');
    return res.end();
}
res.setHeader('Content-Type','text/html');
res.write('<html>');
res.write('<head><title>My first page</title></head>');
res.write('<body><h1>Hello from node.js server</h1></body>');
res.write('</html>');
res.end();

}).listen(4000)