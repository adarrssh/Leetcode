const matrix = [
  [2, 3, 1, 2],
  [3, 4, 2, 2],
  [5, 6, 3, 5]
]

const n = matrix.length
const m = matrix[0].length

console.log(recursiveSol(matrix,n,m))

function recursiveSol(grid,n,m){


    return recursion(0,0,m-1)

    function recursion(i,j1,j2){

        if( j1 < 0 || j2 < 0 || j1 >= m || j2 >= m) return -Infinity

        if(i === n-1){
          if(j1 === j2) return grid[i][j1]
          else{
            return grid[i][j1] + grid[i][j2]
          }
        }

        let maxi = -Infinity

        for(let di = -1 ; di <= 1 ; di++){
          let ans ; 
            for( let dj = -1 ; dj <= 1 ; dj++){
               if(j1 == j2){
                 ans = grid[i][j1] + recursion(i+1,j1 + di,j2+dj)
               }else{
                ans = grid[i][j1] + grid[i][j2] + recursion(i+1,j1+di,j2+dj)
               }
               maxi = Math.max(maxi,ans) 
            }
        }

         maxi

        return maxi
    }
}