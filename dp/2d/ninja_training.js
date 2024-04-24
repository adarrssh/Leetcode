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

console.log(recursion(2, 3, nums))




function meomization(n, points) {
    let dp = new Array(n);
    for (let i = 0; i < n; i++) {
        dp[i] = new Array(4).fill(-1);
    }

    function f(day, last) {
        if (day < 0) return 0
        if (dp[day][last] !== -1) return dp[day][last];

        let maxi = 0;

        for (let i = 0; i <= 2; i++) {
            if (i !== last) {
                let activity = points[day][i] + f(day - 1, i);
                maxi = Math.max(maxi, activity);
            }
        }

        return dp[day][last] = maxi;
    }

    return f(n - 1, 3);
}

// console.log(
//     meomization(3, nums)
// )



function tabulation(nums, n) {

    const dp = Array.from({ length: n }, () => new Array(3).fill(0));

    for (let task = 0; task < 3; task++) {
        dp[0][task] = nums[0][task]
    }

    for (let day = 1; day < n; day++) {
        for (let currentTask = 0; currentTask < 3; currentTask++) {

            let max = -Infinity

            for (let prevTask = 0; prevTask < 3; prevTask++) {

                if (currentTask !== prevTask) {
                    max = Math.max(max, dp[day - 1][prevTask] + nums[day][currentTask])
                }
            }

            dp[day][currentTask] = max
        }
    }

    return Math.max(...dp[n - 1])

}


