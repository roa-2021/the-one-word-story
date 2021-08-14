const checkWord = require('check-word')
const Profanity = require('profanity-js')
const words = checkWord('en')

const profanity = new Profanity({test: ''}, {language: 'en-us'});

// if word is invalid return TRUE
const isInvalid = input => {
    if (typeof input !== "string") {
        return true
    } else if (input.length >= 26) {
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