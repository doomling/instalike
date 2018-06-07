let self = {}
//const homeController = require('./homeController');
const imagesService = require('../services/imgService')
let images = imagesService.getImages();

self.upload = function(req, res) {
  res.render('updater', {
    titulo: 'holi',
  })
}

//self.getImages = function(req, res) {
//  imagesService.getImages()
//}

self.insertImage = function(req, res) {
  const body = req.body
  if (body && body.url && body.titulo) {
    imagesService.createNew(body)
    console.log(body);
  } else {
    return res.sendStatus(400)
  }
}

self.hagocosas = function(req, res) {
  console.log('soy un parametro', req.params.id);
}

module.exports = self

/*

imagesController.js

let self = {}
const imagesService = require('../services/imagesService')


module.exports = self

*/
