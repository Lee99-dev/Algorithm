function solution(n, m, section) {
    let answer = 0;
    let fill = 0;
    
    for(let i of section){
        if(i < fill) continue;
        
        fill = i + m;
        answer++;
    }
    
    return answer;
    
    
}

//n개의 구역
//m 크기의 롤러
//칠해야 하는 section
//최소 색칠 횟수 result