function changeImage() {
  var image = document.getElementById('myImage');
  
  ir (image.src.match('bulbon')){
    image.src = "image/pic_bulboff.gif";
  } else {
    image.src = "image/pic_bulbon.gif"
  }
  }
}
