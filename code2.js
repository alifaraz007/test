function htmlListfunction(num) {
    let i = 1
    let arr = []
    while (i <= num) {
        arr.push(i)
        i++
    }
    //for list elements
    let listElem = arr.reduce((total, val) => (total + `<li>${val}</li>`), "")

    //for even elements
    let evenElem = arr.reduce((total, val) => {
        if (val % 2 === 0 && val !== 0){
            console.log(val,'---')
            return total = total + `<li>${val}</li>`
        }
    }, "")
    console.log(evenElem)
}

let data = htmlListfunction(30)
console.log(data, '---')