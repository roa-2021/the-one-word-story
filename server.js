const express = require('express')
const fs = require('fs')
const server = express()
const hbs = require('express-handlebars')
const alert = require('alert')

const wordFilter = require('./word')
const { checkIfProfane } = require('./word')

// Server configuration
server.use(express.static('public'))
server.use(express.urlencoded({ extended: false }))

// Handlebars configuration
server.engine('hbs', hbs({ extname: 'hbs' }))
server.set('view engine', 'hbs')


///////////////////////// Routes///////////////////////

//home route
server.get('/', (request, response) => {
  response.render('landingview')
 })

 ////////*********//story route/////************** */
server.get('/story', (request, response) => {
  fs.readFile('/story.json', 'utf-8', (err, data) => {
 
    response.render('storyview', data)
 })
})

// /////////*********//post route/////************** */ (takes input from home page and displays on story page)
server.post('/', (request, response) => {

  const input = request.body.story
  
  if (wordFilter.checkTypeOf(input) != 'string')
  {
    alert('Not a string! You sneaky devil.')
    return;
  }
  else if (wordFilter.checkIfWord(input) === false)
  {
    
    alert('That\'s not a word! Please try again!')
    return;
  }
  else if (wordFilter.checkIfProfane(input) === true)
  {
    alert('Watch your language! No profanity.')
    return;
  }
  else if (wordFilter.checkIfTooLong(input) === true)
  {
    alert('Way too long! Please shorten your word')
    return;
  }
  
  fs.readFile('/story.json', 'utf-8', (err, data) => {
     if (err) return err.message
     
    const parsedData = JSON.parse(data)

   const newArray = parsedData.story.push(input)

   const newStory = JSON.stringify({newArray}, null, 2)

   fs.writeFile('/story.json', newStory, 'utf-8', (err, data) => {
      if (err) return err.message
     
        response.redirect('/story')
  
    })
 })
})



//about us route
server.get('/about-us', (request, response) => {
  response.sendFile(__dirname + 'aboutus.html')
 
})



//fucntions

// function getLastWords(story) {
//   //splits story string into an array of words
//   var storyArray = story.split(" ");

//   console.log(storyArray[storyArray.length - 1])
// }

// getLastWords('/story.json')

module.exports = server
