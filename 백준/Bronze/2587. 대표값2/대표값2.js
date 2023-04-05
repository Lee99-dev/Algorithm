let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let arr = [];

//0부터 4까지
for(let i = 0; i < 5; i++){
    arr.push(Number(input[i]));
}
             
arr.sort((a, b) => a-b);
let avg = arr.reduce((a, b) => a+b) / arr.length;    
    
console.log(avg + "\n" + arr[2]);