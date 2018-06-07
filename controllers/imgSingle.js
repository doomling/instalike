let self = {}
const imagesService = require('../services/imgService');
const images = imagesService.getImages();
//let imgController = require('./imgController')
// culpa de Juani

console.log(images[0])

self.render = function(req, res) {
console.log('hola');
console.log(req.params.id)
console.log(images[2]);

let image;

  for (var i = 0; i < images.length; i++) {
    if (req.params.id == images[i].id) {
      console.log('soy un for');
      image = images[i];

      return res.render('single', {
        title: 'holi',
        image: image,
      })
    }
  }
}

module.exports = self
