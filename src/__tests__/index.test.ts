import { getID, __DEFAULT_ID_DELIMITER, __isNumeric } from '../index';

describe('getID', () => {
  it('should return id with non-zero length', () => {
    const id = getID();
    expect(id).not.toHaveLength(0);
  });

  describe('when delimiter not passed', () => {
    it('should contain default delimiter', () => {
      const id = getID();
      expect(id.includes(__DEFAULT_ID_DELIMITER)).toEqual(true);
    });

    it('should generate id non-zero parts preceding and following delimiter', () => {
      const id = getID();
      const [start, end] = id.split(__DEFAULT_ID_DELIMITER);

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
        const id = getID({ delimiter });
        expect(id.includes(delimiter)).toEqual(true);
      });
    });

    it('should generate id non-zero parts preceding and following delimiter', () => {
      customDelimiters.forEach(delimiter => {
        const id = getID({ delimiter });
        const [start, end] = id.split(delimiter);

        expect(start).toBeDefined();
        expect(start).not.toHaveLength(0);

        expect(end).toBeDefined();
        expect(end).not.toHaveLength(0);
      });
    });
  });

  describe('when custom valid range passed', () => {
    const customRanges: [number, number][] = [[0, 1], [1, 2], [0, 99], [0, 10000]];

    it('id should contain number in range', () => {
      customRanges.forEach(range => {
        const id = getID({ withNumberRange: range });

        const parts = id.split(__DEFAULT_ID_DELIMITER);
        const lastIndex = parts.length - 1;
        const numberString = parts[lastIndex];

        expect(__isNumeric(numberString)).toEqual(true);
        
        const num = parseInt(numberString, 0);
        expect(num).toBeGreaterThanOrEqual(range[0]);
        expect(num).toBeLessThan(range[1]);
      });
    });
  });

  describe('when custom invalid range passed', () => {
    const customRanges: any[] = [[0, 0], [-1, 0], [1, 0], [-1, -1], ['foo', 100], [{}, undefined], [null, undefined]];

    it('should throw for every range', () => {
      customRanges.forEach(range => {
        expect(() => getID({ withNumberRange: range })).toThrow();
      });
    });
  });
});
