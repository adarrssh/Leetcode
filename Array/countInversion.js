const array  = [5,4,3,2,1]

let ans = mergeSort(array,0,array.length-1)

function mergeSort(arr,left,right){
    let count = 0
    if(left<right){
        const mid = Math.floor((left+right)/2)
       count+= mergeSort(arr,left,mid)
       count+= mergeSort(arr,mid+1,right)
       count+= merge(arr,left,mid,right)
    }
    return count
}

function merge(arr,left,mid,right){
    let count = 0
    let mergedArray = []
    let i = left
    let j = mid+1

    while(i<=mid && j<=right){
        if(arr[i]<=arr[j]){
            mergedArray.push(arr[i])
            i++
        }else{
            mergedArray.push(arr[j])
            count +=mid-i+1
            j++
        }
    }

    while(i<=mid){
        mergedArray.push(arr[i])
        i++
    }

    while(j<=right){
        mergedArray.push(arr[j])
        j++
    }

    for(let k = left ; k<=right; k++){
        arr[k] = mergedArray[k-left]
    }

    return count
}