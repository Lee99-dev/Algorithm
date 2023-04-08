function solution(n, k) {
    var answer = 0;
    let drink = 0;
    
    //음료수는 k-drink로 계산
    
    //n * 12000; 
    
    if(n >=10){
     drink =  Math.floor(n / 10);
    }
    
    k -=drink;
    
    answer = n * 12000 + k * 2000;
    
    return answer;
}