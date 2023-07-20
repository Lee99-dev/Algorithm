function solution(numbers) {
    let answer = 0;
    let arr = [];
    for(let i = 1; i<9; i++){
        if(numbers.includes(i) === false) {
            arr.push(numbers[i]);
        }
        
    }
    
    console.log(arr);
    return answer;
}