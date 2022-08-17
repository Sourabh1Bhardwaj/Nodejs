// const fs = require('fs');
// const input = process.argv;

// if(input[2]=='add'){
//     fs.writeFileSync(input[3],input[4]);
// }
// else if(input[2]=='remove'){
//     fs.unlinkSync(input[3]);
// }
// else{
//     console.log('Invalid input');
// }

//Create multiple file in File folder
// const fs = require('fs');
// const path = require('path');
// const dirPath = path.join(__dirname,'Files');

// // for(var i=0;i<5;i++){
// //     fs.writeFileSync(dirname+`/hello${i}.txt`,"Hii to all");
// // }

// fs.readdir(dirPath,(err,files)=>{
//     files.forEach((item)=>{
//         console.log(item);
//     });
// });

//CRUD Operation
const fs = require('fs');
const path = require('path');
const dirPath = path.join(__dirname,'CRUD');
const filePath = `${dirPath}/apple.txt`;

// fs.writeFileSync(filePath,'This is a simple text file');
// fs.readFile(filePath,'utf-8',(err,item)=>{
//     console.log(item);
// });
// fs.appendFile(filePath,' and file name is apple.txt',(err)=>{
//     if(!err) console.log("File is updated");
// });

// fs.rename(filePath,`${dirPath}/fruit.txt`,(err)=>{
//     if(!err) console.log('File name is updated');
// });

fs.unlinkSync(`${dirPath}/fruit.txt`);