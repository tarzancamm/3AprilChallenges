const validParentheses = (str) => {
    let arr = str.split('')

    if (str === "") {
        return true
    }

    if (arr[0] === ")") {
        return false
    }

    let opening = ["("]
    let testing = []

    for (let i = 0; i < arr.length; i++) {
        if (opening.includes(arr[i])) {
            testing.push(arr[i])
        } else if (testing.length !== 0) {
            testing.pop()
        } else {
            return false
        }
    }

return testing.length === 0
}


// console.log(validParentheses("((()))")) // true
// console.log(validParentheses("((())")) // false
// console.log(validParentheses("())(()")) // false
// console.log(validParentheses("")) // true
console.log(validParentheses("(())((()))))()")) //false