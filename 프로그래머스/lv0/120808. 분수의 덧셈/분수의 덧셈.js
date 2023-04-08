function solution(numer1, denom1, numer2, denom2) {
   
    
    //분자
    let num = numer1 * denom2 + numer2 * denom1;
    
    //분모
    let denom = denom1 * denom2;
    
    let cnt = 1;
    
    
    for(let i = 1; i <=denom; i++){
        if(num % i ===0 && denom % i ===0) cnt = i;
    }
   
    
    return [num/cnt, denom/cnt];
}
