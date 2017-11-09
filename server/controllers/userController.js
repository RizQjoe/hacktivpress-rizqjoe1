'use strict'

const User = require('../model/User')
const jwt = require('jsonwebtoken')
const helper = require('../helpers/auth')

function register(req,res){
    const key = helper.randomKey()
    const pass = helper.hash(req.body.password, key)
    User.create({
        username: req.body.username,
        password: pass,
        key: key
    })
    .then(response => {
    res.send(response)
  })
  .catch(err => {
    res.send(err)
  })
}

function login(req,res){
  User.findOne({
    username: req.body.username
  })
  .then(response => {
    const key = response.key
    const pass = helper.hash(req.body.password, key)
    if(response.password == pass){
      const token = jwt.sign({
        id: response._id,
        username: response.username
      }, 'AssFF9')
    req.headers.token = token
    res.json({token:token, id: response._id, username: response.username})
  }else {
    res.send('wrong passwors')
  }
  })
  .catch(err =>{
    res.send('User Not found!')
  })
}

module.exports = {
  register,
  login
};



}