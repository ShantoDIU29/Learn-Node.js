const http=require('http'); // HTTP server বানানোর জন্য http module আনা হচ্ছে
const port=3000; // server কোন port এ চলবে
const hostname='127.0.0.1' // local machine এর address

const myServer=http.createServer((req,res)=>{ // নতুন server তৈরি করা হচ্ছে
  res.end("hello, i am your first server") // browser/client কে response পাঠানো হচ্ছে
});
myServer.listen(port,hostname,()=>{
  console.log(`server is running successfully at http://${hostname}:${port}`); // server চালু হলে URL দেখাবে
  
});


// const http=require('http');
// const port=3000;
// const hostname='127.0.0.1';
// const myServer=http.createServer((req,res)=>{
//   res.end("hello ,i am your first server")
// });

// myServer.listen(port,hostname,()=>{
//   console.log(`server is running succcessfully at http://${hostname}:${port}`)
// })