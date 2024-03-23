
function subsetSumToK(n, k, arr) {
    // Create a 2D array 'dp' to memoize subproblem results
    const dp = new Array(n);
    for (let i = 0; i < n; i++) {
        dp[i] = new Array(k + 1).fill(false);
    }

    // Base case: If the target is 0, an empty subset is always a valid solution
    for (let i = 0; i < n; i++) {
        dp[i][0] = true;
    }

    
    dp[0][arr[0]] = true

    // Fill the dp array using dynamic programming
    for (let ind = 1; ind < n; ind++) {
        for (let target = 1; target <= k; target++) {
            // Check if the current element can be included in the subset
            const notTaken = dp[ind - 1][target];
            const taken = arr[ind] <= target ? dp[ind - 1][target - arr[ind]] : false;
            dp[ind][target] = notTaken || taken;
        }
        
    }

    // The final result is stored in dp[n-1][k]
    return dp[n - 1][k];
}

// Main function
function main() {
    const arr = [1, 2, 3, 4];
    const k = 11;
    const n = arr.length;

    if (subsetSumToK(n, k, arr)) {
        console.log("Subset with given target found");
    } else {
        console.log("Subset with given target not found");
    }
}

// Call the main function to start the program
main();
