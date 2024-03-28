// Input: s = "zzazz"
// Output: 0

// Input: s = "mbadm"
// Output: 2


// memoization
var minInsertions = function(s) {
    const s2 = reverseString(s)
    const m = s.length
    const n = s2.length
    
    const dp = new Array(m).fill().map(()=>new Array(m).fill(-1))

    const lengthOfLongestPalindrome =  solve(m-1,n-1)
    // note
    return m-lengthOfLongestPalindrome

    function solve(index1, index2){
        if(index1 < 0 || index2 < 0){
            return 0 
        }

          if(dp[index1][index2] !== -1){
            return dp[index1][index2]
        }

        if(s[index1] === s2[index2]){
            dp[index1][index2] = 1 + solve(index1-1,index2-1)
            return dp[index1][index2]
        }else{
             dp[index1][index2] =  Math.max(
                solve(index1,index2-1),
                solve(index1-1,index2) )

                return  dp[index1][index2]
            
        }
    }

    function reverseString(str) {
        var newString = "";
        for (var i = str.length - 1; i >= 0; i--) {
            newString += str[i];
        }
        return newString;
    }
};


/**
 * @param {string} s
 * @return {number}
 */
var minInsertions = function(s) {
    const s2 = reverseString(s)
    const n1 = s.length
    const n2 = s2.length
    const dp = new Array(n1+1).fill().map(()=> new Array(n2+1).fill(0))

    for(let i = 1 ; i<=n1; i++){
        for(let j = 1 ; j<=n2; j++){
            if(s[i-1] === s2[j-1]){
                dp[i][j] = 1 + dp[i-1][j-1]
            }else{
                dp[i][j] = Math.max(dp[i-1][j],dp[i][j-1])
            }
        }
    }

    // note
    return n1 - dp[n1][n2]

    function reverseString(s){
        return s.split("").reverse().join("")
    }
};