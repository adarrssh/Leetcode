
function nSquareSolution(nums) {
    let max = 1
    const n = nums.length
    const dp = new Array(n).fill(1)

    for (let i = 0; i < n; i++) {
        for (let prev = 0; prev < i; prev++) {
            if (nums[prev] < nums[i]) {
                dp[i] = Math.max(dp[i], 1 + dp[prev])
            }
        }
        max = Math.max(max, dp[i])
    }

    return max
}

// print lis 
// create a hash array to trace back 

function printLIS(nums) {
    let max = 1
    const n = nums.length
    let lastIndex = 0
    const dp = new Array(n).fill(1)
    const hash = new Array(n).fill().map((_c,index)=> index)

    for (let i = 0; i < n; i++) {
        for (let prev = 0; prev < i; prev++) {
            if (nums[prev] < nums[i] && 1 + dp[prev] > dp[i]) {
                dp[i] = Math.max(dp[i], 1 + dp[prev])
                hash[i] = prev
            }
        }

        if (dp[i] > max) {
            max = dp[i]
            lastIndex = i
        }
    }

    let lis  = []
    lis.push(nums[lastIndex])
    // li - 3
    // index - 1
    while(hash[lastIndex] !== lastIndex){
        lastIndex = hash[lastIndex]
        lis.push(nums[lastIndex])
    }

    return lis.reverse().join(" ")
}
//  0   1  2   3  4   5
// [ 5, 4, 11, 1, 16, 8]
// [ 1, 1, 2,  1,  3, 2]
// [ 0, 1, 0,  3,  2, 0] hash

console.log(printLIS([5,4,11,1,16,8]))

function getMaximumProfit(Arr) {
    const n = Arr.length;

    // Recursive function to calculate the maximum profit
    function getAns(ind, buy) {
        // Base case
        if (ind === n) {
            return 0;
        }


        let profit;

        if (buy === 0) { // We can buy the stock
            profit = Math.max(
                0 + getAns(ind + 1, 0),     // Don't buy
                -Arr[ind] + getAns(ind + 1, 1)  // Buy
            );
        }

        if (buy === 1) { // We can sell the stock
            profit = Math.max(
                0 + getAns(ind + 1, 1),  // Don't sell
                Arr[ind] + getAns(ind + 1, 0)  // Sell
            );
        }

        return  profit;
    }

    if (n === 0) {
        return 0;
    }

    // Calculate and return the maximum profit
    const ans = getAns(0, 0);
    return ans;
}

// Main function
function main() {
    const n = 6;
    const Arr = [7, 1, 5, 3, 6, 4];

    // Calculate the maximum profit
    const maxProfit = getMaximumProfit(Arr);

    console.log("The maximum profit that can be generated is", maxProfit);
}

// Call the main function to start the program
main();