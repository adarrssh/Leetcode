// const nums = [30, 20, 50, 10, 40]
const nums = [10, 20, 30, 10]
const n = nums.length

// index == 0
function recusrion(index,n){
    if(index === n-1) return 0

    let left = recusrion(index+1,n) + Math.abs(nums[index] - nums[index+1])
    let right = Infinity

    if(index + 2 <n){
        right = recusrion(index+2,n) + Math.abs(nums[index] - nums[index+2])
    }

    return Math.min(left,right)
}

// const dp = new Array(n).fill(-1)
function memoization(index,n){
    if(index === n-1) return 0

    if(dp[index] !== -1) return dp[index]

    let left = recusrion(index+1,n) + Math.abs(nums[index] - nums[index+1])
    let right = Infinity

    if(index + 2 <n){
        right = recusrion(index+2,n) + Math.abs(nums[index] - nums[index+2])
    }

    dp[index] = Math.min(left,right)
    return dp[index]
}

// tabulation , n-1 -> 0

function tabulation(nums,n){
    const dp = new Array(n).fill(0)
    dp[n-1] = 0
    dp[n-2] = Math.abs(nums[n-2] - nums[n-1] )

    for(let i = n-3 ; i>=0 ; i--){

        dp[i] = Math.min(

            Math.abs(dp[i+1] + Math.abs(nums[i] - nums[i+1])),
            Math.abs(dp[i+2] + Math.abs(nums[i] - nums[i+2]))

        )
    }

    return dp[0]
}

