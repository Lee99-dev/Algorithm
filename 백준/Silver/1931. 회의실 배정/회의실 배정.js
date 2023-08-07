let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let n = Number(input[0]);
let arr = [];
for(let i = 1; i<= n; i++){
    arr.push(input[i].split(' ').map(Number));
}

arr.sort((a, b)=>{
    if (a[1] === b[1]) {
      return a[0] - b[0];
    } else {
      return a[1] - b[1];
    }
});

let answer = 1;
let ch = 0;

for(let i = 1; i< n; i++){
    if(arr[ch][1] <=arr[i][0]){
    ch = i;
    answer++;
        }
    }

console.log(answer);
