// Given two strings s and t of lengths m and n respectively, return the minimum window 
// substring
//  of s such that every character in t (including duplicates) is included in the window. If there is no such substring, return the empty string "".

// The testcases will be generated such that the answer is unique.



// Example 1:

// Input: s = "ADOBECODEBANC", t = "ABC"
// Output: "BANC"
// Explanation: The minimum window substring "BANC" includes 'A', 'B', and 'C' from string t.
// Example 2:

// Input: s = "a", t = "a"
// Output: "a"
// Explanation: The entire string s is the minimum window.
// Example 3:

// Input: s = "a", t = "aa"
// Output: ""
// Explanation: Both 'a's from t must be included in the window.
// Since the largest window of s only has one 'a', return empty string.

const s = "ADOBECODEBANC"
const t = "ABC"

function brute(s, t) {
    let minL = Infinity;
    let startIndex = 0;



    for (let i = 0; i < s.length; i++) {
        const map = new Map(); // Initialize the map outside the loop

        for (let k = 0; k < t.length; k++) {
            map.set(t[k], (map.get(t[k]) || 0) + 1);
        }

        let count = 0;
        for (let j = i; j < s.length; j++) {
            if (map.has(s[j]) && map.get(s[j]) > 0) {
                count++;
                map.set(s[j], map.get(s[j]) - 1);
            }

            if (count === t.length) {
                if (j - i + 1 < minL) {
                    minL = j - i + 1;
                    startIndex = i;
                    break;
                }
            }
        }
    }

    console.log(s.substring(startIndex, startIndex + minL));
}


// brute(s, t)

function optimized(s, t) {
    let minL = Infinity;
    let startIndex = 0;


    const map = new Map();

    for (let k = 0; k < t.length; k++) {
        map.set(t[k], (map.get(t[k]) || 0) + 1);
    }

    let count = 0;
    let left = 0
    for (let right = 0; right < s.length; right++) {

        if (map.has(s[right])) {
            if(map.get(s[right])>0){
                count++;
            }
            map.set(s[right], map.get(s[right]) - 1);
        }
 
        while (count === t.length) {
            if (right - left + 1 < minL) {
                minL = right - left + 1;
                startIndex = left;
            }

            if(map.has(s[left])){
                map.set(s[left] , (map.get(s[left])) + 1)
                if(map.get(s[left]) > 0){
                    count--
                }
            }

            left++
        }
    }

    console.log(s.substring(startIndex, startIndex + minL));
}

optimized(s,t)

