//        0 1 2
const s = "abc"

const n = s.length

for(let i = 0 ; i<= (1<<n) - 1 ; i++ ){
    let sub = ""

    for(let j = 0 ; j<= n-1 ; j++){
        if( i & (1<<j)){
            sub += s[j]
        }
    }

    console.log(sub)
}

