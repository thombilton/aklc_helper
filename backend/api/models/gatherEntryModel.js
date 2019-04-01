'use strict'
var mongoose = require('mongoose')
var Schema = mongoose.Schema

var GatherSchema = new Schema({
  gatherURL: String,
  websiteURL: String
})

module.exports = mongoose.model('Link', GatherSchema)
