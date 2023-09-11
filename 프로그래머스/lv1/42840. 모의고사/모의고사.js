function solution(answers) {
    let answer = [];
    let arr1 = [1, 2, 3, 4, 5];
    let arr2 = [2, 1, 2, 3, 2, 4, 2, 5]
    let arr3 = [ 3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

    let count1 = answers.filter((a,i)=> a === arr1[i%arr1.length]).length;
    let count2 = answers.filter((a,i)=> a === arr2[i%arr2.length]).length;
    let count3 = answers.filter((a,i)=> a === arr3[i%arr3.length]).length;
    
    let max = Math.max(count1,count2,count3);

    if (count1 === max) answer.push(1);
    if (count2 === max) answer.push(2);
    if (count3 === max) answer.push(3);


    return answer;
}
