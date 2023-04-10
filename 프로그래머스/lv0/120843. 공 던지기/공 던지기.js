function solution(numbers, k) {
    let answer = 0;
    
    
    let count = 1;
    for(let i = 0 ; ; i+=2){
        i %= numbers.length;
        answer = numbers[i];
        
        if(count === k) return answer;
            
        count +=1;
    }
    
    
    
    return answer;
}