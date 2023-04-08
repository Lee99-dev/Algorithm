function solution(numer1, denom1, numer2, denom2) {
   
    //분자
    let numer = numer1 * denom2 + numer2 * denom1;
    
    //분모    
    let denom = denom1 * denom2;
    
    
    let max =1;
    
   
    for(let i =1; i<= denom; i++){
        if(denom%i === 0 && numer%i===0){
            max = i
        }
    }
    
   
    
    return [numer/max, denom/max]
}
