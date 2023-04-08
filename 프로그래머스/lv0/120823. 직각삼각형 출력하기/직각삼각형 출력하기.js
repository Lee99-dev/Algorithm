const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    
    let star = "";
    let line = Number(input[0]);

    for(let i = 0; i<line; i++){
        for(let j =0; j<=i; j++){
            star += "*";
        }
        
         star += "\n";
    }
    
    console.log(star)
});

