let self = {}
//let imgController = require('./imgController')

let images  = [{
  id: 3,
  url: 'https://images.pexels.com/photos/979503/pexels-photo-979503.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  titulo: 'Gatitos muy lindos',
  likes: 0
},
{ id: 2,
  url: 'https://images.pexels.com/photos/45170/kittens-cat-cat-puppy-rush-45170.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
  titulo: 'Gatitos bellos los amo',
  likes: 0 },
{ id: 1,
  url: 'https://images.pexels.com/photos/209037/pexels-photo-209037.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  titulo: 'Gatito naranja escondido',
  likes: 0 },
]

self.update = function(data) {
  console.log(data);
  let liked = data;
  let counter;
  for (var i = 0; i < images.length; i++) {
    if (liked == images[i].id) {
      counter = images[i].likes++;
      console.log(images[i].likes);
      return { likes: images[i].likes }
    }
  }
}

// culpa de Juani

function getId() {
  const length = images.length
  const newId = images[length - 1].id + 1

  return newId
}

self.getImages = function() {
  return images
}

self.createNew = function(data) {
  console.log(data);
  let newImage = {
    id: getId(),
    titulo: data.titulo,
    url: data.url,
    likes: 0,
  }
  images.unshift(newImage);
}

/*
self.insertImage = function(data) {
  const newImg = {
    img: data.img,
    titulo: data.titulo,
    likes: 0,
    id: getId()
  }
  imagenes.push(newImg)
}
*/

module.exports = self
