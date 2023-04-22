function solution(my_string) {
    let answer = '';
    for(let i =0; i<my_string.length; i++){
        let item = my_string[i];
        
        let tf = false;
        for(let j =0; j<answer.length; j++){
            if(item === answer[j]){
                tf = true;
                break;
            }
        }
        if(!tf) answer +=item;
        
        
    }
    
    return answer;
}