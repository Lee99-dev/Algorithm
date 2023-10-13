function solution(s){
    let answer = [];
    
    for(var i = 0; i < s.length; i++){
        if(answer[answer.length-1] !== s[i]){
            answer.push(s[i]);
        }else{
            answer.pop();
        }
    }
    return answer.length > 0 ? 0:1;
}