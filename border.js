function Border(matrix) {
  this.matrix = matrix;
  this.count = 1;
}
Border.prototype.create = function() {
  console.log(this.count);
  switch(this.count) {
    case 1:
      for (var i = 0; i < 4; i++) {
        this.matrix.setCellBorder(2+i,2,true);
      }
      for (var i = 1; i < 4; i++) {
        this.matrix.setCellBorder(2,2+i,true);
      }
      this.count++;
      break;
    case 2:
      for (var i = 0; i < 4; i++) {
        this.matrix.setCellBorder(2+i,this.matrix.cols-1,true);
      }
      for (var i = 1; i < 4; i++) {
        this.matrix.setCellBorder(2,this.matrix.cols-1-i,true);
      }
      this.count++;
      break;
    case 3:
      for (var i = 0; i < 4; i++) {
        this.matrix.setCellBorder(this.matrix.rows-1-i,this.matrix.cols-1,true);
      }
      for (var i = 1; i < 4; i++) {
        this.matrix.setCellBorder(this.matrix.rows-1,this.matrix.cols-1-i,true);
      }
      this.count++;
      break;
    case 4:
      for (var i = 0; i < 4; i++) {
        this.matrix.setCellBorder(this.matrix.rows-1-i,2,true);
      }
      for (var i = 1; i < 4; i++) {
        this.matrix.setCellBorder(this.matrix.rows-1,2+i,true);
      }
      this.count++;
      break;
    case 5:
      for (var i = 0; i < 3; i++) {
        this.matrix.setCellBorder(this.matrix.rows/2-3+i,this.matrix.cols/2-3,true);
      }
      for (var i = 1; i < 3; i++) {
        this.matrix.setCellBorder(this.matrix.rows/2-3,this.matrix.cols/2-3+i,true);
      }
      this.count++;
      break;
    case 6:
      for (var i = 0; i < 3; i++) {
        this.matrix.setCellBorder(this.matrix.rows/2-3+i,this.matrix.cols/2+4,true);
      }
      for (var i = 1; i < 3; i++) {
        this.matrix.setCellBorder(this.matrix.rows/2-3,this.matrix.cols/2+4-i,true);
      }
      this.count++;
      break;
    case 7:
      for (var i = 0; i < 3; i++) {
        this.matrix.setCellBorder(this.matrix.rows/2+4-i,this.matrix.cols/2+4,true);
      }
      for (var i = 1; i < 3; i++) {
        this.matrix.setCellBorder(this.matrix.rows/2+4,this.matrix.cols/2+4-i,true);
      }
      this.count++;
      break;
    case 8:
      for (var i = 0; i < 3; i++) {
        this.matrix.setCellBorder(this.matrix.rows/2+4-i,this.matrix.cols/2-3,true);
      }
      for (var i = 1; i < 3; i++) {
        this.matrix.setCellBorder(this.matrix.rows/2+4,this.matrix.cols/2-3+i,true);
      }
      this.count++;
      break;
    case 9:
      break;
  }
}
