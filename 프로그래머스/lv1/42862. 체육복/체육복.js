function solution(n, lost, reserve) {
    
  const lostFilter = lost.filter(el => !reserve.includes(el));
  const reserveFilter = reserve.filter(el => !lost.includes(el));
  
  let answer = n - lostFilter.length;
    
  lostFilter.sort((a, b) => a - b);
  reserveFilter.sort((a, b) => a - b);
  
  for(let reserveNum of reserveFilter) {
    const right = reserveNum + 1;
    const left = reserveNum - 1;
    
      
    if(lostFilter.includes(left)) {
      lostFilter.splice(lostFilter.indexOf(left), 1);
      answer++;
    } else if(lostFilter.includes(right)) {
      lostFilter.splice(lostFilter.indexOf(right), 1);
      answer++;
    }
  }
  return answer;
}