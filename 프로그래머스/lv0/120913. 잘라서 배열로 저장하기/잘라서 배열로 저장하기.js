function solution(my_str, n) {
    let answer = [];
    let temp = '';
    for(let i = 0; i<my_str.length; i++){
        let j = my_str[i];
        temp +=j;
        if( i % n === n-1){
            answer.push(temp);
            temp = '';
        }
    }
    if(temp){
        answer.push(temp);
    }
    return answer;
}