'use strict'

var mongoose = require('mongoose')
var Link = mongoose.model('Link')

exports.list_all_links = function (req, res) {
  Link.find({}, function (err, task) {
    if (err) { res.send(err) }
    res.json(task)
  })
}

exports.create_a_link = function (req, res) {
  var newTask = new Link(req.body)
  newTask.save(function (err, task) {
    if (err) { res.send(err) }
    res.json(task)
  })
}

exports.read_a_link = function (req, res) {
  Link.findById(req.params.taskId, function (err, task) {
    if (err) { res.send(err) }
    res.json(task)
  })
}

exports.update_a_link = function (req, res) {
  Link.findOneAndUpdate({ _id: req.params.linkID }, req.body, { new: true }, function (err, link) {
    if (err) { res.send(err) }
    res.json(link)
  })
}

exports.delete_a_link = function (req, res) {
  Link.remove({
    _id: req.params.linkID
  }, function (err, task) {
    if (err) { res.send(err) }
    res.json({ message: 'Link successfully deleted' })
  })
}
