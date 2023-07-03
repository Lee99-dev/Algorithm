function solution(array) {

    
    
    
    let answer = 0;
    
    for(let i = 0; i<array.length; i++){
        let j = String(array[i])
        for(let k = 0; k<j.length; k++){
            let l = j[k]
            if ( l === '7'){
                answer++;
            }
        }
    }
    
    return answer;
}