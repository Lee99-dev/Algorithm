let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let n = Number(input[0]);
let score = input[1].split(' ').map(Number);

let maxValue = score.reduce((a, b) => Math.max(a, b));
let answer = [];
for(let i =0; i<n; i++){
answer.push(score[i] / maxValue * 100);    
}

console.log(answer.reduce((a, b) => a + b)/ n);