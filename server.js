const express = require('express')
const fs = require('fs')
const server = express()
const hbs = require('express-handlebars')

//Routes//

//home route
server.get('/', (request, response) => {
  response.sendFile(__dirname + '/index.html')
  

 })

 //story route
server.get('/story', (request, response) => {
  response.render(__dirname + '/story.json')
  // fs.readFile('./data.json', 'utf-8', (err, data) => {
    //   //   if (err) return res.status(500).send(err.message)
    //   //   res.render('view', data)
})

//post route (takes input from home page and displays on story page)
// server.post('/', (request, response) => {
//   const newWord = request.body 
 
//   //reading story file
//   fs.readFile('/story.json', 'utf-8', (err, data) => {
//      if (err) return res.status(500).send(err.message)

//   const parsedData = JSON.parse(data)

//   // filter word functions
     
 
//   const newFileContents = JSON.stringify({ result of parsedData once manipulated }, null, 2)

//   //add new word to story file
//       fs.writeFile('./data.json', newFileContents, 'utf-8', (err, data) => {
//       if (err) return res.status(500).send(err.message)

//       //display updated story
//      response.redirect('/story')
//    })
//  })


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
