import Robot from '../models/robot';
import Table from '../models/table';

describe('Robot model', () => {
  let robot: Robot;
  beforeEach(() => {
    const table = new Table(5, 5)
    robot = new Robot({ x: 0, y: 0 }, 'NORTH', table)
  })
  describe('robot turnLeft', () => {
    it('Should turn left correctly', () => {
      robot.turnLeft()
      expect(robot.getDirection()).toEqual('WEST');
      robot.turnLeft()
      expect(robot.getDirection()).toEqual('SOUTH');
      robot.turnLeft()
      expect(robot.getDirection()).toEqual('EAST');
      robot.turnLeft()
      expect(robot.getDirection()).toEqual('NORTH');
    })
  })
  describe('robot turnRight', () => {
    it('Should turn right correctly', () => {
      robot.turnRight()
      expect(robot.getDirection()).toEqual('EAST')
      robot.turnRight()
      expect(robot.getDirection()).toEqual('SOUTH')
      robot.turnRight()
      expect(robot.getDirection()).toEqual('WEST')
      robot.turnRight()
      expect(robot.getDirection()).toEqual('NORTH')
    })
  })
  describe('robot move', () => {
    it('Should move correctly when direction is NORTH', () => {
      const table = new Table(5, 5)
      robot = new Robot({ x: 3, y: 3 }, 'NORTH', table)
      robot.move()
      expect(robot.getPosition()).toMatchObject({x: 3, y:4});
    })
    it('Should move correctly when direction is EAST', () => {
      const table = new Table(5, 5);
      robot = new Robot({ x: 3, y: 3 }, 'EAST', table);
      robot.move();
      expect(robot.getPosition()).toMatchObject({x: 4, y:3});
    })
    it('Should move correctly when direction is SOUTH', () => {
      const table = new Table(5, 5);
      robot = new Robot({ x: 3, y: 3 }, 'SOUTH', table);
      robot.move();
      expect(robot.getPosition()).toMatchObject({x: 3, y:2});
    })
    it('Should move correctly when direction is WEST', () => {
      const table = new Table(5, 5)
      robot = new Robot({ x: 3, y: 3 }, 'WEST', table)
      robot.move();
      expect(robot.getPosition()).toMatchObject({x: 2, y:3});
    })
    it('Should not move to south or west when robot is on the table west south corner', () => {
      const table = new Table(5, 5)
      robot = new Robot({ x: 0, y: 0 }, 'WEST', table)
      robot.move();
      expect(robot.getPosition()).toMatchObject({x: 0, y:0});
      robot = new Robot({ x: 0, y: 0 }, 'SOUTH', table)
      robot.move()
      expect(robot.getPosition()).toMatchObject({x: 0, y:0});
    });
    it('Should not move to west or north when robot is on the table west north corner', () => {
      const table = new Table(5, 5)
      robot = new Robot({ x: 0, y: 5 }, 'WEST', table)
      robot.move();
      expect(robot.getPosition()).toMatchObject({x: 0, y:5});
      robot = new Robot({ x: 0, y: 5 }, 'NORTH', table)
      robot.move();
      expect(robot.getPosition()).toMatchObject({x: 0, y:5});
    });
    it('Should not move to east or north when robot is on the table east north corner', () => {
      const table = new Table(5, 5)
      robot = new Robot({ x: 5, y: 5 }, 'NORTH', table)
      robot.move();
      expect(robot.getPosition()).toMatchObject({x: 5, y:5});
      robot = new Robot({ x: 5, y: 5 }, 'EAST', table)
      robot.move();
      expect(robot.getPosition()).toMatchObject({x: 5, y:5});
    })
    it('Should not move to east or south when robot is on the table east south corner', () => {
      const table = new Table(5, 5)
      robot = new Robot({ x: 5, y: 0 }, 'EAST', table)
      robot.move();
      expect(robot.getPosition()).toMatchObject({x: 5, y:0});
      robot = new Robot({ x: 5, y: 0 }, 'SOUTH', table)
      robot.move();
      expect(robot.getPosition()).toMatchObject({x: 5, y:0});
    })
  })
})
