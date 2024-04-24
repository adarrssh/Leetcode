// const nums = [3 ,5 ,8 ,9 ,10 ,17 ,17, 20]
const nums = [2, 5, 7, 8, 10];
const n = nums.length;

const dp = new Array(n).fill().map(() => new Array(n + 1).fill(-1));

function recursive(index, rodLength) {
  if(rodLength === 0) return 0
  
  if(dp[index][rodLength] !== -1) return dp[index][rodLength]

  if(index === 0){
    return nums[0]*rodLength
  }

  let take = -Infinity 

  if(index + 1 <= rodLength ){
    take = nums[index] + recursive(index,rodLength-(index+1))
  }

  let notTake = recursive(index-1,rodLength)

  return dp[index][rodLength] =  Math.max(take, notTake);
}


function tabulation() {

  for(let rodLength = 1 ; rodLength<=n ; rodLength++){
    dp[0][rodLength] = rodLength*nums[0]
  }
  

  for(let index = 1 ; index <n ; index++){
    for(let rodLength  = 1 ; rodLength<=n ; rodLength++){
       let take = -Infinity

       if(index+1<=rodLength){
        take = nums[index] + dp[index][rodLength-(index+1)]
       }

       let notTake = dp[index-1][rodLength]

       dp[index][rodLength] = Math.max(take,notTake)
    }
  }

  return dp[n-1][n]
}



