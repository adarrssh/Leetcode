// 123. Best Time to Buy and Sell Stock III
// Solved
// Hard
// Topics
// Companies
// You are given an array prices where prices[i] is the price of a given stock on the ith day.

// Find the maximum profit you can achieve. You may complete at most two transactions.

// Note: You may not engage in multiple transactions simultaneously (i.e., you must sell the stock before you buy again).

 

// Example 1:

// Input: prices = [3,3,5,0,0,3,1,4]
// Output: 6
// Explanation: Buy on day 4 (price = 0) and sell on day 6 (price = 3), profit = 3-0 = 3.
// Then buy on day 7 (price = 1) and sell on day 8 (price = 4), profit = 4-1 = 3.


var maxProfit = function(prices) {
    const n = prices.length
    const dp = new Array(n).fill(null).map(() =>
        new Array(2).fill(null).map(() =>
            new Array(3).fill(-1)
        )
    );

    return solve(0,1,2)

    function solve(index,buy,cap){
        if(index === n || cap === 0){
            return 0
        }

        if(dp[index][buy][cap]!== -1) return dp[index][buy][cap]
        let profit
        if(buy === 1){
            profit = Math.max(
                -prices[index] + solve(index+1,0,cap),
                0 + solve(index+1,1,cap)
            )
        }else{
            profit = Math.max(
                prices[index] + solve(index+1,1,cap-1),
                0 + solve(index+1,0,cap)
            )
        }

        dp[index][buy][cap] = profit
        return dp[index][buy][cap]
    }
};