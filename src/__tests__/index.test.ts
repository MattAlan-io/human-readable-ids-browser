import { getID } from '../index';

describe('getID', () => {
  it('should return id with non-zero length', () => {
    const id = getID();
    expect(id).not.toHaveLength(0);
  });

  describe('when delimiter not passed', () => {
    it('should contain default delimiter', () => {
      const id = getID();
      expect(id.includes('-')).toEqual(true);
    });

    it('should generate id non-zero parts preceding and following delimiter', () => {
      const id = getID();
      const [start, end] = id.split('-');

      expect(start).toBeDefined();
      expect(start).not.toHaveLength(0);

      expect(end).toBeDefined();
      expect(end).not.toHaveLength(0);
    });
  });

  describe('when custom delimiter passed', () => {
    const customDelimiters = [' ', '!', '@', '/', '£', '$', '_', '%', '^'];

    it('id should contain delimiter', () => {
      customDelimiters.forEach(delimiter => {
        const id = getID(delimiter);
        expect(id.includes(delimiter)).toEqual(true);
      });
    });

    it('should generate id non-zero parts preceding and following delimiter', () => {
      customDelimiters.forEach(delimiter => {
        const id = getID(delimiter);
        const [start, end] = id.split(delimiter);

        expect(start).toBeDefined();
        expect(start).not.toHaveLength(0);

        expect(end).toBeDefined();
        expect(end).not.toHaveLength(0);
      });
    });
  });
});
