//os,path
// const { log } = require("console");
// const os=require("os");
//console.log(os.userInfo());
// console.log(os.homedir());
// console.log(os.totalmem());
// console.log(os.freemem());

//console.log(os.hostname());

//individual use (Suppose using totalmem,freemem)
// const {totalmem,freemem}=require("os");
// console.log(totalmem());
// console.log(freemem());
// console.log(__dirname);
// console.log(__filename);
const path=require("path"); // path module দিয়ে file/folder path নিয়ে কাজ করা যায়
const extensionName=path.extname("index.html"); // ফাইলের extension বের করা হচ্ছে
console.log(extensionName);
const joinName=path.join(__dirname+ "/views"); // current folder এর সাথে views folder এর path যোগ করা হচ্ছে
console.log(joinName);
