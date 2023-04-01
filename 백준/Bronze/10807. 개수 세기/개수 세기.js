let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let n = Number(input[0]);
let arr = input[1].split(' ').map(Number);
let v = Number(input[2]);

let answer = [];

for(let i = 0; i<=n; i++){
    if(arr[i] === v){
        answer.push(arr[i]);
    }
}
                    
console.log(answer.length);