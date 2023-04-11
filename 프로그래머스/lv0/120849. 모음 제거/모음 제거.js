function solution(my_string) {
    let answer = '';
    
    const vowel = ['a','e','i','o','u'];
    
    for(let i =0; i<my_string.length; i++){
        
        let isVowel = false;
        for(let j = 0; j<vowel.length; j++){
            if(my_string[i] === vowel[j]){
                isVowel = true;
                break;
            }
        }
        
        if(isVowel) continue;
        answer += my_string[i];
        
    }
    
    return answer;
}