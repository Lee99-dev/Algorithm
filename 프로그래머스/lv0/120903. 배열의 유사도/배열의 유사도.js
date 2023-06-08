function solution(s1, s2) {
    let answer = 0;
    
    for(let i = 0; i < s1.length; i++){
        let sOne = s1[i];
        for(let j = 0; j < s2.length; j++){
            let sTwo = s2[j];
            if(sOne === sTwo) answer ++;
        }
    }
    
    return answer;
}