const checkWord = require('check-word')
const Profanity = require('profanity-js')
const words = checkWord('en')

const profanity = new Profanity({test: 'fuck'}, {language: 'en-us'});


const checkTypeOf = (input) => {

    return typeof input
}

const checkIfWord = (input) => {
    return words.check(input)
}

const checkIfProfane = (input) => {

    return profanity.isProfrane(input)

}

console.log(checkTypeOf(1))
console.log(checkIfWord('hsfd'))
console.log('s#1t')

module.exports = {
    checkTypeOf: checkTypeOf,
    checkIfWord: checkIfWord,
    checkIfProfane: checkIfProfane
}