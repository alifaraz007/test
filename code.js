//1st question
let i = 0;
let num = 100
let arr = []
while (i <= num) {
    arr.push(i)
    i++
}

//2nd
let evenArr = arr.filter(val => (val % 2 === 0 && val !== 0))

//even square function
function evenSquare(val) {
    return new Promise((resolve, reject) => {
        if (val % 2 === 0 && val !== 0) {
            resolve(val * val)
        } else {
            reject('Odd num passed')
        }
    })
}

//3rd
let evenSquareArr = []
arr.forEach(val => {
    if (val % 2 === 0 && val !== 0)
        evenSquareArr.push(val * val);
})


//4th
let sum = evenSquareArr.reduce((total, val) => (total + val), 0)
console.log(sum)

//5th

let resultant = []
let countObj = {
    count: 0
}
async function getData (arr) {
    await Promise.all(arr.map(val => {
        evenSquare(val).then(data => {
            resultant.push(data)
        }).catch(err => {
            countObj.count = countObj.count + 1
        })
    }))
    console.log("resultant: ", resultant)
    console.log("num of errors: ", countObj.count)
}


