const nums = 
[
    [1, 2, 5], 
    [3, 1, 1], 
    [3, 3, 3]
]

const n = nums.length

function recursion(row, col, nums) {
    if (row < 0) return 0

    let max = -Infinity

    for (let i = 0; i < 3; i++) {
        if (i !== col) {
            max = Math.max(max, recursion(row - 1, i, nums) + nums[row][i])
        }
    }

    return max
}



function memoization(nums,n){

    // NOTE :::: ----> 4 size 2d array
    const dp = Array.from({ length: n }, () => new Array(3).fill(-1));

    return solve(n-1,2)


    function solve(row,col){
        if (row < 0) return 0
        if(dp[row][col] !== -1) return dp[row][col]

        let max = -Infinity
    
        for (let i = 0; i < 3; i++) {
            if (i !== col) {
                max = Math.max(max, recursion(row - 1, i, nums) + nums[row][i])
            }
        }

        dp[row][col] = max
        return max  
    }
}

console.log(memoization(nums,n))

function tabulation(nums,n){

    const dp = Array.from({ length: n }, () => new Array(3).fill(0));
    
    for(let task = 0 ; task<3 ; task++ ){
        dp[0][task] = nums[0][task]
    }

    for(let day = 1 ; day<n ; day++){
        for(let currentTask = 0 ; currentTask <3 ; currentTask++){

            let max = -Infinity

            for(let prevTask = 0 ; prevTask<3 ; prevTask++){

                if(currentTask !== prevTask){
                    max = Math.max(max, dp[day-1][prevTask] + nums[day][currentTask])
                }
            }

            dp[day][currentTask] = max
        }
    }

    return Math.max(...dp[n-1])

}


