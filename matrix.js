function Matrix(containerId,rows,cols) {
  this.containerId = containerId;
  this.rows = rows;
  this.cols = cols;
}
Matrix.prototype.create = function() {
  var matrix = document.getElementById(this.containerId);
  var n = this.rows * this.cols;
  for (var i = 0; i < n; i++) {
    var div = document.createElement("div");
    div.className = "cell";
    matrix.appendChild(div);
  }
}
Matrix.prototype.getElement = function(row,col) {
  return document.getElementById(this.containerId).children[(row-1)*this.cols + col - 1];
}
Matrix.prototype.getCellOn = function(row,col) {
  var elem = this.getElement(row,col);
  return (elem.className === "cell on");
}
Matrix.prototype.setCellOn = function(row,col,val) {
  var cell = this.getElement(row,col);
  cell.className = (val?"cell on":"cell");
}
Matrix.prototype.getCellTarget = function(row,col) {
  var elem = this.getElement(row,col);
  return (elem.className === "cell target");
}
Matrix.prototype.setCellTarget = function(row,col,val) {
  var cell = this.getElement(row,col);
  cell.className = (val?"cell target":"cell");
}
Matrix.prototype.getCellBorder = function(row,col) {
  var elem = this.getElement(row,col);
  return (elem.className === "cell border");
}
Matrix.prototype.setCellBorder = function(row,col,val) {
  var cell = this.getElement(row,col);
  cell.className = (val?"cell border":"cell");
}
