const nums = [3,9,7,3]

function minimumDifferenceTabulation (nums){

    const n = nums.length
    const sum = nums.reduce((total,num)=>(total + num),0)

    const dp = new Array(n).fill().map(()=> new Array(sum+1).fill(-1))

    for(let i = 1 ; i<=sum; i++){
        solve(n-1,i)
    }

    let minSumDiff = Infinity

    for( let i = 1; i<=sum; i++){
        if(dp[n-1][i] === true){
            let otherHalf = sum - i
            const diff = Math.abs(i - otherHalf)
            minSumDiff= Math.min(diff,minSumDiff)
        }
    }   

    return minSumDiff

    function solve(index,target){

        if(target == 0) return true

        if(index === 0){
            if(target === nums[index]) return true
            return false
        }

        if(dp[index][target] !== -1) return dp[index][target]

        let take = false 

        if(nums[index] <= target){
            take = solve(index-1, target - nums[index])
        }

        let notTake = solve(index-1,nums[index])

        return dp[index][target] = notTake || take
    }
};

console.log(minimumDifferenceTabulation(nums))