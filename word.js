const checkWord = require('check-word')
const Profanity = require('profanity-js')
const words = checkWord('en')

const profanity = new Profanity({test: ''}, {language: 'en-us'});

// input cannot be > 26
const isTooLong = input => {
    return input.length >= 26 ? true : false
}

// input must be string type
const isNotString = input => {
    return typeof input !== "string" ? true : false
}

// if word is invalid return TRUE
const isInvalid = input => {
    if (isTooLong(input)) {
        return true
    } else if (isNotString(input)) {
        return true
    } else if (words.check(input) === false) {
        return true
    } else if (profanity.isProfane(input)) {
        return true
    }
    return false
}

module.exports = {
    isInvalid,
}