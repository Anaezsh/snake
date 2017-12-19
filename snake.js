function Snake(row,col,course,matrix) {
  this.row = row;
  this.col = col;
  this.body = [];
  this.course = course;
  this.matrix = matrix;
  this.eat = false;
  this.long = 3;
  this.col = col;
  this.collide = false;
}
Snake.prototype.create = function() {
  for (var i = 0; i < this.long; i++) {
    this.body[i] = [this.row,this.col];
    this.matrix.setCellOn(this.body[i][0],this.body[i][1],true);
    if(i === 2) {}
    else {
      this.col++;
    }
  }
}
Snake.prototype.move = function() {
  switch(this.course) {
    case "left":
      if(this.body[this.long-1][1] === 1 || this.matrix.getCellOn(this.row,this.col-1) || this.matrix.getCellBorder(this.row,this.col-1)) {this.collide = true; return;}
      this.col--;
      break;
    case "right":
      if(this.body[this.long-1][1] === 20 || this.matrix.getCellOn(this.row,this.col+1) || this.matrix.getCellBorder(this.row,this.col+1)) {this.collide = true; return;}
      this.col++;
      break;
    case "up":
      if(this.body[this.long-1][0] === 1 || this.matrix.getCellOn(this.row-1,this.col) || this.matrix.getCellBorder(this.row-1,this.col)) {this.collide = true; return;}
      this.row--;
      break;
    case "down":
      if(this.body[this.long-1][0] === 20 || this.matrix.getCellOn(this.row+1,this.col) || this.matrix.getCellBorder(this.row+1,this.col)) {this.collide = true; return;}
      this.row++;
      break;
  }
  if(!this.matrix.getCellTarget(this.row,this.col)) {
    this.cut();
  } else {
    this.targetMeet();
  }
  this.ahead();
}
Snake.prototype.cut = function() {
  this.matrix.setCellOn(this.body[0][0],this.body[0][1],false);
  this.body.shift();
}
Snake.prototype.ahead = function() {
  this.body.push([this.row,this.col]);
  this.matrix.setCellOn(this.body[this.long-1][0],this.body[this.long-1][1],true);
}
Snake.prototype.targetMeet = function() {
  this.long++;
  this.eat = true;
  this.matrix.setCellTarget(this.row,this.col,false);
}
Snake.prototype.delete = function() {
  for (var i = 0; i < this.long; i++) {
    this.matrix.setCellOn(this.body[i][0],this.body[i][1],false);
  }
  this.long = 3;
  this.course = "right";
  this.row = 1;
  this.col = 1;
  this.body = [];
}
