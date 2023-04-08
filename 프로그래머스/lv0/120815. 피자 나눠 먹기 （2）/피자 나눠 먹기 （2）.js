function solution(n) {
    let answer =1;
    
    
    //모두 같은 수의 피자 조각을 먹어야 한다
    //조각(answer * 6)은 n의 배수여야 한다
    //그러니까 answer % n ===0
    
    while ( (answer * 6) % n !==0){
        answer ++;
    }
    
    
    return answer;
}
