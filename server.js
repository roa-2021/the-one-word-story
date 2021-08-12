const express = require('express')
const fs = require('fs')
const server = express()

//Routes//

//home route
server.get('/', (request, response) => {
  response.sendFile(__dirname + '/index.html')
  // filter word functions

 })

server.get('/story', (request, response) => {
  response.sendFile(__dirname + '/story.json')
  // fs.readFile('./data.json', 'utf-8', (err, data) => {
    //   //   if (err) return res.status(500).send(err.message)
    //   //   res.render('view', data)
})


server.post('/story', (request, response) => {
  // request.body = 
})





//about us route
server.get('/about-us', (request, response) => {
  response.sendFile(__dirname + 'aboutus.html')
 
})

module.exports = server
