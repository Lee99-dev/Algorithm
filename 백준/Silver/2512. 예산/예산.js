let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
                                                           
let n = Number(input[0].split(' ')[0]);
let arr = input[1].split(' ').map(Number);
let m = Number(input[2]);

let left = 1;
let right = arr.reduce((a, b) => Math.max(a, b));

let answer = 0;

while (left <= right) {
let mid = parseInt((left + right) / 2);
let total = 0;
for (x of arr) {
total += Math.min(mid, x);
}

if(total <= m) {
answer = mid;
left = mid + 1;
}else {
right = mid - 1;
}
}

console.log(answer);

