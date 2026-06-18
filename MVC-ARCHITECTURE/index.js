const express = require("express");
const userRouter=require("./routes/users.route")

app.use(express.urlencoded({ extended: true }));
app.use(userRouter)

const htmlForm = `
<form action="/users" method="POST">
    
    <label>Enter Name:</label>
    <input type="text" name="name" placeholder="Enter your name">

    <br><br>

    <label>Enter Age:</label>
    <input type="number" name="age" placeholder="Enter your age">

    <br><br>

    <button type="submit">Save User</button>

</form>
`;


app.use((req, res, next) => {
  res.status(404).json({
    message: "resources not found",
  });
});

app.listen(PORT, () => {
  console.log(`server is running http://localhost:${PORT}`);
});