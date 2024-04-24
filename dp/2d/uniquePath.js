/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    function solve(m, n, dp) {

        for(let i = 0;i<m;i++){

            for(let j = 0; j<n; j++){
            
            // this step is important
            if(i == 0 && j == 0) continue
            let up = 0
            let left = 0

            if(i>0){
                up = dp[i-1][j]
            }

            if(j>0){
                left = dp[i][j-1]
            }

            dp[i][j] = up+left                       
            }
        }

        return dp[m-1][n-1]
    }

    const dp = new Array(m);

    for (let i = 0; i < m; i++) {
        const row = new Array(n).fill(-1);
        dp[i] = row;
    }

    dp[0][0] = 1
    return solve(m, n, dp);
};