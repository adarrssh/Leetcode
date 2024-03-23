const arr = [
    [10,40,70], 
    [20 ,50 ,80] ,
    [30,60,90] ]

    // const dp = new Array(arr.length + 1);
    // for (let i = 0; i < dp.length; i++) {
    //     dp[i] = new Array(4).fill(0);
    // }
    
    
function recursion(day,lastIndex){
    if(day === 0){
        let max = Number.MIN_SAFE_INTEGER
        for(let i = 0 ; i<3 ; i++){
            if(i !== lastIndex){
                max = Math.max(max,arr[day][i])
            }
        }

        return max
    }

    if(dp[day][lastIndex] !== -1) return dp[day][lastIndex]
    let max = Number.MIN_SAFE_INTEGER

    for(let i = 0 ; i<3 ; i++){
        if(i !== lastIndex){
            max = Math.max(max, arr[day][i] + recursion(day-1,i))
        }
    }

    dp[day][lastIndex] = max
    return max
}


function tabulation(){
    dp[0][0] = Math.max(arr[0][1], arr[0][2])
    dp[0][1] = Math.max(arr[0][0], arr[0][2])
    dp[0][2] = Math.max(arr[0][0], arr[0][1])

    for(let day = 1 ; day < arr.length ; day++){
        for(task = 0 ; task<3; task++){
            dp[day][task] = arr[day][task] + dp[day-1][task]
        }
    }

    let ans = Number.MIN_SAFE_INTEGER
    for(let i = 0 ; i< dp[0].length ; i++){
        ans = Math.max(ans,dp[2][i])
    }

    return ans
}


// space optimized 

function spaceOpt(){
    let dp = new Array(3).fill(0)
    let curr = new Array(3).fill(0)
    dp[0] = Math.max(arr[0][1], arr[0][2])
    dp[1]  = Math.max(arr[0][0], arr[0][2])
    dp[2] = Math.max(arr[0][0], arr[0][1])

    for(let day = 1 ; day < arr.length ; day++){
        for( let task = 0 ; task<3; task++){
            curr[task] = arr[day][task] + dp[task]
        }

        dp  = [...curr]
    }

    let ans = Number.MIN_SAFE_INTEGER
    for(let i = 0 ; i< dp.length ; i++){
        ans = Math.max(ans,dp[i])
    }

    return ans

}
