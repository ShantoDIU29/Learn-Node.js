let users = require("../models/users.model");

const getAlluser = (req, res) => {
  res.status(200).json({ users });
};
const createUser=(req,res)=>{
const newUser={
  id:uuidv4(),
username:req.body.username,
email:req.body.email
}

  res.status(200).json({message:'i am post method'});
};
users.push(users)

module.exports = { getAlluser,createUser };const users = require("../models/users.model");
const { v4: uuidv4 } = require("uuid");

const getAlluser = (req, res) => {
  res.status(200).json({ users });
};

const createUser = (req, res) => {
  const newUser = {
    id: uuidv4(),
    username: req.body.username,
    email: req.body.email,
  };

  users.push(newUser);

  res.status(201).json({
    message: "User created successfully",
    user: newUser,
  });
};

module.exports = { getAlluser, createUser };