function solve (A, B){
    const map = new Map()
    
    map.set(0,1)
    
    let xor = 0
    let count = 0
    for(let element of A){
        xor = xor ^ element;
        let rem = xor ^ B;
        
        if(map.has(rem)){
            count += map.get(rem)
        }
        
        map.set(element, (map.get(element) || 0) + 1)
    }
    
    return count
}

const arr = [4,2,2,6,4]
const k = 6

console.log(solve(arr,k))