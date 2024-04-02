// Example 1:

// Input: s = "ABAB", k = 2
// Output: 4
// Explanation: Replace the two 'A's with two 'B's or vice versa.
// Example 2:

// Input: s = "AABABBA", k = 1
// Output: 4
// Explanation: Replace the one 'A' in the middle with 'B' and form "AABBBBA".
// The substring "BBBB" has the longest repeating letters, which is 4.
// There may exists other ways to achieve this answer too.
 

const s = "AABAB"

console.log(brute(s,2))
function brute(s,k){
    const n = s.length
    let maxL = 0
    for(let i = 0 ; i<n; i++){
        const arr = new Array(26).fill(0)
        let maxF = 0 
        for(let j = i ; j<n ; j++ ){
            let index = s.charCodeAt(j) - 'A'.charCodeAt(0)
            arr[index] = arr[index] + 1
            maxF = Math.max(maxF, arr[index])

            let changes = (j-i + 1) - maxF

            if(changes<=k){
                maxL = Math.max(maxL, j - i + 1)
            }else{
                break;
            }
        }
    }

    return maxL


}

var characterReplacement = function(s, k) {
    const arr = new Array(26).fill(0)
    let maxL = 0
    let maxF = 0

    let left = 0
    let right = 0
    let n = s.length

    while(right<n){
        let index = s.charCodeAt(right) - 'A'.charCodeAt(0)
        arr[index]++
        maxF = Math.max(maxF, arr[index])

        while(right-left+1 - maxF >k){
            let index = s.charCodeAt(left) - 'A'.charCodeAt(0)
            arr[index]--
            maxF = Math.max(...arr)
            left++
        }

        if(right-left+1 - maxF <= k){
            maxL = Math.max(maxL , right-left+1)
        }

        right++
    }

    return maxL
};

// most optimized
var characterReplacement = function(s, k) {
    const arr = new Array(26).fill(0)
    let maxL = 0
    let maxF = 0

    let left = 0
    let right = 0
    let n = s.length

    while(right<n){
        let index = s.charCodeAt(right) - 'A'.charCodeAt(0)
        arr[index]++
        maxF = Math.max(maxF, arr[index])

        if(right-left+1 - maxF >k){
            let index = s.charCodeAt(left) - 'A'.charCodeAt(0)
            arr[index]--
            left++
        }

        if(right-left+1 - maxF <= k){
            maxL = Math.max(maxL , right-left+1)
        }

        right++
    }

    return maxL
};