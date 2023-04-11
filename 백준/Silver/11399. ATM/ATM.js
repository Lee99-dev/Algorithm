let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let n = Number(input[0]);
let p = input[1].split(' ').map(Number);

p.sort((a,b) => a - b);
let answer = 0;
let time = 0;
for(let i = 0; i < n; i++){
//이 경우 1,2,3,4,5 차례로 돌아감

    time +=p[i];
    answer += time;
}

console.log(answer);