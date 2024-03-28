
function knapsack(wt, val, n, W) {
    const dp = new Array(n);
    for (let i = 0; i < n; i++) {
      dp[i] = new Array(W + 1).fill(0);
    }
  
    // this is important edge case 
    for (let i = wt[0]; i <= W; i++) {
      dp[0][i] = val[0];
    }
    
    for (let ind = 1; ind < n; ind++) {
      for (let cap = 0; cap <= W; cap++) {
        const notTaken = dp[ind - 1][cap];
  
        let taken = -Infinity;
        if (wt[ind] <= cap) {
          taken = val[ind] + dp[ind - 1][cap - wt[ind]];
        }
  
        dp[ind][cap] = Math.max(notTaken, taken);
      }
    }
    
    return dp[n - 1][W];
  }
  
  // Main function
  function main() {
    const wt = [4, 5,1];
    const val = [1,2,3];
    const W = 4;
    const n = wt.length;
  
    console.log("The Maximum value of items the thief can steal is: " + knapsack(wt, val, n, W));
  }
  
  main();
  