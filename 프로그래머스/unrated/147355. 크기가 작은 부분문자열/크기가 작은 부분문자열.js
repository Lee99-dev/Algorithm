function solution(t, p) {
    let answer = 0;
    
    for(let i = 0; i< t.length - p.length + 1; i++){
        let slice = t.slice(i, i + p.length); 
        if(slice <= p) {
            answer++;
            }
    }
    return answer;
}