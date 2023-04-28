function solution(array, n) {
    let answer = 0;
    let num = 101;
    
    let min = array.sort((a,b) => a - b);
    
    for(let i = 0; i < min.length; i++){
        let item = min[i];
        if(num > Math.abs(n - item)){
            num = Math.abs(n - item);
            answer = item;
        }
    }
    return answer;
}