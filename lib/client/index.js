'use strict'
import jsonBody from 'body/json'
import {
	fail,
	jsonfy
} from '../utils/helpers'
import Client from './model'

class ClientController {
	//getAll Cliente
	getAll(req, res) {

		Client
			.find({}, 'fullName picture numDoc adress')
			.then((clients) => {
				res.statusCode = 200
				res.end(jsonfy('OK', clients))
			})
			.catch((err) => {
				fail(err, res)
			})
	}

	save(req, res) {
		jsonBody(req, res, (err, body) => {
			if (err) return fail(err, res)

			Client
				.create(body)
				.then((client) => {
					res.statusCode = 201
					res.end(jsonfy('OK', client))
				})
				.catch((err) => fail(err, res))
		})
	}

	get(req, res) {
		let clientId = this.clientId

		Client
			.findById(clientId)
			.then((client) => {

				if (client) {
					res.statusCode = 200
					res.end(jsonfy('OK', client))
				} else {
					res.statusCode = 404
					res.end(jsonfy(`Employee ${clientId} does not exists`))
				}

			})
			.catch((err) => fail(err, res))
	}

	update(req, res) {  
		let clientId = this.clientId

	    if (!clientId) {
	      res.statusCode = 404
	      return next()
	    }

	    jsonBody(req, res, (err, body) => {
	      if (err) return fail(err, res)
	      let updatedClient = body

	      Employee
	        .findOneAndUpdate({ _id: employeeId }, updatedEmployee)
	        .then((employee) => {
	          res.statusCode = 200
	          res.end(jsonfy(`Employee ${employeeId} updated succesfully`, employee))
	        })
	        .catch((err) => fail(err, res))
	    })
	  }
}