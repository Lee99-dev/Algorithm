function solution(a, b) {
    var answer = 0;
    let min =0;
    let max = 0;
    if(b > a){
        min = a;
        max = b;
    }else {
        min = b;
        max = a;
    }
    
    for(let i = min; i <= max; i++){
        answer += i;
    }
    return answer;
}