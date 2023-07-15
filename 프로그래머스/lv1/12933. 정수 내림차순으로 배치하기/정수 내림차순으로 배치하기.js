function solution(n) {
    let answer = String(n);
    let arr = answer.split('');
    arr = arr.sort((a, b) => b - a).join('');
    return Number(arr);
}