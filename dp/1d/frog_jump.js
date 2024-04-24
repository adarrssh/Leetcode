// frog jump
const arr  = [30,10,60,10,60,50]

const n = arr.length

// recusrion 
function recusrionSol(){

    const dp = new Array(n).fill(-1)
    function backTrack(n) {
        if (n === 0) return 0;
        if(dp[n] !== -1) return dp[n]
        
        let left = Math.abs( arr[n] - arr[n - 1] ) + backTrack(n - 1); // One step left
        let right = Number.MAX_SAFE_INTEGER;
        if (n > 1) {
            right = Math.abs( arr[n] - arr[n - 2] ) + backTrack(n - 2); // Two steps left
        }
        
        dp[n] = Math.min(left, right);
        return dp[n]
    }
}

// tabulation 

function tabulation(n){
    const dp = new Array(n).fill(-1)
    dp[0] = 0
    dp[1] = Math.abs(dp[1]-dp[0])
    for(let i = 2 ; i< n ; i++){
        let first_step = dp[i-1] + Math.abs(arr[i] - arr[i-1])

        let second_step =  dp[i-2] + Math.abs(arr[i] - arr[i-2])

        dp[i] = Math.min(first_step,second_step)
    }

    return dp[n-1]
}

// space optmized

function tabulation(n){
    let prev = 0
    let secondPrev = 0
    for(let i = 1 ; i< n ; i++){
        let first_step = Math.abs(arr[i] - arr[i-1]) + prev

        let second_step = Number.MAX_SAFE_INTEGER
        if(i>1){
          second_step =  Math.abs(arr[i] - arr[i-2]) + secondPrev
        }

        secondPrev = prev
        prev = Math.min(first_step,second_step)       
    }

    return prev
}
