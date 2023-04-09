function solution(hp) {

    let five = 0;
    let three = 0;
    

    if(hp >=5) {
       five = Math.floor(hp / 5);
        hp = hp % 5;
        
    }
    
    if(hp>=3){
       three = Math.floor(hp / 3);
        hp = hp % 3;
    }
    
   let answer = five + three + hp; 

    
    return answer;
}