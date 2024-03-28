/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
    const m = obstacleGrid.length
    const n = obstacleGrid[0].length
    const dp = new Array(m).fill().map(() => new Array(n).fill(-1));

    return recursion(m-1,n-1)

    function recursion(row,col){
        if(row <0 || col < 0) return 0
        
        // this will come after the above statement , remember this
        if( obstacleGrid[row][col] == 1) return 0
        
        if(dp[row][col] !== -1) return dp[row][col]

        if(row === 0 && col === 0) return 1

        let left = recursion(row,col-1)

        let up = recursion(row-1,col)

        dp[row][col] = left + up

        return  dp[row][col]
    }
};