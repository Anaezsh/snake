window.onload = function() {
  var game = new Game();
  game.create();
  game.play();
  document.onkeydown = function(e) {
    game.key(e);
  }
}
