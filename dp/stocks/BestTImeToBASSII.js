// You are given an integer array prices where prices[i] is the price of a given stock on the ith day.

// On each day, you may decide to buy and/or sell the stock. You can only hold at most one share of the stock at any time. However, you can buy it then immediately sell it on the same day.

// Find and return the maximum profit you can achieve.

 

// Example 1:

// Input: prices = [7,1,5,3,6,4]
// Output: 7
// Explanation: Buy on day 2 (price = 1) and sell on day 3 (price = 5), profit = 5-1 = 4.
// Then buy on day 4 (price = 3) and sell on day 5 (price = 6), profit = 6-3 = 3.
// Total profit is 4 + 3 = 7.


var maxProfit = function(prices) {
    const n = prices.length 
    const dp = new Array(n).fill().map(()=> new Array(2).fill(-1))

    return solve(0,0)

    function solve(index,buy){
        if(index === n) return 0

        if(dp[index][buy] !== -1) return dp[index][buy]
        let profit

        // buy
        if(buy === 0){
            profit = Math.max(
                -prices[index] + solve(index+1,1),
                solve(index+1,0)
            )
        }

        // sell
        if(buy === 1){
            profit = Math.max(
                prices[index] + solve(index+1,0),
                solve(index+1,1)
            )
        }
        
        dp[index][buy] = profit
        return profit
    }
};

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    const n = prices.length 
    const dp = new Array(n+1).fill().map(()=> new Array(2).fill(0))

  
    for(let index = n-1 ; index >= 0 ; index--){
        for( let buy = 0 ; buy<=1 ; buy++){

            // buy
            if(buy === 0){
                dp[index][buy] = Math.max(
                    -prices[index] + dp[index+1][1],
                    dp[index+1][0]
                )
            }

            // sell
            if(buy === 1){
                dp[index][buy] = Math.max(
                    prices[index] + dp[index+1][0],
                    dp[index+1][1]
                )
            }
        }
    }

    return dp[0][0]        
 
};