function solution(numer1, denom1, numer2, denom2) {
   
    

    let denom = numer1 * denom2 + numer2 * denom1;
    
 
    let num = denom1 * denom2;

    let max =1;
    
   
    for(let i =1; i<= denom; i++){
        if(denom%i === 0 && num%i===0){
            max = i
        }
    }
    
   
    
    return [denom/max, num/max]
}
