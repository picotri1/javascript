function changeImage() {
  var image = document.getElementById('myImage');
  
  ir (image.src.match('bulbon')){
    image.src = "images/pic_bulboff.gif";
  } else {
    image.src = "images/pic_bulbon.gif"
  }
}
