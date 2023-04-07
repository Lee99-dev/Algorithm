function solution(array) {
    var answer = 0;
    
    var long = parseInt(array.length / 2);
    
    array.sort((a, b) => a-b);
    
    return array[long];
}