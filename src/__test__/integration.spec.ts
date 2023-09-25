import Table from '../models/table';
import Command from '../models/command';
import { WIDTH, HEIGHT } from '../consts';

describe('integration test', () => {
  it('Should pass test case 1', () => {
    const table = new Table(WIDTH, HEIGHT);
    const command = new Command(table);
    command.run('PLACE 0,0,NORTH');
    command.run('MOVE');
    expect(command.getRobot()?.getDirection()).toEqual('NORTH');
      expect(command.getRobot()?.getPosition()).toMatchObject({ x:0, y:1 });
  })
  it('Should pass test case 2', () => {
    const table = new Table(WIDTH, HEIGHT);
    const command = new Command(table);
    command.run('PLACE 0,0,NORTH');
    command.run('LEFT');
    expect(command.getRobot()?.getDirection()).toEqual('WEST');
      expect(command.getRobot()?.getPosition()).toMatchObject({ x:0, y:0 });
  })
  it('Should pass test case 3', () => {
    const table = new Table(WIDTH, HEIGHT);
    const command = new Command(table);
    command.run('PLACE 1,2,EAST');
    command.run('MOVE');
    command.run('MOVE');
    command.run('LEFT');
    command.run('MOVE');
    expect(command.getRobot()?.getDirection()).toEqual('NORTH');
      expect(command.getRobot()?.getPosition()).toMatchObject({ x:3, y:3 });
  });
})
