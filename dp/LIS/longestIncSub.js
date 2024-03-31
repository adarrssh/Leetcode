// Given an integer array nums, return the length of the longest strictly increasing 
// subsequence
// .

 

// Example 1:

// Input: nums = [10,9,2,5,3,7,101,18]
// Output: 4
// Explanation: The longest increasing subsequence is [2,3,7,101], therefore the length is 4.


// dp[index][prevIndex]
// shifted the index to 1 , so that we can store -1 prevIndex
const nums = [0,1,0,3,2,3]
const n = nums.length
const dp = new Array(n).fill().map(()=> new Array(n+1).fill(-1))
var lengthOfLIS = function(nums) {
    
    const n = nums.length
    return solve(0,-1)

    function solve(index,prevIndex){
        if(index === n){
            return 0
        }

        if(dp[index][prevIndex+1] !== -1) return dp[index][prevIndex+1]
        const notTake = 0 + solve(index+1,prevIndex)
        let take = 0

        if( prevIndex === -1 ||  nums[index] > nums[prevIndex]){
            take = 1 + solve(index+1,index)
        }

        dp[index][prevIndex+1] = Math.max(notTake,take)
        return  dp[index][prevIndex+1]
    }
};


var lengthOfLIS = function(nums) {
    const n = nums.length

    const dp = new Array(n+1).fill(null).map(()=>new Array(n+1).fill(0))

    for(let index = n-1; index>=0; index--){
        for(let prev = index-1; prev >=-1 ; prev--){
            let len = 0 + dp[index+1][prev+1]

            if(prev === -1 || nums[index]> nums[prev]){
                len = Math.max(len, 1 + dp[index+1][index+1])
            }

            dp[index][prev+1] = len 
        }
    }


    return dp[0][0]
    
};