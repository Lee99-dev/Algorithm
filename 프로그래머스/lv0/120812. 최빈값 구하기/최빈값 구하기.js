
function solution(array) {
    let map = new Map();
    let count = new Array;
    let mod = 0;
    for(let i of array){
        if(!map.has(i)) map.set(i, 0);
        if(map.has(i)) map.set(i, map.get(i) +1);
        while(map.get(i) > mod) mod++;
    }
    for(let[k, v] of map){
        if ( v === mod) count.push(k)
    }
    
    return count.length === 1 ? count[0] : -1;
}