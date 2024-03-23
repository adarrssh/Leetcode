const arr = [1,2,5,4,5]
const n = arr.length

const supposedToBeSum = ((n)*(n+1)) /2
const supposedToBeSquareSum = (n*(n+1)*(2*n+1)) /6


let actualSum = 0
let actualSquareSum = 0

for(let i = 0 ; i<n; i++){
    actualSum += arr[i]
    actualSquareSum += arr[i]*arr[i]
}


// x - y = val1
let val1 = actualSum - supposedToBeSum

// x^2 - y^2 = val2
let val2 = actualSquareSum - supposedToBeSquareSum

// (x-y)(x+y) = val2
// x+y = val2 / val1

let xPlusY = val2/val1

let x = (val1 + xPlusY ) / 2
let y = x - val1

console.log(x,y)

