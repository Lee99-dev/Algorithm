function solution(arr, divisor) {
    var answer = [];
    for(let i = 0; i<arr.length; i++){
        if(arr[i] % divisor === 0) answer.push(arr[i]);
    }

    answer = answer.sort((a, b) => a-b);
    
    if(answer.length === 0) {
        return [-1];
    }else {
    return answer;
    }
    
}