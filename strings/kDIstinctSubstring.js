// Input: abc, k = 2
// Output: 2
// Possible substrings are {“ab”, “bc”}

// Input: aba, k = 2
// Output: 3
// Possible substrings are {“ab”, “ba”, “aba”}

function bruteforce(s,k){
    const n = s.length
    const ans = []
    for(let i = 0 ; i<n ; i++){
        const map = new Map()
        for(let j = i ; j<n ; j++){
            map.set(s[j], (map.get(s[j]) || 0) + 1)

            if(map.size === k){
                ans.push(s.substring(i,j+1))
            }
        }
    }

    console.log( ans)
}

// Function to count the number of substrings with at most k distinct characters
function countSubstringsWithAtMostKDistinctChars(s, k) {
    let left = 0, right = 0, n = s.length, distinctCount = 0, substringCount = 0;

    let charFrequency = new Map()

    while (right < n) {
        charFrequency.set(s[right], ( charFrequency.get(s[right]) || 0 ) + 1)

      

        while (charFrequency.size > k) {
            charFrequency.set(s[left], charFrequency.get(s[left]) - 1);

            if (charFrequency.get(s[left]) === 0) {
                charFrequency.delete(s[left])
            }

            left++;
        }

        substringCount += (right - left + 1);

        right++;
    }

    return substringCount;
}

// Function to count the number of substrings with exactly k distinct characters
function countSubstringsWithExactlyKDistinctChars(str, k) {
    // Count substrings with at most k distinct characters
    let countAtMostK = countSubstringsWithAtMostKDistinctChars(str, k);

    // Count substrings with at most (k-1) distinct characters
    let countAtMostKMinus1 = countSubstringsWithAtMostKDistinctChars(str, k - 1);

    // The difference gives the count of substrings with exactly k distinct characters
    return countAtMostK - countAtMostKMinus1;
}

// Example usage
let s = "abacd";
let k = 3;
let result = countSubstringsWithExactlyKDistinctChars(s, k);

console.log("The number of substrings with exactly " + k + " distinct characters is: " + result);
