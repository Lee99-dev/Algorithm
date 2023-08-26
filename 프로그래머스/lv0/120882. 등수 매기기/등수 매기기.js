function solution(score) {
  	let answer = score.map(v=>(v[0] + v[1]) / 2);
    let sorted = answer .slice().sort((a, b) => b - a);
    return answer .map(v => sorted.indexOf(v) + 1);
}