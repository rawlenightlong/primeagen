// Big O is a way to categorize your algorithms time or memory requirements based on input - not an exact measurement
// helps make decisions on which algorithms we should / shouldn't use

// Growth with respect to input - lineraly expandingws

function sumCharCodes(n: string): number {
    let sum = 0
    for (let i = 0; i < n.length; i++) {
        sum += n.charCodeAt(i)
    }
    return sum
}

// for every "unit" of string, there is another "loop" that must be completed
// simple trick for looking for complexity - look for loops
// constants are dropped
// worset case is usually the way we measure

