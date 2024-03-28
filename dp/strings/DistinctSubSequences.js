// Given two strings s and t, return the number of distinct subsequences of s which equals t.

// The test cases are generated so that the answer fits on a 32-bit signed integer.

 

// Example 1:

// Input: s = "rabbbit", t = "rabbit"
// Output: 3
// Explanation:
// As shown below, there are 3 ways you can generate "rabbit" from s.
// rabbbit
// ---- --
// rabbbit
// -- ----
// rabbbit
// --- ---

// Input: s = "babgbag", t = "bag"
// Output: 5
// Explanation:
// As shown below, there are 5 ways you can generate "bag" from s.
// babgbag
// babgbag
// babgbag
// babgbag
// babgbag

/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var numDistinct = function(s, t) {
    
    const m = s.length
    const n = t.length

    const dp = new Array(m).fill().map(()=> new Array(n).fill(-1))

    return solve(m-1,s,n-1,t)

    function solve(index1, s, index2, t){
        // edge case 
        if(index2<0) return 1
        if(index1<0) return 0
        if(dp[index1][index2] !== -1) return dp[index1][index2]
        if(s[index1] === t[index2]){
            // note here  
            return dp[index1][index2] = solve(index1-1,s,index2-1,t) + solve(index1-1,s,index2,t)
        }

        return dp[index1][index2] = solve(index1-1,s,index2,t)
    }
};


// see memoization for better understanding
var numDistinct = function(s, t) {
    const prime = 1e9 + 7;

    const n = s.length
    const m = t.length
    const s1 = s
    const s2 = t
const dp = new Array(n + 1).fill(null).map(() => new Array(m + 1).fill(0));

    for (let i = 0; i <= n; i++) {
        dp[i][0] = 1;
    }

    for (let i = 1; i <= m; i++) {
        dp[0][i] = 0;
    }

    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= m; j++) {
            if (s1[i - 1] === s2[j - 1]) {
                // imp
                dp[i][j] = (dp[i - 1][j - 1] + dp[i - 1][j]) % prime;
            } else {
                // imp
                dp[i][j] = dp[i - 1][j];
            }
        }
    }

    return dp[n][m];
};