function solution(age) {
    
    const arr = String(age).split("");
    
    let answer = '';
    
    for(let i = 0; i< arr.length; i++){
        answer += String.fromCharCode(Number(arr[i]) + 97);
        //아스키코드로 a = 97
    }
    return answer;
}

