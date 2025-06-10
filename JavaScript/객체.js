const person = {
    name: 'abc',
    age: 29,
    job: '개발자',
    talk: (sentence) => {
        return sentence
    },
    hobbies: {
        hobby1: '개발공부',
        hobby2: '운동'
    }
}

// console.log(`
//     안녕하세요 저는 ${person.name}입니다.
//     제 나이는 ${person.age}살 이고, 제 직업은 ${person.job}입니다.
//     제 취미는 ${person.hobbies.hobby1}와 ${person.hobbies.hobby1}입니다.
//     ${person.talk('앞으로 잘 부탁드립니다.')}`)


// console.log(person)
// console.log(person3)

const deepCopy = (origin) => {
    const result = {}
    for (let key in origin) {
        if (origin[key] !== null && typeof origin[key] == 'object') {
            result[key] = deepCopy(origin[key])
        } else {
            result[key] = origin[key]
        }
    }
    return result
}

const person2 = person
const person3 = {...person}
const person4 = deepCopy(person)

person2.name = 'AAA'
person3.hobbies.hobby2 = '독서'

console.log(person)
console.log(person2)
console.log(person3)
console.log(person4)
