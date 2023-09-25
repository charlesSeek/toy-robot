import Table from '../models/table';
import Command from '../models/command';
import { WIDTH, HEIGHT } from '../consts';

describe('command model', () => {
  describe('place command', () => {
    it('Should place robot on table correctly', () => {
      const table = new Table(WIDTH, HEIGHT);
      const command = new Command(table);
      command.run('PLACE 0,0,NORTH');
      expect(command.getRobot()?.getDirection()).toEqual('NORTH');
      expect(command.getRobot()?.getPosition()).toMatchObject({ x:0, y:0 });
    })
    it('Should place robot on table failed', () => {
      const table = new Table(WIDTH, HEIGHT);
      const command = new Command(table);
      command.run('PLACE width+1,0,NORTH');
      expect(command.getRobot()).toBeUndefined;
    })
  })
  describe('left command', () => {
    it('Should turn left', () => {
      const table = new Table(WIDTH, HEIGHT);
      const command = new Command(table);
      command.run('PLACE 0,0,NORTH');
      command.run('LEFT');
      expect(command.getRobot()?.getDirection()).toEqual('WEST');
    })
  })
  describe('right command', () => {
    it('Should turn right', () => {
      const table = new Table(WIDTH, HEIGHT);
      const command = new Command(table);
      command.run('PLACE 0,0,NORTH');
      command.run('RIGHT');
      expect(command.getRobot()?.getDirection()).toEqual('EAST');
    })
  })
  describe('move command', () => {
    let table: Table;
    let command: Command;
    beforeEach(() => {
      table = new Table(WIDTH, HEIGHT);
      command = new Command(table)
    })
    it('Should move upward', () => {
      command.run('PLACE 0,0,NORTH');
      command.run('MOVE');
      expect(command.getRobot()?.getPosition()).toMatchObject({x:0,y:1});
    });
    it('Should move downward', () => {
      command.run('PLACE 0,1,SOUTH');
      command.run('MOVE');
      expect(command.getRobot()?.getPosition()).toMatchObject({x:0,y:0});
    })
    it('Should move forward', () => {
      command.run('PLACE 0,0,EAST');
      command.run('MOVE');
      expect(command.getRobot()?.getPosition()).toMatchObject({x:1,y:0});
    })
    it('Should move backward', () => {
      command.run('PLACE 1,0,WEST');
      command.run('MOVE');
      expect(command.getRobot()?.getPosition()).toMatchObject({x:0,y:0});
    })
    it('Should not move', () => {
      command.run('PLACE 0,0,SOUTH');
      command.run('MOVE');
      expect(command.getRobot()?.getPosition()).toMatchObject({x:0,y:0});
    })
  })
  describe('report command', () => {
    it('Should report robot position and direction', () => {
      const table = new Table(WIDTH, HEIGHT);
      const command = new Command(table);
      command.run('PLACE 0,0,NORTH');
      command.run('RIGHT');
      command.run('MOVE');
      expect(command.getRobot()?.getPosition()).toMatchObject({x:1,y:0});
      expect(command.getRobot()?.getDirection()).toEqual('EAST');
    })
  })
})
