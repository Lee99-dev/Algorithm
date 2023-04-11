let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let n = Number(input[0]);
let answer = 0;
let flag = false;

while( n >= 0){
    if( n === 0 || n % 5 === 0){
       answer += Math.floor(n/5);
       console.log(answer);
       flag = true;
       break;
    }
    n -=3;
    answer +=1;
}
if(!flag){
    console.log(-1);
}
