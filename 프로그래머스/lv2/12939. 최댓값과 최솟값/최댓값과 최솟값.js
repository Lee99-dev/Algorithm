function solution(s) {
    let answer = s.split(' ');

    return Math.min(...answer) + ' ' +Math.max(...answer);
}