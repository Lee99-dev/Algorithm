let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
                                                           
let n = Number(input[0]);
let member = [];

for (let i = 1; i <=n; i++){
    let age = Number(input[i].split(' ')[0]);
    let name = input[i].split(' ')[1];
    member.push([age, name]);
}

member.sort((a, b) => a[0] - b[0]);

let answer = "";

for(let x of member) answer += x[0] + " " + x[1] + "\n";
console.log(answer);