
// Example 1:

// Input: intervals = [[1,3],[6,9]], newInterval = [2,5]
// Output: [[1,5],[6,9]]
// Example 2:

// Input: intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]
// Output: [[1,2],[3,10],[12,16]]
// Explanation: Because the new interval [4,8] overlaps with [3,5],[6,7],[8,10].
 
/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
    const res = []
    for(let i = 0;i<intervals.length;i++){
        let current = intervals[i]

        if(newInterval[1]<current[0]){
            res.push(newInterval)
            // add the remaining elements of intervals from ith index
            const restArray = intervals.slice(i)
            res.push(...restArray)
            return res
        }else if(newInterval[0]>current[1]){
            res.push(current)
        }else{
            newInterval = [
                Math.min(current[0],newInterval[0]),
                Math.max(current[1],newInterval[1])
            ]
        }
    }

    res.push(newInterval)
    return res
};

const  intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]
console.log(
    insert(intervals, newInterval)
)