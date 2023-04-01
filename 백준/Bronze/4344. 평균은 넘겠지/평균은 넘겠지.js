let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let c = Number(input[0]); //테스트 케이스 개수
for(let a = 1; a <= c; a++){
let arr = input[a].split(' ').map(Number);
let n = arr[0];
let sum = 0;
for (let j = 1; j <= n; j++){
        sum +=arr[j];
}
let avg = sum/n;
let stu = 0;
for (let i = 1; i<= n; i++)
    if (arr[i] > avg) stu +=1;

    
    console.log(`${(stu / n * 100).toFixed(3)}%`);
    
}
