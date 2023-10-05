function solution(s) {
    let answer1 = 0;
    let answer2 = 0;
    
    while(s !== '1'){
        s = s.split('');
        let one = s.filter(v => v === '1').length;
        answer1++;
        answer2 += s.length - one;
        s = one.toString(2);
    }
    return [answer1, answer2];
}