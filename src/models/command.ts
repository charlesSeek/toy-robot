import Robot from './robot';
import Table from './table';
import { parseCommand } from '../helpers'
import { CommandPaser, Position } from '../types'
import { WIDTH, HEIGHT } from '../consts'

class Command {
  private robot: Robot | null;
  private table: Table;

  constructor(table: Table) {
    this.table = table;
    this.robot = null;
  }

  getRobot() {
    return this.robot;
  }

  getTable() {
    return this.table;
  }

  run(command: string) {
    const commandParser: CommandPaser = parseCommand(command);
    const {
      cmd,
      args
    } = commandParser;
    switch (cmd) {
      case 'PLACE':
        const [xStr,yStr, direction] = args;
        const x = parseFloat(xStr);
        const y = parseFloat(yStr);
        if (x >= 0 && 
            x <= WIDTH && 
            y >= 0 &&
            y <= HEIGHT) {
          const position: Position = {
            x,
            y
          }
          this.robot = new Robot(position, direction, this.table)
        }
        break;
      case 'LEFT':
        if (this.robot) {
          this.robot.turnLeft();
        }
        break;
      case 'RIGHT':
        if (this.robot) {
          this.robot.turnRight();
        }
        break;
      case 'MOVE':
        if (this.robot) {
          this.robot.move();
        }
        break;
      case 'REPORT':
        if (this.robot) {
          this.robot.report();
        }
        break;
      default:
        console.log('invalid command');
        break;
    }

  }
}

export default Command;