import {
  degreesToDirection,
  directionToDegrees,
  parseCommand,
} from '../helpers';
describe('directionToDegrees test', () => {
  it('should return correct degrees when direction is NORTH', () =>{
    expect(directionToDegrees('NORTH')).toEqual(0);
  });
  it('should return correct degrees when direction is EASR', () =>{
    expect(directionToDegrees('EAST')).toEqual(90);
  });
  it('should return correct degrees when direction is SOUTH', () =>{
    expect(directionToDegrees('SOUTH')).toEqual(180);
  });
  it('should return correct degrees when direction is WEST', () =>{
    expect(directionToDegrees('WEST')).toEqual(270);
  });
  it('should return correct -1 when direction is not valid', () =>{
    expect(directionToDegrees('TOP')).toEqual(-1);
  });
});

describe('degreesToDirection test', () => {
  it('should return correct direction when degress is 0', () =>{
    expect(degreesToDirection(0)).toEqual('NORTH');
  });
  it('should return correct direction when direction is 180', () =>{
    expect(degreesToDirection(90)).toEqual('EAST');
  });
  it('should return correct degrees when direction is EAST', () =>{
    expect(degreesToDirection(180)).toEqual('SOUTH');
  });
  it('should return correct degrees when direction is WEST', () =>{
    expect(degreesToDirection(270)).toEqual('WEST');
  });
  it('should return correct -1 when direction is not valid', () =>{
    expect(degreesToDirection(360)).toEqual('');
  });
});

describe('parseCommand test', () => {
  it('should return proper CommandParser when PLACE command', () => {
    expect(parseCommand('PLACE 0,0,NORTH')).toMatchObject({
      cmd: 'PLACE',
      args: ['0','0','NORTH']
    });
  });
  it('should return proper CommandParser when RIGHT command', () => {
    expect(parseCommand('RIGHT')).toMatchObject({
      cmd: 'RIGHT',
      args: []
    });
  });it('should return proper CommandParser when LEFT command', () => {
    expect(parseCommand('LEFT')).toMatchObject({
      cmd: 'LEFT',
      args: []
    });
  });
  it('should return proper CommandParser when MOVE command', () => {
    expect(parseCommand('MOVE')).toMatchObject({
      cmd: 'MOVE',
      args: []
    });
  });
  it('should return proper CommandParser when REPOT command', () => {
    expect(parseCommand('REPORT')).toMatchObject({
      cmd: 'REPORT',
      args: []
    });
  });
  it('should return incorrect CommandParser when invalid command', () => {
    expect(parseCommand('TOP')).toMatchObject({
      cmd: 'invalid command',
      args: []
    });
  });
});

