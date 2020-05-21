import { animals, adjectives } from './values';

/**
 * Gets a random integer between two points
 * @param min Minimum integer - inclusive
 * @param max Maximum integer - exclusive
 */
function getRandomInteger(min: number, max: number) {
  return Math.floor(Math.random() * (max - min)) + min;
}

/**
 * Gets a random item from an array
 * @param arr Array to get item from
 */
function getRandomItem<T>(arr: T[]) {
  const randomIndex = getRandomInteger(0, arr.length);
  return arr[randomIndex];
}

export type IDConfig = {
  delimiter?: string;
  withNumberRange?: [number, number];
}

export const __DEFAULT_ID_DELIMITER = '-'
const defaultConfig = { delimiter: __DEFAULT_ID_DELIMITER };

export function __isNumeric (num: any): num is number {
  return (typeof(num) === 'number' || typeof(num) === "string" && num.trim() !== '') && !isNaN(num as number);
}


/**
 * Gets an human readable ID in the format adjective<DELIMITER>animal
 * @param delimiter Defaults to a hyphen (-), or pass in a custom delimiter
 * @param useNumberRange Appends a number to the end of the array between passed min and max value
 */
export function getID(config?: IDConfig) {
  const delimiter = config?.delimiter || defaultConfig.delimiter;

  const adjective = getRandomItem<string>(adjectives);
  const animal = getRandomItem<string>(animals);

  let id = [adjective, animal].join(delimiter);

  const withNumberRange = config?.withNumberRange;

  const isNumberRangeValid = Array.isArray(withNumberRange)
    && withNumberRange.length === 2
    && __isNumeric(withNumberRange[0])
    && __isNumeric(withNumberRange[1])
    && withNumberRange[0] >= 0 
    && withNumberRange[1] > withNumberRange[0];

  // Append number range to ID
  if (isNumberRangeValid) {
    const range = withNumberRange as [number, number];
    const min = range[0];
    const max = range[1];

    const number = getRandomInteger(min, max);

    id = [id, number].join(delimiter);
  } else if (withNumberRange !== undefined) {

    throw new Error('Number range invalid! Expected array two numbers in the format [minimum, maximum], with a minimum > 0 and a maximum > minimum. Received: [' + withNumberRange?.toString() + ']');
  }

  return id;
}
