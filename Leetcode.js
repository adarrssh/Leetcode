function main(k){
  return child(k)
}

function child(k){
  k--
  return k
}

let a = main(3)
console.log(a)