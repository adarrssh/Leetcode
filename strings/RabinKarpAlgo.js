/**
 * @param {string} str
 * @param {number} RADIX
 * @param {number} m
 * @return {number}
 */

const MOD = 1000000007;
function hashValue(str, RADIX, m) {
    let ans = 0, factor = 1;
    for (let i = m - 1; i >= 0; i--) {
        ans += ((str.charCodeAt(i) - 'a'.charCodeAt(0)) * factor) % MOD;
        factor = (factor * RADIX) % MOD;
    }
    return ans % MOD;
}

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
function strStr(haystack, needle) {
    const n = haystack.length, m = needle.length;
    if (n < m) return -1;

    const RADIX = 26, MOD = 1000000007;
    let MAX_WEIGHT = 1;

    // Calculate RADIX^m
    for (let i = 1; i <= m; i++) {
        MAX_WEIGHT = (MAX_WEIGHT * RADIX) % MOD;
    }

    const hashNeedle = hashValue(needle, RADIX, m);
    let hashHay = 0;

    for (let i = 0; i <= n - m; i++) {
        if (i === 0) {
            hashHay = hashValue(haystack.substring(0, m), RADIX, m);
        } else {
            hashHay = ((hashHay * RADIX) % MOD - ((haystack.charCodeAt(i - 1) - 'a'.charCodeAt(0)) * MAX_WEIGHT) % MOD + (haystack.charCodeAt(i + m - 1) - 'a'.charCodeAt(0)) + MOD) % MOD;
        }

        if (hashNeedle === hashHay) {
            let match = true;
            for (let j = 0; j < m; j++) {
                if (needle[j] !== haystack[i + j]) {
                    match = false;
                    break;
                }
            }
            if (match) return i;
        }
    }

    return -1;
}

const a = "abcd", b = "fffabcd"

console.log(strStr(b,a))

// #define ll long long int
// #define MOD 1000000007

// class Solution {
// public:
//     ll hashValue(string string, ll RADIX, ll m) {
//         ll ans = 0, factor = 1;
//         for (ll i = m - 1; i >= 0; i--) {
//             ans += ((string[i] - 'a') * factor) % MOD;
//             factor = (factor * RADIX) % MOD;
//         }
//         return ans % MOD;
//     }

//     int strStr(string haystack, string needle){
//         ll n = haystack.length(), m = needle.length();
//         if(n<m) return -1;

//         ll RADIX = 26, MAX_WEIGHT = 1;


//         // 26^m
//         for( ll i = 1; i<=m ; i++){
//             MAX_WEIGHT = (MAX_WEIGHT * RADIX) % MOD;
//         }

//         ll hashNeedle = hashValue(needle, RADIX, m), hashHay = 0;

//         for(ll i = 0 ; i<= n-m ; i++){
//             if(i==0){
//                 hashHay = hashValue(haystack,RADIX,m);
//             }else{
//                 hashHay = 
//                 ((hashHay * RADIX) % MOD - ((haystack[i-1] - 'a') * MAX_WEIGHT) % MOD 
//                 + (haystack[i+m-1] - 'a') + MOD ) % MOD
//             }

//             if(hashNeedle === hashHay){
//                 for(ll j = 0 ; j<m ; j++){
//                     if(needle[j] !== haystack[j+1]) break;
//                     if(j == m-1) return i;
//                 }
//             }
//         }

//         return -1
//     }

// }


// In modular arithmetic, taking the modulo operation ensures that the result remains within a specific range. However, when performing subtraction or addition operations, the result might go beyond the desired range [0, MOD-1]. To ensure that the result stays within this range, we need to make adjustments when necessary.

// Example:
// Suppose we have MOD = 7 for simplicity.

// Let's say we want to calculate (3 - 5) % MOD. The result of this operation would be -2. However, we want the result to be within the range [0, MOD-1], which is [0, 6] in this case.

// To achieve this, we add MOD to the result before taking the modulo operation. So, (3 - 5 + MOD) % MOD becomes (3 - 5 + 7) % 7, which equals 5 % 7, resulting in 5.

// Similarly, for addition operations that might exceed MOD-1, we also perform this adjustment. For example, (5 + 4) % MOD would give 9 % 7, resulting in 2. But to ensure the result stays within [0, MOD-1], we would do (5 + 4 + MOD) % MOD, which becomes (5 + 4 + 7) % 7, resulting in 16 % 7, which equals 2.

// So, by adding MOD to the result before taking the modulo operation, we ensure that the result remains within the desired range [0, MOD-1].




// If the value becomes negative after performing a subtraction operation in modular arithmetic, it can lead to incorrect results when taking the modulo operation. This is because the modulo operation of a negative number might not yield the expected result, especially when dealing with programming languages that handle modulo differently for negative operands.

// In some programming languages like C++ and Java, the modulo operation for negative numbers follows the rule that the result has the same sign as the dividend (the number being divided), which means the result can be negative. This behavior can cause issues if we expect the result to always be non-negative.

// For example, suppose we have MOD = 7. If we perform (3 - 5) % 7, the result would be -2 % 7, which might yield -2 or 5, depending on the programming language and its implementation of the modulo operation for negative numbers.

// To avoid such issues and ensure consistent behavior, we adjust the result of subtraction operations to be within the range [0, MOD-1] by adding MOD to the result before taking the modulo operation. This adjustment guarantees that the result remains non-negative, regardless of the behavior of the modulo operation for negative numbers in the programming language being used.