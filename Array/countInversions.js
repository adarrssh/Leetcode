// const nums = [5,4,3,2,1]
// const n = nums.length

// let count = mergeSort(0,n-1)

// function mergeSort(low,high){
//     let count = 0 
//     if(low<high) return count
//     let mid = Math.floor(low+high)/2
//     count += mergeSort(low,mid)
//     count += mergeSort(mid+1,high)
//     count += merge(low,mid,high)
//     return count
// }

// function merge(low,mid,high){
//     let count = 0 
//     let left = low
//     let right = mid+1
//     let temp = []
//     while(left<=mid && right <= high){
//         if(nums[left] <= nums[right]){
//             temp.add(nums[left])
//             left++
//         }else{
//             temp.add(nums[right])
//             count += (mid-left+1)
//             right++
//         }
//     }

//     while(left<=mid){
//         temp.add(nums[left])
//         left++
//     }

//     while(right<=high){
//         temp.add(nums[right])
//         right++
//     }

//     for (let i = low; i <= high; i++) {
//         nums[i] = temp[i - low];
//     }
//     return cnt;

// }

/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {

    class Stack{
        constructor(){
            this.item = []
        }

        push(x){
            this.item.push(x)
        }

        pop(){
            if (this.isEmpty()) return null;
            return this.item.pop()
        }

        top(){
            if(this.isEmpty()) return null
            return this.item[this.item.length-1]
        }

        isEmpty(){
            return this.item.length === 0
        }
    }

    let n = heights.length
    let leftSmallEle = []
    let rightSmallEle = []
    let stack = new Stack()

    for(let i = 0; i< n ; i++ ){
        console.log("here")

        while(!stack.isEmpty() && heights[i] <= heights[stack.top()]){
            stack.pop()
        }

        console.log("next")


        if(stack.isEmpty()){
            leftSmallEle[i] = 0
        }else{
            leftSmallEle[i] = stack.top() + 1

        }

        stack.push(i)

    }

     while (!stack.isEmpty()) {
        stack.pop()
    }

    for (let i = n - 1; i >= 0; i--) {
        while (!stack.isEmpty() && heights[i] <= heights[stack.top()]) {
            stack.pop()
        }

        if(stack.isEmpty()){
            rightSmallEle[i] = n - 1
        }else{
            rightSmallEle[i] = stack.top() - 1

        }

        stack.push(i)
    }

    let maxEle = 0
    console.log(leftSmallEle,rightSmallEle)
    for(let i = 0;i<n ; i++){
     maxEle = Math.max(maxEle,(rightSmallEle[i]-leftSmallEle[i]+1)*heights[i])
    }

    return maxEle
};

console.log(largestRectangleArea([2,1,5,6,2,3]))