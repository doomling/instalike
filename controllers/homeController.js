let self = {}
const imagesService = require('../services/imgService');
const images = imagesService.getImages;
//let imgController = require('./imgController')
// culpa de Juani

self.home = function(req, res) {
  res.render('index', {
    title: 'holi',
    images: images,
  })
}

//console.log(images);

self.update = function(req, res) {
  console.log(req.body.id);
  res.json(imagesService.update(req.body.id));
}
//self.images = images;
module.exports = self
