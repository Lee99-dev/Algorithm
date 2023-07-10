function solution(x, n) {
    let answer = [];
    let num = x;
    answer.push(x);
    for(let i = 1; i<n; i++){
      num = x + num;
        answer.push(num);
        
    }
        
    return answer;
}