function longestIncreasingSubsequence(arr) {
    const n = arr.length;
    const dp = Array(n).fill(1);
    const hash = Array(n).fill(0).map((_, i) => i);

    for (let i = 0; i < n; i++) {
        for (let prevIndex = 0; prevIndex < i; prevIndex++) {
            if (arr[prevIndex] < arr[i] && 1 + dp[prevIndex] > dp[i]) {
                dp[i] = 1 + dp[prevIndex];
                hash[i] = prevIndex;
            }
        }
    }

    let ans = -1;
    let lastIndex = -1;

    for (let i = 0; i < n; i++) {
        if (dp[i] > ans) {
            ans = dp[i];
            lastIndex = i;
        }
    }

    const temp = [];
    temp.push(arr[lastIndex]);

    while (hash[lastIndex] !== lastIndex) {
        lastIndex = hash[lastIndex];
        temp.push(arr[lastIndex]);
    }

    temp.reverse();

    console.log("The subsequence elements are: " + temp.join(" "));
    console.log(arr)
    console.log(dp)
    console.log(hash)
    return ans;
}

const arr = [10, 9, 2, 5, 3, 7, 101, 18];
console.log("Length of the longest increasing subsequence: " + longestIncreasingSubsequence(arr));
