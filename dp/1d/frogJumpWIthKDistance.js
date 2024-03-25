const height = [2, 5, 2]
// const height = [10 ,40 ,50 ,20 ,60]


const n = height.length
const k = 1

function recursion(index, nums, n, k) {
    if (index === n - 1) return 0;

    let min = Infinity;

    for (let i = 1; i <= k; i++) {

        if(index +  i <= n-1){
            let jump = recursion(index + i, nums, n, k)  + Math.abs(nums[index] - nums[index+i])
            min = Math.min(min, jump);

        }

    }

    return min;
}

// const dp = new Array(n).fill(-1)
function memoization(index,nums,n,k){
    if(index === n-1) return 0

    if(dp[index] !== -1) return dp[index]
    let min = Infinity

    for(let i = 1 ; i<=k ;i++){
        if(index + i <= n-1){
            let jump = memoization(index+i,nums,n,k) + Math.abs(nums[index] - nums[index+i])
            min = Math.min(min,jump)
        }
    }

    dp[index] =  min 
    return dp[index]
}

function tabulation(nums, n, k) {
    const dp = new Array(n).fill(0);
    dp[n - 1] = 0;

    for (let index = n - 2; index >= 0; index--) {
        let min = Infinity;

        for (let i = 1; i <= k; i++) {
            if (index + i < n) {
                let jump = dp[index + i] + Math.abs(nums[index] - nums[index + i]);
                min = Math.min(min, jump);
            }
        }
        dp[index] = min;
    }

    return dp[0];
}


console.log(tabulation(height,n,k))