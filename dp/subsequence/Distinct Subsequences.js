
const s = "rabbbit", t = "rabbit"
var numDistinct = function(s, t) {
    const n = s.length
    const m = t.length

    const dp = new Array(n+1).fill(null).map(()=> new Array(m+1).fill(0))

    for(let j = 0 ; j<=n; j++){
        dp[j][0] = 1
    }

    for(let i = 1 ; i<=n ; i++){
        for(let j = 1 ; j<=m ; j++){

        if(s[i-1] === t[j-1]){
            dp[i][j] =  dp[i-1][j-1] + dp[i-1][j]
        }else{

        dp[i][j] = dp[i-1][j]
        }

        }
    }
    console.log(dp)
    return dp[n][m]
};


numDistinct(s,t)

[
//      r   a   b   b   i   t
    [1,  0,  0,  0,  0,  0,  0],
  r [1,  1,  0,  0,  0,  0,  0],
  a [1,  1,  1,  0,  0,  0,  0],
  b [1,  1,  1,  1,  0,  0,  0],
  b [1,  1,  1,  2,  1,  0,  0],
  b [1,  1,  1,  3,  3,  0,  0],
  i [1,  1,  1,  3,  3,  3,  0],
  t [1,  1,  1,  3,  3,  3,  3]


  ]