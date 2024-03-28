// Given a string s, find the longest palindromic subsequence's length in s.

// A subsequence is a sequence that can be derived from another sequence by deleting some or no elements without changing the order of the remaining elements.

const s = "bbbab"
// ans = 4 , bbbb

// s = "cbb" , ans = "bb"


// memoization
// just reverse the strint , cbb , bbc and find the common subsequence
var longestPalindromeSubseq = function(s) {
    const s2 = reverseString(s)
    const text1 = s
    const text2 = s2
    const m = s.length
    const dp = new Array(m).fill().map(()=>new Array(m).fill(-1))

    return solve(m-1,m-1)

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

    function reverseString(str) {
    var newString = "";
    for (var i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}
};