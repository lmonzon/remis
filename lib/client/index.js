'use strict'
import jsonBody from 'body/json'  
import { fail, jsonfy } from '../utils/helpers'  
import Client from './model'

class ClientController{
	//getAll Cliente
	getAll(req,res){

	Client
	.find({},'fullName picture numDoc adress')
	.then((clients)=>{
      res.statusCode=200
	  res.end(jsonfy('OK',clients))
	})
	.catch((err)=>{fail(err,res)})
}



 }

 