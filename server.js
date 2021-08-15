const express = require('express')
const hbs = require('express-handlebars')
const fs = require('fs')

const word = require('./word')

// Server config
const server = express()
server.use(express.static('public'))
server.use(express.urlencoded({ extended: false }))

// Handlebars config
server.engine('hbs', hbs({ extname: 'hbs' }))
server.set('view engine', 'hbs')

let getLastWords = (story, amount) => {
  const arrayLength = story.length
  const indexPosition = arrayLength - amount
  let tempArray = []

  for (i=indexPosition; i< arrayLength; i++) {
    tempArray.push(story[i])
  }
  return tempArray
}

// root route
server.get('/', (req, res) => {
  fs.readFile('./story.json', 'utf-8', (err, data) => {
    if (err) return res.status(500).send(err.message)

    const parsedData = JSON.parse(data)
    const wordsArray = parsedData.story
    const preview = getLastWords(wordsArray, 10)
    const storyObj = {story:preview.join(' ')}

    res.render('landingview', storyObj)
  })
 })

// story route
server.get('/story', (req, res) => {
  fs.readFile('./story.json', 'utf-8', (err, data) => {
    if (err) return res.status(500).send(err.message)

    const parsedData = JSON.parse(data)
    const wordsArray = parsedData.story
    const storyObj = {story:wordsArray.join(' ')}

    res.render('storyview', storyObj)
  })
})

// post route
server.post('/', (req, res) => {
  const usersWord = req.body.story

  // word validation
  if (word.isInvalid(usersWord)) {
    console.log("INVALID WORD SUBMITTED!!")
    fs.readFile('./story.json', 'utf-8', (err, data) => {
      if (err) return res.status(500).send(err.message)
  
      const parsedData = JSON.parse(data)
      const wordsArray = parsedData.story
      const preview = getLastWords(wordsArray, 10)
      const storyObj = {story:preview.join(' ')}
  
      res.render('landingviewerror', storyObj)
    })
    return
  } 
  
  fs.readFile('./story.json', 'utf-8', (err, data) => {
    if (err) return res.status(500).send(err.message)

    const parsedData = JSON.parse(data)
    const wordsArray = parsedData.story
    wordsArray.push(usersWord)
    const newStory = JSON.stringify({story : wordsArray}, null, 2)

    fs.writeFile('./story.json', newStory, 'utf-8', (err, data) => {
      if (err) return res.status(500).send(err.message)
      res.redirect('/story')
    })
  })
})

// about us route
server.get('/about-us', (req, res) => {
  res.render('aboutview')
})

module.exports = server
