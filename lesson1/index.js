//const {getName}=require('./student')
 
// const s1=require('./student');


//console.log(getName());

// console.log(s1.getAge());
// console.log(s1.cgpa);


const s1=require('./student'); // student.js ফাইল থেকে export করা ফাংশনগুলো আনা হচ্ছে
console.log(s1.getName()); // getName() কল করে নাম দেখানো হচ্ছে
console.log(s1.getAge()); // getAge() কল করে বয়স দেখানো হচ্ছে
