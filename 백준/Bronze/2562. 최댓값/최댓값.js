let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let seq = 0;
let max = 0;

for (let i = 0; i < 9; i++){
    
    let data = Number(input[i]);
    if(max < data ){
        max = data;
        seq = i;
    }

    
}


console.log(max);
console.log(seq +1);