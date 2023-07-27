function solution(n, m) {
    let answer = [];
    
    let max = 0;
    
    let big = n > m ? n : m;
    
    for(let i = 1; i < big; i++){
        if( n % i === 0 && m % i === 0){
            max =i;
        }
        

    }
    
        let min = n * m / max;
        
        answer.push(max);
        answer.push(min);
    
        return answer;
}