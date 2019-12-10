const string = 'abc'
const number = 1
const boolean = true

const obj = {
    outside: {
        inside: {
            key: 'value',
        },
    },
}

console.time('whole time')
console.log('simple log, you should use comma for seperate values')
console.log(string, number, boolean)
console.error("this is error")

console.dir(obj, { colors: false, depth: 2})
console.dir(obj, { colors: true, depth: 3})

console.time('time tracking')
for (let i = 0; i < 100000; i++) {
    continue
}
console.timeEnd('time tracking')

function b() {
    console.trace('track the pos')
}

function a() {
    b()
}

a()

console.timeEnd('whole time')
