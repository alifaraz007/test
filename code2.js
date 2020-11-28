//part 2

//2nd and 3rd
function htmlListfunction(num) {
    let i = 1
    let arr = []
    while (i <= num) {
        arr.push(i)
        i++
    }
    //for list elements (2nd)
    let listElem = arr.reduce((total, val) => (total + `<li>${val}</li>`), "")

    //for even elements (3rd)
    let evenElem = arr.reduce((total, val) => {
        if (val % 2 === 0 && val !== 0)
            return total = total + `<li>${val}</li>`
        else
            return total
    }, "")
}


//4th
let random = Math.random() * 3000

function delayFunction (delay) {
    console.log('total time taken: ',delay)
}

function final (delayFunction, delay) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(delayFunction(delay))
        }, delay);
    });
}


(async function () {
    await final(delayFunction, random)
}());