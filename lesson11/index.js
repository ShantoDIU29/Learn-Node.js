const express=require('express');
const app=express();
const PORT=3000;

const myMiddleware=(req,res,next)=>{
  console.log('Middle ware function');
  next();
}
app.get("/",myMiddleware,(req,res)=>{
  console.log("i am home");
  res.send("i am home route");
})

app.listen(PORT,()=>{
  console.log(`server is running at http://localhost:${PORT}`)
})