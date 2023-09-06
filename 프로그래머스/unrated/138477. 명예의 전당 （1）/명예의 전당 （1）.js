function solution(k, score) {
    let arr = [];
    let answer = [];
    
    for(let i = 0; i < score.length; i++){
        
        arr.push(score[i]);
        
        if(arr.length >= k){
            arr.sort((a, b) => b - a);
            answer.push(arr[k - 1]);
            continue;
        }
        
        answer.push(Math.min(...arr));
    }
    
    return answer;
}