'use strict'
module.exports = function (app) {
  var linkList = require('../controllers/gatherEntryController')

  app.route('/gather')
    .post(linkList.create_a_link)
    .get(linkList.read_a_link)

  app.route('/gather/all')
    .get(linkList.list_all_links)

  app.route('/gather/:gatherId')
    .get()
}
