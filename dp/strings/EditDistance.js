// Given two strings word1 and word2, return the minimum number of operations required to convert word1 to word2.

// You have the following three operations permitted on a word:

// Insert a character
// Delete a character
// Replace a character


// Example 1:

// Input: word1 = "horse", word2 = "ros"
// Output: 3
// Explanation: 
// horse -> rorse (replace 'h' with 'r')
// rorse -> rose (remove 'r')
// rose -> ros (remove 'e')
// Example 2:

// Input: word1 = "intention", word2 = "execution"
// Output: 5
// Explanation: 
// intention -> inention (remove 't')
// inention -> enention (replace 'i' with 'e')
// enention -> exention (replace 'n' with 'x')
// exention -> exection (replace 'n' with 'c')
// exection -> execution (insert 'u')



// replace 
// horse , ros -> rorse 
// i-1,j-1

// delete
// horse , ros -> orse, ros
// i-1,j

// insert 
// horse , ros -> rhorse , ros 
// i , j-1




var minDistance = function (word1, word2) {
    const n = word1.length;
    const m = word2.length;
    const dp = new Array(n).fill(null).map(() => new Array(m).fill(-1));

    // Call the recursive utility function
    return editDistanceUtil(word1, word2, n - 1, m - 1, dp);

    function editDistanceUtil(S1, S2, i, j, dp) {

        if (i < 0) {
            return j + 1;
        }
        if (j < 0) {
            return i + 1;
        }

        if (dp[i][j] !== -1) {
            return dp[i][j];
        }

        if (S1[i] === S2[j]) {
            return dp[i][j] = editDistanceUtil(S1, S2, i - 1, j - 1, dp);
        }


        return (dp[i][j] = 1 + Math.min(
            // replace word
            editDistanceUtil(S1, S2, i - 1, j - 1, dp),
            Math.min(
                // delete word 
                editDistanceUtil(S1, S2, i - 1, j, dp),
                // insert
                editDistanceUtil(S1, S2, i, j - 1, dp)
            )
        ));
    }
};



var minDistance = function(word1, word2) {

    const n = word1.length;
    const m = word2.length;
    const S1 = word1
    const S2 = word2

    // Create a 2D array to store dynamic programming values
    const dp = new Array(n + 1).fill(null).map(() => new Array(m + 1).fill(0));

    // Initialize the first row and first column
    for (let i = 0; i <= n; i++) {
        dp[i][0] = i;
    }
    for (let j = 0; j <= m; j++) {
        dp[0][j] = j;
    }

    // Fill the dp array using dynamic programming
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= m; j++) {
            if (S1[i - 1] === S2[j - 1]) {
                // If the characters at the current positions are the same, no operation is needed
                dp[i][j] = dp[i - 1][j - 1];
            } else {
                // Minimum of three choices:
                // 1. Substitute a character in the first string with a character in the second string
                // 2. Delete a character from the first string
                // 3. Insert a character into the first string
                dp[i][j] = 1 + Math.min(
                    dp[i - 1][j - 1],
                    Math.min(
                        dp[i - 1][j],
                        dp[i][j - 1]
                    )
                );
            }
        }
    }

    // The result is stored in the bottom-right cell of the dp array
    return dp[n][m];

};