let xor = 0
const nums = [1,1,2,6,3,4]
const n = nums.length 

for(let i = 0 ; i<n ; i++){
    xor = xor ^ nums[i]
    xor = xor ^ (i+1)
}

let bitNo = 0

while(1){
    if((xor & (1<<bitNo)) != 0)break;
    bitNo++
}

let zero = 0 
let one = 0

for(let i = 0 ; i<n; i++){
    if((nums[i] & (1<<bitNo)) == 0){
        zero = zero ^ nums[i]
    }else{
        one = one ^ nums[i]
    }
}

for(let i = 1 ; i<=n; i++){
    if((i & (1<<bitNo) ) == 0){
        zero = zero ^ i
    }else{
        one = one ^ i
    }
}

console.log(zero,one)