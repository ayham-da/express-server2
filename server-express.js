const express = require('express')
const fs = require('fs')
const path = require('path')



const server = express()
const userData = {}
// post-Daten in JSON umwandeln
server.use(express.json())
// URL-String in Objekt umwandeln
server.use(express.urlencoded({extended:true}))

// Dateien
console.log(__dirname)
server.use('/public',express.static(path.join(__dirname,'public')))
server.use(express.static('files'))


server.get('/json' , (request,response) => {
    response.setHeader("Content-Type", "text/html; charset=utf-8")
    response.setHeader("Access-Control-Allow-Origin", "*")
    response.setHeader("Access-Control-Allow-Headers", "Content-Type")
    response.setHeader("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, HEAD")
    response.setHeader('Access-Control-Allow-Headers', '*')
    response.send({message:"Ayham"})
    console.log("You called /json")
})

server.get('/' , (request,response) => {
    response.send('Startseite')
    
})


server.listen(3002, (err) => {
    if(err){
        return console.log('fehler', err)
    }
    console.log('server running at port 3000')
})