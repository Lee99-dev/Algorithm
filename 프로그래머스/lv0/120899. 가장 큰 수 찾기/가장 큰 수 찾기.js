function solution(array) {
   
    
    let num = 0;
    let index = 0;
    
    for(let i = 0; i<array.length; i++){
        let j = array[i];
        if(j > num){
            num = j;
            index = i;
        }
    }

    return [num, index];
}