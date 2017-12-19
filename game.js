function Game() {
  this.score = 0;
  this.level = 1;
  this.speed = 1;
  this.time = 300;
  this.scoreSpan = $("#score");
  this.levelSpan = $("#level");
  this.speedSpan = $("#speed");
  this.m1;
  this.s1;
  this.b1;
  this.intervalId;
}
Game.prototype.create = function() {
  this.m1 = new Matrix("matrix",20,20);
  this.m1.create();
  this.s1 = new Snake(1,1,"right",this.m1);
  this.s1.create();
  this.b1 = new Border(this.m1);
  new Target(this.m1).create();
  this.scoreSpan.html(this.score);
  this.levelSpan.html(this.level);
  this.speedSpan.html(this.speed);
}
Game.prototype.iterate = function() {
  this.s1.move();
  if(this.s1.collide) {
    this.showMessage("Увы, мы ее потеряли...");
  }
  if(this.s1.eat) {
    this.score += 10;
    this.scoreSpan.html(this.score);
      this.s1.eat = false;
      if(this.s1.long === 21) {
        clearInterval(this.intervalId);
        this.s1.delete();
        this.time -= 15;
        this.speed++;
        if(this.speed > 10) {
          this.time = 300;
          this.speed = 1;
          this.level++;
          this.levelSpan.html(this.level);
          this.showTempMessage("Переходим на новый уровень!");
        } else {
          this.showTempMessage("Отлично! Теперь немного быстрее)");
        }
        if(this.level === 2) {this.b1.create();}
        if(this.level === 3) {this.showMessage("Ура, Вы выиграли!");}
        this.speedSpan.html(this.speed);
      }
      new Target(this.m1).create();
    }
  }
Game.prototype.play = function() {
  this.iterate();
  var self = this;
  this.intervalId = setInterval(function() {
    self.iterate();
  },self.time);
}
Game.prototype.showTempMessage = function(str) {
  var self = this;
  $("#container").css("filter","opacity(50%)");
  $("#wrapper3 p").html(str);
  $("#alert").fadeIn(200,function() {
    setTimeout(function() {
      $("#alert").fadeOut();
      $("#container").css("filter","none");
      self.s1.create();
      self.play();
    },500);
  });
}
Game.prototype.showMessage = function(str) {
  clearInterval(this.intervalId);
  $("#container").css("filter","opacity(50%)");
  $("#wrapper3 p").html(str);
  this.key = function(e) {}
  $("#alert").fadeIn(200);
}
Game.prototype.key = function(e) {
    switch(e.keyCode) {
      case 37:
        this.s1.course = "left";
        break;
      case 38:
        this.s1.course = "up";
        break;
      case 39:
        this.s1.course = "right";
        break;
      case 40:
        this.s1.course = "down";
        break;
  }
}
