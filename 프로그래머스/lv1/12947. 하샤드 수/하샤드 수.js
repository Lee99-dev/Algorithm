function solution(x) {
    let str = String(x);
    let arr = str.split('');
    let num = 0;
    
    for(let i = 0; i <arr.length; i++){
       num += Number(arr[i]);
    }
    if(x % num === 0) {
        return true
    }
    if(x % num !== 0) {
        return false
    }
    
}