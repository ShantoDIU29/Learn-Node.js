const express=require('express');
const bodyParser=require('body-parser')
const app=express();
const PORT=3000;
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

const getResultPage = (title, result, accentColor, backLink) => `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title}</title>
  <style>
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    body {
      min-height: 100vh;
      display: grid;
      place-items: center;
      padding: 24px;
      font-family: Arial, Helvetica, sans-serif;
      color: #17202a;
      background:
        radial-gradient(circle at top left, ${accentColor}33, transparent 28%),
        linear-gradient(135deg, #f7fbff 0%, #f4f8fb 100%);
    }

    .result-card {
      width: min(460px, 100%);
      padding: 36px;
      text-align: center;
      border-radius: 18px;
      background: rgba(255, 255, 255, 0.9);
      border: 1px solid rgba(255, 255, 255, 0.85);
      box-shadow: 0 24px 60px rgba(23, 32, 42, 0.16);
    }

    .badge {
      width: 78px;
      height: 78px;
      display: grid;
      place-items: center;
      margin: 0 auto 22px;
      border-radius: 50%;
      color: #ffffff;
      background: ${accentColor};
      font-size: 2rem;
      font-weight: 800;
      box-shadow: 0 16px 30px ${accentColor}55;
    }

    h1 {
      margin-bottom: 14px;
      color: ${accentColor};
      font-size: 2rem;
    }

    .value {
      margin: 18px 0 28px;
      padding: 18px;
      border-radius: 14px;
      color: #17202a;
      background: #f7fbff;
      border: 1px solid #e2edf4;
      font-size: 1.45rem;
      font-weight: 800;
    }

    a {
      display: inline-block;
      padding: 13px 22px;
      color: #ffffff;
      background: ${accentColor};
      border-radius: 12px;
      text-decoration: none;
      font-weight: 700;
      box-shadow: 0 14px 24px ${accentColor}44;
    }

    a:hover {
      transform: translateY(-1px);
      box-shadow: 0 18px 28px ${accentColor}55;
    }
  </style>
</head>
<body>
  <main class="result-card">
    <div class="badge">=</div>
    <h1>${title}</h1>
    <div class="value">${result}</div>
    <a href="${backLink}">Calculate Again</a>
  </main>
</body>
</html>
`;

app.get("/",(req,res)=>{
  res.sendFile(__dirname +"/index.html")
})
app.get("/circle",(req,res)=>{
  res.sendFile(__dirname +"/circle.html")
})
app.get("/triangle",(req,res)=>{
  res.sendFile(__dirname +"/triangle.html")
})
app.post("/triangle",(req,res)=>{
const height=req.body.height;
const base=req.body.base;
const area=0.5*base*height;
res.send(getResultPage("Triangle Area", `Area is ${area}`, "#4a90e2", "/triangle"))

});
app.post("/circle",(req,res)=>{
  const radius=req.body.radius;
  const area=Math.PI*radius*radius;
  res.send(getResultPage("Circle Area", `Area is ${area}`, "#16a085", "/circle"))
})


app.listen(PORT,()=>{
  console.log(`Server is running at http://localhost:${PORT}`);

})
