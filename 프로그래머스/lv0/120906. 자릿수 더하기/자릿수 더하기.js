function solution(n) {
    let answer = 0;
    const strArr = String(n);
    
    for(let i = 0; i<strArr.length; i++) answer +=Number(strArr[i]);
    
    return answer;
}