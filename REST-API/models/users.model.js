const { v4: uuidv4 } = require("uuid");

const users = [
  {
    id: uuidv4(),
    username: "Shanto Roy",
    email: "shanto99@gmail.com",
  },
  {
    id: uuidv4(),
    username: "Ankon Dey",
    email: "ankon21@gmail.com",
  },
];

module.exports = users;