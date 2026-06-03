const fs=require('fs'); // Node.js এর file system module আনা হচ্ছে
fs.rename('demo1.txt','demo2.txt',(err)=>{ // demo1.txt ফাইলের নাম বদলে demo2.txt করা হচ্ছে

  if(err){
    console.log(err); // কোনো error হলে সেটি console এ দেখাবে
    
  }
  else{
    console.log("successfull"); // rename সফল হলে success message দেখাবে
    
  }
});
