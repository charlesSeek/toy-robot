import { Position } from '../types';
import Table from './table'
import { directionToDegrees, degreesToDirection } from '../helpers';
import { 
  DEGREES_IN_CIRCLE,
  DEGREES_OF_ROTATION,
} from '../consts'

class Robot {
  private position: Position;
  private direction: string;
  private table: Table;

  constructor(position: Position, direction: string, table: Table) {
    this.position = position
    this.direction = direction
    this.table = table
  }

  getPosition() {
    return this.position;
  }

  getDirection() {
    return this.direction;
  }

  getTable() {
    return this.table;
  }

  turnLeft() {
    let degrees = directionToDegrees(this.direction);
    if (degrees >=0) {
      degrees -= DEGREES_OF_ROTATION
      if (degrees < 0) {
        degrees += DEGREES_IN_CIRCLE
      }
      this.direction = degreesToDirection(degrees);
    }
  }

  turnRight() {
    let degrees = directionToDegrees(this.direction);
    if (degrees >=0) {
      degrees += DEGREES_OF_ROTATION
      if (degrees >= DEGREES_IN_CIRCLE) {
        degrees -= DEGREES_IN_CIRCLE
      }
      this.direction = degreesToDirection(degrees);
    }
  }

  move(): void {
    let newPosition = this.position;
    switch(this.direction) {
      case 'NORTH':
        newPosition = { ...newPosition, y: newPosition.y + 1 };
        if(this.table.isValidPosition(newPosition)) {
          this.position = newPosition
        }
        break;
      case 'EAST':
        newPosition = {...newPosition, x: newPosition.x + 1 };
        if (this.table.isValidPosition(newPosition)) {
          this.position = newPosition
        }
        break;
      case 'SOUTH':
        newPosition = { ...newPosition, y: newPosition.y - 1 };
        if(this.table.isValidPosition(newPosition)) {
          this.position = newPosition
        }
        break;
      case 'WEST':
        newPosition = {...newPosition, x: newPosition.x - 1 };
        if (this.table.isValidPosition(newPosition)) {
          this.position = newPosition
        }
        break;
      default:
        break;
    }
  }

  report() {
    console.log(`${this.position.x},${this.position.y},${this.direction}`);
  }
}

export default Robot;