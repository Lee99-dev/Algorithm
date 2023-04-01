let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let line = input[0].split(' ');
let n = parseInt(line[0]);
let x = parseInt(line[1]);
let a = input[1].split(' ').map(Number);

let arr = [];

for(let i = 0; i < n; i++){
    if(a[i] < x){
        arr.push(a[i]);
    }
}

let answer = '';

for(let i=0; i<arr.length; i++){
    answer += arr[i] + ' ';
}

console.log(answer);
