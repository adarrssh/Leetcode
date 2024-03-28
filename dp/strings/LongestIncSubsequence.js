// Input: text1 = "abcde", text2 = "ace" 
// Output: 3  


// memoization
var longestCommonSubsequence = function(text1, text2) {
    const m = text1.length
    const n = text2.length

    const dp = new Array(m).fill().map(()=>new Array(n).fill(-1))

    return solve(m-1,n-1)

    function solve(index1, index2){
        if(index1 < 0 || index2 < 0) {
            return 0
        }

        if(dp[index1][index2] !== -1){
            return dp[index1][index2]
        }

        if(text1[index1] === text2[index2]){
            dp[index1][index2] = 1 + solve(index1-1,index2-1)
            return dp[index1][index2]
        }else{
            dp[index1][index2] = Math.max(solve(index1,index2-1), solve(index1-1,index2))
            return dp[index1][index2]
        }


    }
};


// tabulation
var longestCommonSubsequence = function(text1, text2) {
    const m = text1.length
    const n = text2.length
    const dp = new Array(m+1).fill().map(()=> new Array(n+1).fill(0))

    for(let index1 = 1 ; index1 <= m ; index1++){
        for(let index2 = 1 ; index2 <= n ; index2++){
            // note this line , text1[index1-1]
            if(text1[index1-1] === text2[index2-1]){
                dp[index1][index2] = 1 + dp[index1-1][index2-1]
            }else{
                dp[index1][index2] = Math.max(
                    dp[index1-1][index2],
                    dp[index1][index2-1]
                )
            }
        }
    }

    return dp[m][n]

};