const http = require("http");

const fs = require("fs");



const PORT = 8000;
const hostname = "localhost";
const home = fs.readFileSync("./index.html","utf-8")
const server = http.createServer((req,res)=>{
    if(req.url ==="/"){
        return res.end(home)
    }
    if(req.url ==="/about"){
        return res.end("<h1>ABOUT Page</h1>")
    }
    if(req.url ==="/contact"){
        return res.end("<h1>CONTACT Page</h1>")
    }
    if(req.url ==="/service"){
        return res.end("<h1>SERVICE Page</h1>")
    }
    else{
        res.end('404 not found')
    }
    // res.end('working');
});

server.listen(PORT,hostname,()=>{
    console.log('Server is working');
});
    