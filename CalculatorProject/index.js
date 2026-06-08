const express=require("express");
const app=express();
const PORT=3000;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.get("/",(req,res)=>{
  res.sendFile(__dirname +"/index.html");
  
});
app.get("/addition",(req,res)=>{
  res.sendFile(__dirname +"/addition.html");
  
});
app.get("/subtraction",(req,res)=>{
  res.sendFile(__dirname +"/subtraction.html");
  
});
app.get("/multipication",(req,res)=>{
  res.sendFile(__dirname +"/multipication.html");
  
});
app.get("/devison",(req,res)=>{
  res.sendFile(__dirname +"/devison.html");
  
});

app.post("/addition",(req,res)=>{
  const number1 = Number(req.body.number1);
const number2 = Number(req.body.number2);
const sum=number1+number2;
res.send(`Addition is :${sum}`);
});
app.post("/subtraction",(req,res)=>{
  const number1 = Number(req.body.number1);
const number2 = Number(req.body.number2);
const sum=number1 - number2;
res.send(`Subtraction is :${sum}`);
});

app.post("/multipication",(req,res)=>{
  const number1 = Number(req.body.number1);
const number2 = Number(req.body.number2);
const sum=number1*number2;
res.send(`multipication is :${sum}`);
});
app.post("/devison",(req,res)=>{
  const number1 = Number(req.body.number1);
const number2 = Number(req.body.number2);
const sum=number1/number2;
res.send(`devison is :${sum}`);
});



app.listen(PORT,()=>{
  console.log(`server is running at http://localhost:${PORT}`);
  
})