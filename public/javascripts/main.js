let index;

$('.like-number').on('click',function() {
  index = $(this).index();

  console.log('soy', this);
  console.log('hola, soy un index', index);
  //console.log(something)

  let clicked = $(this).data();
  console.log(clicked.awesome);

  let that = this;

 $.ajax({
   method: "PUT",
   url: 'http://localhost:3000/updated',
   data: {
   id: clicked.awesome,
   }
 }).done(function(data) {
   console.log(data, index);
    $(that).html(data.likes);
 })
})

$('#save').on('click', function() {
  let title = $('#title').val();
  let url = $('#url').val();
  //console.log(title, url)
  $.ajax({
    method: "POST",
    url: 'http://localhost:3000/uploader',
    data: {
      titulo: title,
      url: url,
    }
  }).done(function(data) {
    console.log(data);
    // $('.like-number').eq(index).html(data.likes);
  })
})
