let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n').map(Number);

let n = input.shift();

let rope = input.sort((a, b) => a - b);

let answer = 0;

while(rope.length > 0){
let min = rope[0];
let max = rope.length;
answer = min*max>answer ?  min*max : answer;
rope.shift();
}

console.log(answer);