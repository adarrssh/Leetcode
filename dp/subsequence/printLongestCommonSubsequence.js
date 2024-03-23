function lcs(s1, s2) {
    const n = s1.length;
    const m = s2.length;

    // Create a memoization table 'memo' to store computed results
    const memo = Array.from({ length: n + 1 }, () => Array(m + 1).fill(-1));

    // Define a recursive helper function to calculate LCS length
    function calculateLCSLength(i, j) {
        // Base case: if either string reaches the end, return 0
        if (i === 0 || j === 0) {
            return 0;
        }

        // Check if the result is already computed, return if found
        if (memo[i][j] !== -1) {
            return memo[i][j];
        }

        // If characters match, recursively calculate LCS length for the rest of the strings
        if (s1[i - 1] === s2[j - 1]) {
            memo[i][j] = 1 + calculateLCSLength(i - 1, j - 1);
        } else {
            // If characters don't match, LCS length is 0
            memo[i][j] = 0;
        }

        return memo[i][j];
    }

    let ans = 0; // Initialize a variable to store the length of the longest common substring

    // Use nested loops to iterate through the characters of both strings
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= m; j++) {
            // Update 'ans' using the result from the memoized function
            ans = Math.max(ans, calculateLCSLength(i, j));
        }
    }

    // 'ans' now contains the length of the longest common substring
    return ans;
}

// Main function
function main() {
    const s1 = "abcjklp";
    const s2 = "acjkp";

    // Call the lcs function and print the result
    console.log("The Length of Longest Common Substring is " + lcs(s1, s2));
}

// Call the main function to start the program
main();
