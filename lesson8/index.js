const express=require('express');
const app=express();
const PORT=3000;
const bodyParser=require("body-parser");

// app.get("/",(req,res)=>{
// // const id=req.query.id;
// // const name=req.query.name;
// // const id=req.params.id;
// // const age=req.params.age;

// const id=req.header("id");
// const name=req.header("name");
//   res.send(`Student id is :${id} name is :${name}`);
// })
// app.get("/login",(req,res)=>{
   
//   res.send("i am login route");
// })
app.use(bodyParser.urlencoded())
app.use(bodyParser.json())

app.get("/register",(req,res)=>{
  res.sendFile(__dirname +"/index.html")
})


app.post("/register",(req,res)=>{

const fullName=req.body.fullName;
const age=req.body.age;
res.send(`<h2> Your name is:${fullName} and age is:${age}`);
})


app.listen(PORT,()=>{
  console.log(`server is running at http://localhost:${PORT} `)
})