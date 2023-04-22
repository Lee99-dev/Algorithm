function solution(sides) {
    
    sides.sort((a, b) => a - b);
    
    let answer = 0;
    if(sides[0]+sides[1] > sides[2]) answer = 1;
    else answer = 2;
        
    return answer;
}