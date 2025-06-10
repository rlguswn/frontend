const a = 1;
const b = 2;
const c = 1;

if (a === b) {
    console.log('조건문 안에 들어옴')
} else if (a !== c) {
    console.log('두번째 조건이 충족됨')
} else {
    console.log('조건문이 충족되지 않음')
}

const result = a === b ? 'a와 b는 같습니다' : 'a와 b는 다릅니다'
console.log(result)

switch (a) {
    case b:
        console.log("a는 b와 같습니다")
        break
    case c:
        console.log("a는 c와 같습니다")
        break
    default:
        console.log("a는 b나 c와 같지 않습니다")
}