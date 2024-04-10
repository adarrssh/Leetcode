let ans = [
    [1,1,2],
    [1,1,2],
    [1,2,3],
    [1,2,3],
    [1,3,4]
]

let set = new Set()

for(let ele of ans){
    set.add(JSON.stringify(ele))
}

ans = []

for(let ele of set){
    ans.push(JSON.parse(ele))
}

console.log(ans)