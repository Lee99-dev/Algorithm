function solution(emergency) {
    let answer = new Array(emergency.length);
    let sortArr = []; //emergency를 정렬할 배열

    //emergency ->  sortArr에 push
    for(let i = 0; i <emergency.length; i++){
        sortArr.push({value:emergency[i], idx : i});
    }
    
    //sortArr 정렬
    sortArr.sort((a,b) => b.value-a.value);

    
    //내림차순으로 정렬된 배열의 idx를 answer에 저장
    for(let i = 0; i<sortArr.length; i++){
        let item = sortArr[i];
        answer[item.idx] = i +1;
        

    }
    
    //key를 리턴?
    return answer;
}