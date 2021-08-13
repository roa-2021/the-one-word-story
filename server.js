const express = require('express')
const fs = require('fs')
const server = express()
const hbs = require('express-handlebars')

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
  // response.sendFile(__dirname + '/story.json')
  response.render('storyview')
  // fs.readFile('/story.json', 'utf-8', (err, data) => {
  //      res.render('storyview')
})
// })

// /////////*********//post route/////************** */ (takes input from home page and displays on story page)
// server.post('/', (request, response) => {
//   const input = request.body 
 
//   //reading existing story file and extracting data
//   fs.readFile('/story.json', 'utf-8', (err, data) => {
//      if (err) return err.message
     
//     const parsedData = JSON.parse(data)
  

//   // filter word functions
     
 
//   // const newWord = JSON.stringify({ }, null, 2)

//   //add new word to story file
//     fs.append('/story.json', input, 'utf-8', (err) => {
//       if (err) 
//         return err.message
      
//         //display updated story
//         response.redirect('/story)
//       }
//    })
//  })
// })


// //about us route
// server.get('/about-us', (request, response) => {
//   response.sendFile(__dirname + 'aboutus.html')
 
// })



//fucntions

// function getLastWords(story) {
//   //splits story string into an array of words
//   var storyArray = story.split(" ");

//   console.log(storyArray[storyArray.length - 1])
// }

// getLastWords('/story.json')

module.exports = server
