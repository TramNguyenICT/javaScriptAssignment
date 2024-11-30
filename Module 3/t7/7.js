const p = document.getElementById('trigger')
p.addEventListener('mouseover',function(evt){
  let image = document.getElementById('target')
  console.log(image.src)
  if (image.src.endsWith('picA.jpg')){
    image.src = 'img/picB.jpg'
  }
  else {
    image.src = 'img/picA.jpg'
  }
});