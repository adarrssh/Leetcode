const n = 30

// less optimized

function lessOptimized(n){

    const prime = new Array(n+1).fill(1)
    prime[1] = 0
    
    for(let i = 2 ; i<= n ; i++){
        if(prime[i] === 1){
            for(let j = 2*i ; j<= n ; j+= i){
                prime[j] = 0
            }
        }
    }
    
    for(let i = 2 ; i<=n ; i++){
        if(prime[i] === 1) console.log(i)
    }

}

// optimized

function optimized(n){

    const prime = new Array(n+1).fill(1)
    prime[1] = 0
    
    for(let i = 2 ; i<=  Math.floor(Math.sqrt(n)) ; i++){
        if(prime[i] === 1){
            for(let j = i*i ; j<= n ; j+= i){
                prime[j] = 0
            }
        }
    }
    
    for(let i = 2 ; i<=n ; i++){
        if(prime[i] === 1) console.log(i)
    }

    
}

