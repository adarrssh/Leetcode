function lcs(s1, s2) {
    const n = s1.length;
    const m = s2.length;

    const dp = new Array(n + 1).fill(0).map(() => new Array(m + 1).fill(0));

    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= m; j++) {
           if(s1[i-1] === s2[j-1]){
             dp[i][j] = 1 + dp[i-1][j-1]
           }else{
            dp[i][j] = Math.max(dp[i-1][j],dp[i][j-1])
           }
        }
    }

    let len = dp[n][m];
    let i = n;
    let j = m;

    let index = len - 1;
    let str = "";
    for (let k = 1; k <= len; k++) {
        str += "$"; // dummy string
    }

    while (i > 0 && j > 0) {
        if(s1[i-1] === s2[j-1]){
            str = str.slice(0,index) + s1[i-1] + str.slice(index+1)
            index--
            i--
            j--
        }else if(dp[i-1][j] > dp[i][j-1]) {
            i--
        }else{
            j--
        }
    }
    console.log("The Longest Common Subsequence is " + str);
}

const s1 = "abcde";
const s2 = "bdgek";

lcs(s1, s2);
