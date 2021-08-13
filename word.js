const checkWord = require('check-word')
const Profanity = require('profanity-js')
const words = checkWord('en')

const profanity = new Profanity({test: ''}, {language: 'en-us'});


const checkTypeOf = (input) => {

    return typeof input
}

const checkIfWord = (input) => {
    return words.check(input)
}

const checkIfProfane = (input) => {

    return profanity.isProfane(input)

}

const checkIfTooLong = (input) => {

    if(input.length >= 26)
    {
        return true;
    }
    return false;

}

module.exports = {
    checkTypeOf: checkTypeOf,
    checkIfWord: checkIfWord,
    checkIfProfane: checkIfProfane,
    checkIfTooLong: checkIfTooLong
}