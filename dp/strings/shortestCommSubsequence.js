// Given two strings str1 and str2, return the shortest string that has both str1 and str2 as subsequences. If there are multiple valid strings, return any of them.

// A string s is a subsequence of string t if deleting some number of characters from t (possibly 0) results in the string s.

// Input: str1 = "abac", str2 = "cab"
// Output: "cabac"

// Input: str1 = "aaaaaaaa", str2 = "aaaaaaaa"
// Output: "aaaaaaaa"



var shortestCommonSupersequence = function(str1, str2) {
    let n = str1.length;
    let m = str2.length;
    const dp = new Array(n + 1).fill().map(() => new Array(m + 1).fill(0));

    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= m; j++) {
            if (str1[i - 1] === str2[j - 1]) {
                dp[i][j] = 1 + dp[i - 1][j-1];
            } else {
                dp[i][j] = Math.max(dp[i][j - 1], dp[i - 1][j]);
            }
        }
    }

    let str = "";
    let i = n;
    let j = m;
    while (i > 0 && j > 0) {
        if (str1[i - 1] === str2[j - 1]) {
            str += str1[i - 1];
            i--;
            j--;
        } else if (dp[i - 1][j] > dp[i][j - 1]) {
            str += str1[i - 1];
            i--;
        } else {
            str += str2[j - 1];
            j--;
        }
    }

    while (i > 0) {
        str += str1[i - 1];
        i--;
    }

    while (j > 0) {
        str += str2[j - 1];
        j--;
    }

    // Reverse the string
    let reversedStr = str.split('').reverse().join('');

    return reversedStr;
};