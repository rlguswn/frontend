const a = 1
const b = 10
const c = 100

function functionName(x, y) {
    return x / y
}

console.log(functionName(a,b))
console.log(functionName(c,a))

// 화살표 함수 선언식
const arrowFunction = (x,y) => {
    return x + y
}

console.log(arrowFunction(b,c))
