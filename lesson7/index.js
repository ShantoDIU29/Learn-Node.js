const http=require('http');
const fs=require('fs')
const port=3000;
const hostname='127.0.0.1';
const server=http.createServer((req,res)=>{

const handlerReadFile=(statusCode,FileLocation)=>{
  fs.readFile(FileLocation,(err,data)=>{

      res.writeHead(statusCode,{"content-Type":"text/html"});
      res.write(data);
      res.end();
    })

}

  if(req.url==="/"){
    handlerReadFile(200,"./views/index.html");
  }

  else if(req.url==="/about"){
     handlerReadFile(200,"./views/about.html");

  }

else if(req.url==="/contact"){
   handlerReadFile(200,"./views/contact.html");


}

else{
  handlerReadFile(404,"./views/error.html");
}

})

server.listen(port,hostname,()=>{
 console.log(`server is running at http://${hostname}:${port}`);
 
})