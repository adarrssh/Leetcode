const nums = [2,5,1,6,7]
const k = 4

// 4
// 4 5
// 4 3 2 1
// 5 4
// 2 5 1 6 7
// 4 4
// 6 1 2 1
// 5 6
// 1 7 2 9 10
function recursiveSol(nums,k){

    return solve(nums.length-1,k)

    function solve(index,target){
        if(index === 0){
            if(nums[index] === target) {return true}
            return false
        }

        let take = false 

        if(nums[index]<=target){
            take = solve(index-1,target-nums[index])
        }

        let notTake = solve(index-1,target)

        return take ||  notTake
    }
}

function memoization(nums,k){
    const n = nums.length
    // if k = 4 , then you want this arr = [-,-,-,-,-]
    //                                      0 1 2 3 4
    const dp = new Array(n).fill().map(()=> new Array(k+1).fill(-1))
    
    return solve(nums.length-1,k)

    function solve(index,target){

        if(target === 0) return true

        if(index === 0){
            if(nums[index] === target) {return true}
            return false
        }

        if(dp[index][target] !== -1) return dp[index][target]

        let take = false 

        if(nums[index]<=target){
            take = solve(index-1,target-nums[index])
        }

        let notTake = solve(index-1,target)

        dp[index][target] = take || notTake

        return dp[index][target]
    }
}

function tabulation(nums,k){
    const n = nums.length

    const dp = new Array(n).fill().map(()=> new Array(k+1).fill(false))

    for(let i = 0 ; i< n; i++){
        dp[i][0] = true
    }

    dp[0][nums[0]] = true
    for(let index  = 1 ; index < n; index++){
        for(let target = 1 ; target <= k ; target++){

            let notTake = dp[index-1][target]
            let take = false
            
            if(nums[index] <= target){
                take = dp[index-1][target-nums[index]]
            }

            dp[index][target] = notTake || take
        }
    }

    return dp[n-1][k]
}

console.log(tabulation(nums,k))