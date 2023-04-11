function solution(n) {
    let answer = 0;
    //1. 해당 숫자가 합성수인지 확인하는 조건문
    //2. 1이상 n이하의 모든 합성수 숫자 세기
   
    
    for(let i = 1; i <= n; i++){        
        let count = false; //합성수인지 여부
        for(let j = 2; j< i-1; j++ ){
        if(i % j ===0 ){
            count = true;
        }
        
    }  
        if(count) answer +=1;
        
        
    }
    
    
    
    return answer;
}