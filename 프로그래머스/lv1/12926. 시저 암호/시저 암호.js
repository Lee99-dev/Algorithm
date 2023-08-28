function solution(s, n) {
    let answer= '';

    let upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let lower = "abcdefghijklmnopqrstuvwxyz";
    
    for(var i =0; i <s.length; i++){
        let alpha = s[i];
        if(alpha == ' ') {
            answer += ' '; 
            continue;
        }
        
        let list = upper.includes(alpha) ? upper : lower;

        let num = list.indexOf(alpha) + n;
        
        if(num >= list.length) num-= list.length;
        
        answer += list[num];
        
    }
    return answer;
}