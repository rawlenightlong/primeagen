// halfing an array to seacrch in respective halves
// cutting down Big O time
function binary(haystack: number[], needle: number): boolean {
    let lo = 0
    let hi = haystack.length

    do {
        const m = Math.floor(lo + (hi - lo) / 2);
        const v = haystack[m];

        if (v === needle){
            return true;
        } else if (v > needle) {
            hi = m
        }else {
            lo = m + 1
        }
    } while (lo < hi)
        return false
}