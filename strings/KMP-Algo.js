// hayStack = AAAXAAAX
// needle = AAAA
// LPS   = [0,1,2,3]

// const hayStack = 'AAAXAAAA'
// const needle = 'AAAA'
const hayStack = 'asfasdfsodjfisjd'

const needle = "aacecaaa#aaacecaa"

class KMP{

    constructor(hayStack,needle){
        this.hayStack = hayStack
        this.needle = needle
    }

    strStr(){
        if(this.needle === "") return 0
        let m = this.needle.length
        const lps = new Array(m).fill(0)

        let prevLPS = 0
        let i = 1 

        while( i< m){
            if(this.needle[i] === this.needle[prevLPS]){
                lps[i] = prevLPS + 1
                prevLPS++
                i++
            }else{
                if(prevLPS === 0){
                    lps[i] = 0
                    i++
                }else{
                    prevLPS = lps[prevLPS-1]
                }
            }
        }

        console.log(lps)

        i = 0
        let j = 0

        while(i<this.hayStack.length){
            if(this.hayStack[i] === this.needle[j]){
                i++
                j++
            }else{
                if(j===0){
                    i++
                }else{

                   j =  lps[j-1]

                }
            }

            if(j === m){
                return i - m
            }
        }

        return -1
    }
}

const sol = new KMP(hayStack,needle)

console.log(sol.strStr())