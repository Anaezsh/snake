function Target(matrix) {
  this.matrix = matrix;
}
Target.prototype.create = function() {
  do {
    var targetRow = Math.floor(Math.random()*this.matrix.rows) + 1;
    var targetCol = Math.floor(Math.random()*this.matrix.cols) + 1;
  } while (this.matrix.getCellOn(targetRow,targetCol) || this.matrix.getCellBorder(targetRow,targetCol));
  this.matrix.setCellTarget(targetRow,targetCol,true);
}
