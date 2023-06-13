function solution(num, k) {
    const arr = String(num);
   
    for(let i = 0; i<arr.length; i++){
        const j = arr[i];
        if(j == k ) return i+1;
    }
    
   
    
    return -1;
}