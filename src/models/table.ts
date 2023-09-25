import { Position } from '../types';
class Table {
  private width: number;
  private height: number;
  constructor(width = 5, height = 5) {
    this.width = width;
    this.height = height;
  }

  isValidPosition(position: Position) {
    return (
      position.x >= 0 &&
      position.x <= this.width &&
      position.y >= 0 &&
      position.y <= this.height
    )
  }

  getWidth() {
    return this.width;
  }

  getHeight() {
    return this.height;
  }
}

export default Table;