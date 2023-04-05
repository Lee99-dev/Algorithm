let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
                                                           
let n = Number(input[0]);
let arr = input[1].split(' ').map(Number);

let setArr = [...new Set(arr)]; //중복 제거
setArr.sort((a, b) => a - b); //오름차순 정렬

//매핑
let myMap = new Map();
for (let i = 0; i < setArr.length; i++){
    myMap.set(setArr[i], i);
}

let answer ="";
for (x of arr) answer += myMap.get(x) + " ";
console.log(answer);