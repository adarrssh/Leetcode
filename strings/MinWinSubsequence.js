// Given strings str1 and str2, find the minimum (contiguous) substring W of str1, so that str2 is a subsequence of W.

// If there is no such window in str1 that covers all characters in str2, return the empty string "". If there are multiple such minimum-length windows, return the one with the left-most starting index.
 

// Example 1:

// Input: 
// str1: geeksforgeeks
// str2: eksrg
// Output: 
// eksforg
// Explanation: 
// Eksforg satisfies all required conditions. str2 is its subsequence and it is longest and leftmost among all possible valid substrings of str1.

//dynamicprogramming
//mm

// possible ans - micprogram , mm


const str1 = "dynamicprogramming"
const str2 = "mm"

minWindow(str1,str2)

function minWindow(S, T) {
    let window = "";
    let j = 0;
    let minLen = S.length + 1;

    for (let i = 0; i < S.length; ++i) {
        if (S[i] === T[j]) {
            j++;
            if (j === T.length) {
                let end = i + 1;
                j--;
                while (j >= 0) {
                    if (S[i] === T[j]) j--;
                    i--;
                }
                j = 0;
                i++;
                if (end - i < minLen) {
                    minLen = end - i;
                    window = S.substring(i, end);
                }
            }
        }
    }

    console.log( window);
}
