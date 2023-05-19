function solution(my_string) {
    let answer = '';
    
    for(let i = 0; i<my_string.length; i++){
        let j = my_string[i];
        let tf = j <'a';
        if(tf) answer += j.toLowerCase();
        else answer +=j.toUpperCase();
    }
    return answer;
}