

function facto(i){
    if(i > 1) return i * facto(i-1)
    return i
}


function solution(n) {
   let answer = 0;
    
    for(let i=1; ; i++){
        const result = facto(i);
        if (n <result){
            return i-1;
        }
    }
        
    return answer;
}