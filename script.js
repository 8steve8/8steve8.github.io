function changeColor(newColor){
var elem = document.getElementById('back');
  elem.style.background = newColor;
}


setInterval(function() {
  changeColor('#'+Math.random().toString(16).substr(-6));
  }, 4000);