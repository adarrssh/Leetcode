// Given two strings word1 and word2, return the minimum number of steps required to make word1 and word2 the same.

// In one step, you can delete exactly one character in either string.

// Input: word1 = "sea", word2 = "eat"
// Output: 2

// Input: word1 = "leetcode", word2 = "etco"
// Output: 4

/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
    const n = word1.length
    const m = word2.length
    const dp = new Array(n+1).fill().map(()=> new Array(m+1).fill(0))

    for(let i = 1;i<=n; i++){
        for( let j = 1; j<=m ;j++){
            if(word1[i-1] === word2[j-1]){
                dp[i][j] = 1 + dp[i-1][j-1]
            }else{
                dp[i][j] = Math.max(dp[i-1][j],dp[i][j-1])
            }
        }
    }

    const k = dp[n][m]

    return (n - k) + (m - k);
};