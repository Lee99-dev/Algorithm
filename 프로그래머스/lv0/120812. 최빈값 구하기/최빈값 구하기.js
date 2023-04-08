function solution(array) {
    let answer = 0;
    let sortedArray = array.sort((a, b) => a - b);

    
    let modeNum = -1; //최빈값
    let modeRepeat = 0; //최빈값이 몇 번 반복되었는가
    let repeatCnt = 0; //지금 이 숫자가 몇 번 반복되었는가
    let beforeNum = -1; //이전 숫자
    
    let dup = false; //최빈값 중복여부
    
    let cnt  = 0;
    while(cnt < array.length){
        if(beforeNum !== array[cnt]){
            repeatCnt = 1;
        } else {
            repeatCnt = repeatCnt +1;
        }
        
        //현재 숫자가 반복된 숫자와 최빈값이 반복된 숫자가 동일할 때
        if(repeatCnt === modeRepeat) {
            //그리고 최빈값과 현재 숫자가 동일하지 않을 때 
            if(modeNum!==array[cnt]){
                dup = true;
            }
        }
        
        if (repeatCnt > modeRepeat){
            modeNum = array[cnt];
            modeRepeat = repeatCnt;
            dup = false;
        }
        
        beforeNum = array[cnt];
        cnt = cnt +1;
        
    }
    
    answer = modeNum;
    
    if(dup) return -1;
    return answer;
}