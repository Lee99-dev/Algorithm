function solution(a, b, n) {
    let answer = 0;
    while(n >= a) {
        let coke = Math.floor(n / a) * b;
        answer += coke;
        n = coke + (n % a);
    }
    return answer;
}