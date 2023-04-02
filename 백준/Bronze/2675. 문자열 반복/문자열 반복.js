let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let t = Number(input[0]); //테스트 케이스 개수

for(let i = 1; i <= t; i++){
    let [r, s] = input[i].split(" ");
    //r = 반복 횟수, s = 문자열
    let answer = "";
    
    for(let j = 0; j <s.length; j++){
        
        answer += s.charAt(j).repeat(r);
    }
    
    console.log(answer);
}