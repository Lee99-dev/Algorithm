let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

//입력 1번째 줄
let n = Number(input[0].split(' ')[0]);
let k = Number(input[0].split(' ')[1]);

//입력 2번째 줄
let arr = [];

for(let i = 1; i<=n; i++) arr.push(Number(input[i]));


let coin = 0;

for(let i = n-1; i >= 0; i--){

    coin = coin + Math.floor(k/arr[i]);
    k = k %arr[i];

    
}

console.log(coin);