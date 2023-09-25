import {
  NORTH,
  EAST,
  SOUTH,
  WEST,
} from './consts'
import { CommandPaser } from './types'
export const directionToDegrees = (direction:string): number => {
  switch (direction) {
    case 'NORTH':
      return NORTH;
    case 'EAST':
      return EAST;
    case 'SOUTH':
      return SOUTH;
    case 'WEST':
      return WEST;
    default:
      return -1; 
  }
}

export const degreesToDirection = (degrees:number): string => {
  switch (degrees) {
    case NORTH:
      return 'NORTH'
    case EAST:
      return 'EAST'
    case SOUTH:
      return 'SOUTH'
    case WEST:
      return 'WEST'
    default:
      return ''
  }
}

export const parseCommand = (command: string): CommandPaser=> {
  const match = command.match(/^((PLACE \d,\d,(EAST|WEST|NORTH|SOUTH))|RIGHT|LEFT|MOVE|REPORT)$/);
  if (match) {
    const split = match[0].split(" ");
    if (split.length > 1) {
      return {
        cmd: split[0],
        args: split[1].split(",") 
      } 
    }
  
    return {
      cmd: split[0], 
      args: []
    }
  }

  return {
    cmd: "invalid command",
    args: [] 
  }
}