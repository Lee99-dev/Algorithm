let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

//입력 1번째 줄
let n = Number(input[0]);

//입력 2번째 줄
//map(Number)로 배열의 모든 값을 숫자로 변환해서 저장한다. 
let arr = input[1].split(' ').map(Number);

let min = 1000001;
let max = -1000001;

for(let i = 0; i < n; i++){
    
    if(min > arr[i]) min = arr[i];
    if(max < arr[i]) max = arr[i];
    
}
console.log(min, max);
