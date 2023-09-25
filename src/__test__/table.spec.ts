import Table from '../models/table';

describe('Table model', () => {
  describe('New table without parameters', () => {
    let table: Table;
    beforeEach(() => {
      table = new Table()
    })
    it('Should create dimensions 5 units x 5 units table', () => {
      expect(table.getWidth()).toEqual(5);
      expect(table.getHeight()).toEqual(5);
    })
  })
  describe('New table with parameters', () => {
    let table: Table;
    beforeEach(() => {
      table = new Table(4, 4)
    })
    it('Should create demensions 4 units x 4 units table', () => {
      expect(table.getWidth()).toEqual(4);
      expect(table.getHeight()).toEqual(4);
    })
  })
  describe('isValidPosition', () => {
    let table: Table
    beforeEach(() => {
      table = new Table(5, 5)
    })
    it('Should return true when position is valid', () => {
      const position = { x: 5, y: 5 }
      expect(table.isValidPosition(position)).toBeTruthy();
    })
    it('Should return false when position x or y is minus', () => {
      let position = { x: -1, y: 5 }
      expect(table.isValidPosition(position)).toBeFalsy()
      position = { x: 5, y: -1 }
      expect(table.isValidPosition(position)).toBeFalsy();
    })
    it('Should return false when position x or y is exceed width or length', () => {
      let position = { x: 7, y: 5 }
      expect(table.isValidPosition(position)).toBeFalsy();
      position = { x: 5, y: 8 }
      expect(table.isValidPosition(position)).toBeFalsy();
    })
  })
})
