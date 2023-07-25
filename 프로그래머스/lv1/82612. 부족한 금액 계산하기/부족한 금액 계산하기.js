function solution(price, money, count) {
    let num = 0;
    
    let answer = 0;
    
    for(let i = 1; i <= count; i++){
        num += i * price;
    }
    
    if(num > money){
        answer = num - money;
    }else{
        answer = 0;
    }

    return answer;
}