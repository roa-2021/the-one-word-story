// const { expect, test } = require('@jest/globals')
// const word = require('./word')

// test('Check if input typeof is string', () => {

//     const stringInput = "string"
//     const numInput = 1
//     const objInput = {}

//     const actual = word.checkTypeOf(stringInput)

//     const expected = 'string'

//     expect(actual).toBe(expected)

    

// })

// // test('Check if input contains a number' , () => {

// //     const input = '100'

// //     const actual = word.checkIfNum(input)

// //     const expected = true;

// //     expect(actual).toBe(expected)

    

// // })

// // test('Check if input contains any non alphanumeric characters', () => {

// //     const alphaInput = "swag"
// //     const nonAlphaInput = "$wag"

// //     const actual = word.checkIfAlpha(alphaInput)

// //     const expected = true;

// //     expect(actual).toBe(expected)

    

// // })

// // test.todo('Check if input matches any explicit words')

// test('Check if input matches any explicit words', () => {

//     const goodWord = "good"
//     const badWord = "shit"

//     const actual = word.checkIfExplicit(goodWord)

//     const expected = true;

//     expect(actual).toBe(expected)

   
    
// })