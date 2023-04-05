let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
                                                           
let n = Number(input[0]);
let data = [];
for (let i = 1; i<= n; i++){
    data.push(input[i]); //2번째 줄에 입력된 문자열 data 배열에 넣기
}

data = [...new Set(data)]; //집합으로 변환

data.sort((a, b) =>{
    if(a.length != b.length) return a.length - b.length;
    else {
        if(a < b) return -1;
        else if( a > b) return 1;
        else return 0;
    }
    
});

for(let point of data){
    console.log(point);
}