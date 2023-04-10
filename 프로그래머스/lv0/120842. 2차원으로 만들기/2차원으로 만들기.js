function solution(num_list, n) {
    let answer = [];
    let temp = [];
    for(let i = 0; i<num_list.length; i++){
        const item = num_list[i];
        temp.push(item);
        if(temp.length === n){
            answer.push(temp);
            temp = [];
            
        }
        
    }
    
    return answer;
}