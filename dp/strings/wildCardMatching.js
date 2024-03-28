// Given an input string (s) and a pattern (p), implement wildcard pattern matching with support for '?' and '*' where:

// '?' Matches any single character.
// '*' Matches any sequence of characters (including the empty sequence).
// The matching should cover the entire input string (not partial).


var isMatch = function(s, p) {
    
    let n = s.length
    let m = p.length
    const dp = new Array(n).fill().map(()=>new Array(m).fill(-1))

    return solve(n-1,m-1)

    function solve(index1,index2){
        if(index1 < 0 && index2 < 0) return true

        if(index2 < 0) return false

        if(index1 < 0){
            let onlyAsteriksPresent = true

            while(index2>=0){
                if(p[index2] !== '*'){
                   onlyAsteriksPresent = false
                   break;
                }
                index2--
            }

            return onlyAsteriksPresent
        }

        if(dp[index1][index2] !== -1) return dp[index1][index2]

        if(s[index1] === p[index2] || p[index2] === '?'){
             return dp[index1][index2] = solve(index1-1,index2-1)
        }

        if(p[index2] === '*'){
             return dp[index1][index2] =  solve(index1-1,index2) || solve(index1, index2-1)
        }

        return false

    }
};

var isMatch = function(s, p) {


    const n = p.length;
    const m = s.length;

    const dp = new Array(n+1).fill(null).map(() => new Array(m+1).fill(false));
    dp[0][0] = true
    
    for(let j = 1 ; j<=m; j++){
        dp[0][j] = false
    }
    
    "abc" , "**"
    // read this 
    for (let i = 1; i <= n; i++) {
        let flag = true

        for(let ii = 1 ; ii<=i ; ii++){
            if(p[ii-1] !== '*') 
            {
                flag = false
                break;
            }
        }

        dp[i][0] = flag

    }
    
    for(let i = 1 ; i<=n; i++){
        for(let j = 1 ; j<=m ;j++){
            if(p[i-1] === s[j-1] || p[i-1] === '?'){
                dp[i][j] = dp[i-1][j-1]
            }

            if(p[i-1] === '*'){
                dp[i][j] = dp[i-1][j] || dp[i][j-1]
            }
            
        }
    }

  return  dp[n][m]
};