
function solution(s) {
    let answer = [];
    let alph = 0;
    let count = 0;
    
    
    for(let i = 0; i < s.length; i++){
        
        if(s[i] === s[alph]){
            count++;
        }
        else {
            count--;
        }  
        if(count === 0) {
            answer.push(s.substring(alph, i+1))
            alph = i+1;
        }
    }
    return answer.join('').length === s.length ? answer.length : answer.length+1;
}