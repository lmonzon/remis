'use strict'
import http     from 'http' 
import mongoose from 'mongoose'
import router   from 'lib/router'

const server     = http.createServer()
const port       = process.env.PORT || 3000
const database    = process.env.MONGO_URL || 'mongodb://localhost/remis'


mongoose.connect(database,onDBConnect)


server.on('request',router)
server.on('listening',onListening)



function onDBConnect (err,res){
	if (err) console.log('ERR: on connect database',${err})
	else{
	   console.log('Connected data database')
	   server.listen(port)
	}
}

function onListening () {  
  console.log(`Server listening on http://localhost:${port}`)
}
