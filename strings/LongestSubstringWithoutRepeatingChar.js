let s = "abcbaef"

function optimized(s){
    let left = 0
    let right = 0
    let map = new Map()
    let max = 0
    let n = s.length

    while(right<n){
        if(map.has(s[right])){
            left = Math.max(left,map.get(s[right]) + 1)
        }

        max = Math.max(max, right-left + 1)
        map.set(s[right], right)
        right++
    }

    console.log(max)
}

optimized(s)

