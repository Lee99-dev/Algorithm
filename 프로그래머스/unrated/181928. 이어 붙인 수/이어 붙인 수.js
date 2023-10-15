function solution(num_list) {
    let odd = num_list.filter(v =>(v % 2 === 1))
    let even = num_list.filter(v =>(v % 2 === 0))
    
    return parseInt(odd.join('')) + parseInt(even.join(''));
}